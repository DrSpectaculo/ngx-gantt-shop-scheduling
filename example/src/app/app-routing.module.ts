import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppExampleComponentsComponent } from './components/components.component';
import { AppGanttGroupsExampleComponent } from './gantt-groups/gantt-groups.component';

const routes: Routes = [
    {
        path: 'examples',
        component: AppExampleComponentsComponent,
        children: [
            { path: '', redirectTo: 'basic', pathMatch: 'full' },

            { path: 'groups', component: AppGanttGroupsExampleComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false,
            enableTracing: false,
            onSameUrlNavigation: 'reload'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
