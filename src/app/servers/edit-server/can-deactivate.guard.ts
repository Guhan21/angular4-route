import { Observable } from 'rxjs/observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanDeactivateComponent {
    canDeactivate: ()=> Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGaurd implements CanDeactivate<CanDeactivateComponent>{
    canDeactivate(component: CanDeactivateComponent, 
                    curretRoute: ActivatedRouteSnapshot, 
                    currentState: RouterStateSnapshot, 
                    nextState?: RouterStateSnapshot): Observable<boolean>  | Promise<boolean> | boolean{
                        return component.canDeactivate();
    }
}