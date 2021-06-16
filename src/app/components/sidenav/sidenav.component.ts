import { AfterViewInit, Component, EventEmitter, ViewChild, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @Output() clicked = new EventEmitter<boolean>();

  menuItems = [
    { page: 'dashboard', icon: 'home' },
    { page: 'datos', icon: 'info' },
    { page: 'formulario', icon: 'person' }
  ];

  constructor() { }

  onClick(event: MouseEvent) {
    this.clicked.emit(true);
  }

}
