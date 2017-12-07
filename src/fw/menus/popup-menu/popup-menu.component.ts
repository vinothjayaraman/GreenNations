import { Component,Input, OnInit } from '@angular/core';
import {MenuService, MenuItem} from '../../services/menu.service';


@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  @Input() menu: Array<MenuItem>;

  ngOnInit() {
  }

}
