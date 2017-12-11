import { Component,Input, OnInit, HostBinding, HostListener,ElementRef,Renderer} from '@angular/core';
import { MenuItem, MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router, 
              private menuService: MenuService,
              private el: ElementRef,
              private renderer: Renderer) { }

  @HostListener('click',['$event'])
  onclick(event): void{
    event.stopPropagation();
    
    if (this.item.submenu) {
      if(this.menuService.isVertical){
        this.mouseInPopup = !this.mouseInPopup;
      }
    } else if(this.item.route) {
      let newEvent = new MouseEvent('mouseleave',{bubbles: true})  ;
      this.renderer.invokeElementMethod(
        this.el.nativeElement,'dispatchEvent',[newEvent]
      );

      this.router.navigate(['/'+this.item.route]);
    }
  }

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
