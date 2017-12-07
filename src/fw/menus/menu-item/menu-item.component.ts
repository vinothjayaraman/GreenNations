import { Component,Input, OnInit, HostBinding, HostListener } from '@angular/core';
import { MenuItem, MenuService } from '../../services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItem;
  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;
  isActiveRoute: boolean = false;

  mouseInItem: boolean = false;
  mouseInPopup: boolean = false;
  popupLeft: number = 0;
  popupTop: number = 34;

  constructor(private menuService: MenuService) { }

  onPopupMouseLeave(event): void{
    if (!this.menuService.isVertical) {
      this.mouseInPopup = false;
    }
  }

  onPopupMouseEnter(event): void{
    if (!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

  @HostListener('mouseleave',['$event'])
  onMouseLeave(event):void{
    if (!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter():void{
    if (!this.menuService.isVertical) {
      if (this.item.submenu) {
        this.mouseInItem = true;
        if (this.parentIsPopup) {
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
    }
  }

  ngOnInit() {
  }

}
