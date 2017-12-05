import {Injectable} from '@angular/core';

export interface MenuItem{
    text: string,
    icon: string,
    route: string,
    submenu: Array<MenuItem>
}

@Injectable()
export class MenuService{
    items: Array<MenuItem>;
    isVertical: boolean = false;
    showingLeftSideMenu: boolean = false;

    toggleLeftSideMenu() : void {
        this.isVertical = true;
        this.showingLeftSideMenu = !this.showingLeftSideMenu;
    }

    closeLeftSideMenu() : void {
        this.isVertical = false;
        this.showingLeftSideMenu = false;
    }
}