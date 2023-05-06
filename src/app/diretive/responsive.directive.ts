import { Directive, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {
  constructor(
    private element: ElementRef,
    private breakpintObserver: BreakpointObserver
  ) {
    this.breakpintObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result) => {
          for (const breakPoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakPoint]) {
              if (breakPoint === Breakpoints.HandsetPortrait) {
                this.element.nativeElement.classList.remove('pc');
              } else if (breakPoint === Breakpoints.WebLandscape) {
                this.element.nativeElement.classList.add('pc');
              }
            }
          }
        },
      });
  }
}

