import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio'; @HostBinding('class.pc')pcMode=false;
  constructor(private breakpintObserver: BreakpointObserver) 
  {
    this.breakpintObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result) => {
          for (const breakPoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakPoint]) {
              if (breakPoint === Breakpoints.HandsetPortrait) {
               this.pcMode=false;
              } else if (breakPoint === Breakpoints.WebLandscape) {
                this.pcMode=true;
              }
            }
          }
        },
      });
    }
}
