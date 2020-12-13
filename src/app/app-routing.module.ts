import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'rxjs-example',
        loadChildren: () =>
            import('./rxjs-example/rxjs-example.module').then(
                (m) => m.RxjsExampleModule
            ),
    },
    {
        path: 'rxjs-state',
        loadChildren: () =>
            import('./rxjs-state/rxjs-state.module').then(
                (m) => m.RxjsStateModule
            ),
    },
    {
        path: 'ngrx-state',
        loadChildren: () =>
            import('./ngrx-state/ngrx-state.module').then(
                (m) => m.NgrxStateModule
            ),
    },
    {
        path: 'akita-state',
        loadChildren: () =>
            import('./akita-state/akita-state.module').then(
                (m) => m.AkitaStateModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
