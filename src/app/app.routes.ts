import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'userprofile', component: UserProfileComponent },

];

export { ROUTES };