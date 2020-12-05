import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RxjsExampleService {
    constructor() {}

    state$ = new BehaviorSubject<{ hoge: boolean }>({ hoge: true });
}
