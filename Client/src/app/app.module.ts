import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { FullNavbarComponent } from './components/full-navbar/full-navbar.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { LoginHeaderComponent } from './components/login/login-header/login-header.component';
import { LoginInfoBarComponent } from './components/login/login-info-bar/login-info-bar.component';
import { LoginChangeModeBtnComponent } from './components/login/login-change-mode-btn/login-change-mode-btn.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';
import { RecipeInfoTagComponent } from './components/recipe-info-tag/recipe-info-tag.component';
import { HttpClientModule } from '@angular/common/http';
import { UserBarComponent } from './components/user-bar/user-bar.component';
import { LoginSuccessNotificationComponent } from './components/login/login-success-notification/login-success-notification.component';
import { BannerComponent } from './components/banner/banner.component';
import { RecipePreviewComponent } from './components/recipe-preview/recipe-preview.component';
// import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    FullNavbarComponent,
    RecipesComponent,
    LoginComponent,
    IndexComponent,
    LoginFormComponent,
    RecipeComponent,
    LoginHeaderComponent,
    LoginInfoBarComponent,
    LoginChangeModeBtnComponent,
    CustomCheckboxComponent,
    RecipeInfoTagComponent,
    UserBarComponent,
    LoginSuccessNotificationComponent,
    BannerComponent,
    RecipePreviewComponent,
    // FetchDataComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
