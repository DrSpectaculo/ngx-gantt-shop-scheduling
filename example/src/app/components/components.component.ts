import { Component, OnInit } from '@angular/core';
import { DocItem } from '@docgeni/template';

@Component({
    selector: 'app-example-components',
    templateUrl: './components.component.html',
    standalone: false
})
export class AppExampleComponentsComponent implements OnInit {
    menus: DocItem[] = [
        {
            id: 'groups',
            title: 'Gantt Items',
            subtitle: 'Groups',
            path: 'groups'
        }
    ];

    constructor() {}

    ngOnInit() {}
}
