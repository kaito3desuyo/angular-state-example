import { Component, OnInit } from '@angular/core';
import { RxjsStateComponentService } from '../rxjs-state/rxjs-state-component.service';
import { RxjsExampleService } from './rxjs-example.service';

@Component({
    selector: 'app-rxjs-example',
    templateUrl: './rxjs-example.component.html',
    styleUrls: ['./rxjs-example.component.scss'],
})
export class RxjsExampleComponent implements OnInit {
    state$ = this.rxjsExampleService.state$.asObservable();

    constructor(private readonly rxjsExampleService: RxjsExampleService) {}

    ngOnInit(): void {
        this.state$.subscribe((state) => console.log(state));
    }

    setState(state: { hoge: boolean }): void {
        this.rxjsExampleService.state$.next(state);
    }
}
