import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../models/models';
import { MOCK_MENU_ITEMS } from '../data/data';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor() { }

    getMenuItems(): Observable<MenuItem[]> {
        return of(MOCK_MENU_ITEMS);
    }

    getItemById(id: number): Observable<MenuItem | undefined> {
        const item = MOCK_MENU_ITEMS.find(i => i.id === id);
        return of(item);
    }
}
