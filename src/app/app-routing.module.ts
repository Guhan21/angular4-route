import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate.guard';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ServerResolver } from './servers/server/server.resolver.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children:[
    {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
    {path: ':id/edit', canDeactivate: [CanDeactivateGaurd], component: EditServerComponent}
  ]},
//   {path: 'not-found', component: NotFoundComponent},
  {path: 'not-found', component: ErrorComponentComponent, data:{message: 'Not Found'}},
  {path: '**', redirectTo: 'not-found'}  
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}