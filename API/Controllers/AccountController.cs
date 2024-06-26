﻿using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.Dtos;
using API.DTOs;
using API.Entites;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly DataContext _context;
    private readonly ITokenService _tokenService;

    public AccountController(DataContext context, ITokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
        if (await IsUserExists(registerDto.Username))
            return BadRequest("Username is taken");

        using var hmac = new HMACSHA512();
        var user = new AppUser
        {
            UserName = registerDto.Username,
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
            PasswordSalt = hmac.Key
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return new UserDto { Username = user.UserName, Token = _tokenService.CreateToken(user) };
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await _context.Users.SingleOrDefaultAsync(
            user => user.UserName == loginDto.Username.ToLower()
        );

        if (user == null)
            return Unauthorized("Nie znaleziono użytkownika");

        using var hmac = new HMACSHA512(user.PasswordSalt);
        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

        for (int i = 0; i < computedHash.Length; i++)
            if (computedHash[i] != user.PasswordHash[i])
                return Unauthorized("Invalid password");

        return new UserDto { Username = user.UserName, Token = _tokenService.CreateToken(user) };
    }

    [HttpDelete("delete/{id}")]
    public async Task<ActionResult<AppUser>> Delete(int id)
    {
        var user = await _context.Users.SingleOrDefaultAsync(user => user.Id == id);

        if (user == null)
            return NoContent();

        _context.Users.Remove(user);
        _context.SaveChanges();

        return user;
    }

    public async Task<bool> IsUserExists(string username) =>
        await _context.Users.AnyAsync(x => x.UserName == username);
}
