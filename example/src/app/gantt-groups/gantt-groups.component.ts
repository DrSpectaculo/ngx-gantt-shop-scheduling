import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { GanttViewType, GanttItem, GanttGroup, NgxGanttComponent, NgxGanttTableComponent, NgxGanttTableColumnComponent } from 'ngx-gantt';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { random, randomGroupsAndItems, randomItems } from '../helper';
import { ThyContent, ThyHeader, ThyLayout } from 'ngx-tethys/layout';
import { ThyButton, ThyButtonGroup } from 'ngx-tethys/button';
import { DatePipe } from '@angular/common';
import { ThyInputSearch } from 'ngx-tethys/input';
@Component({
    selector: 'app-gantt-groups-example',
    templateUrl: './gantt-groups.component.html',
    imports: [
        ThyLayout,
        ThyContent,
        ThyHeader,
        ThyButton,
        ThyButtonGroup,
        NgxGanttComponent,
        NgxGanttTableComponent,
        NgxGanttTableColumnComponent,
        DatePipe
    ]
})
export class AppGanttGroupsExampleComponent implements OnInit {
    views = [
        {
            name: '日',
            value: GanttViewType.day
        },
        {
            name: '周',
            value: GanttViewType.week
        },
        {
            name: '月',
            value: GanttViewType.month
        },
        {
            name: '季',
            value: GanttViewType.quarter
        },
        {
            name: '年',
            value: GanttViewType.year
        }
    ];

    viewType: GanttViewType = GanttViewType.day;

    items: GanttItem[] = [];

    groups: GanttGroup[] = [];

    expanded = true;

    @ViewChild('gantt') ganttComponent: NgxGanttComponent;

    @HostBinding('class.gantt-example-component') class = true;

    constructor() {}

    ngOnInit(): void {
        this.groups = [
            { id: '000000', title: 'Machine-0' },
            { id: '000001', title: 'Machine-1' },
            { id: '000002', title: 'Machine-2' }
        ];

        this.items = [
            {
                id: '00000',
                title: 'Job 0',
                group_id: '000000',
                expanded: true,
                color: '#4CAF50',
                children: [
                    {
                        id: '00000-00',
                        title: 'OP - 0',
                        start: new Date('2026-07-14'),
                        end: new Date('2026-08-03'),
                        color: '#4CAF50'
                    },
                    {
                        id: '00000-01',
                        title: 'OP - 1',
                        start: new Date('2026-08-05'),
                        end: new Date('2026-09-12'),
                        color: '#4CAF50'
                    }
                ]
            },
            {
                id: '00001',
                title: 'Job 1',
                group_id: '000000',
                expanded: true,
                color: '#2196F3',
                children: [
                    {
                        id: '00001-00',
                        title: 'OP - 0',
                        start: new Date('2026-07-02'),
                        end: new Date('2026-07-28'),
                        color: '#2196F3'
                    },
                    {
                        id: '00001-01',
                        title: 'OP - 1',
                        start: new Date('2026-07-31'),
                        end: new Date('2026-08-29'),
                        color: '#2196F3'
                    }
                ]
            },
            {
                id: '00002',
                title: 'Job 2',
                group_id: '000001',
                expanded: true,
                color: '#F44336',
                children: [
                    {
                        id: '00002-00',
                        title: 'OP - 0',
                        start: new Date('2026-08-18'),
                        end: new Date('2026-09-22'),
                        color: '#F44336'
                    },
                    {
                        id: '00002-01',
                        title: 'OP - 1',
                        start: new Date('2026-09-25'),
                        end: new Date('2026-11-08'),
                        color: '#F44336'
                    }
                ]
            },
            {
                id: '00003',
                title: 'Job 3',
                group_id: '000001',
                expanded: true,
                color: '#FF9800',
                children: [
                    {
                        id: '00003-00',
                        title: 'OP - 0',
                        start: new Date('2026-07-20'),
                        end: new Date('2026-08-18'),
                        color: '#FF9800'
                    },
                    {
                        id: '00003-01',
                        title: 'OP - 1',
                        start: new Date('2026-08-21'),
                        end: new Date('2026-10-01'),
                        color: '#FF9800'
                    }
                ]
            },
            {
                id: '00004',
                title: 'Job 4',
                group_id: '000002',
                expanded: true,
                color: '#9C27B0',
                children: [
                    {
                        id: '00004-00',
                        title: 'OP - 0',
                        start: new Date('2026-08-08'),
                        end: new Date('2026-09-14'),
                        color: '#9C27B0'
                    },
                    {
                        id: '00004-01',
                        title: 'OP - 1',
                        start: new Date('2026-09-17'),
                        end: new Date('2026-10-25'),
                        color: '#9C27B0'
                    }
                ]
            },
            {
                id: '00005',
                title: 'Job 5',
                group_id: '000002',
                expanded: true,
                color: '#009688',
                children: [
                    {
                        id: '00005-00',
                        title: 'OP - 0',
                        start: new Date('2026-07-26'),
                        end: new Date('2026-08-20'),
                        color: '#009688'
                    },
                    {
                        id: '00005-01',
                        title: 'OP - 1',
                        start: new Date('2026-08-23'),
                        end: new Date('2026-10-06'),
                        color: '#009688'
                    }
                ]
            }
        ];
    }

    expandAllGroups() {
        if (this.expanded) {
            this.expanded = false;
            this.ganttComponent.collapseAll();
        } else {
            this.expanded = true;
            this.ganttComponent.expandAll();
        }
    }

    childrenResolve = (item: GanttItem) => {
        const children = randomItems(random(1, 5), item);
        return of(children).pipe(delay(1000));
    };
}
