import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent {
  toggleSidebar: boolean = false;

  @Output()
  sidebarStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  onHamburgerClicked() {
    this.toggleSidebar = !this.toggleSidebar;
    console.log(this.toggleSidebar);
    this.sidebarStatusChanged.emit(this.toggleSidebar);
  }
}
