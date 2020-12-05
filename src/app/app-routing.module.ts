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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
