import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  title = 'transcounter';
  menuItems = [
    { page: 'dashboard', icon: 'home' },
    { page: 'formulario', icon: 'person' },
    { page: 'datos', icon: 'info' }
  ];

  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 960px)']).subscribe((result: any) => {
      if (result.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
      this.cd.detectChanges();
    });
  }

  onClick() {
    if (this.sidenav.mode === 'over') {
      this.sidenav.close();
    }
  }

}
