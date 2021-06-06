import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeEmitterService } from './theme-emitter.service';
import { Theme } from './theme.model';

@Component({
  selector: 'theme-emitter',
  templateUrl: './theme-emitter.component.html',
  styleUrls: ['./theme-emitter.component.scss']
})
export class ThemeEmitterComponent implements AfterViewInit {

  @ViewChild('primary') primaryElement!: ElementRef;
  @ViewChild('accent') accentElement!: ElementRef;
  @ViewChild('warn') warnElement!: ElementRef;

  constructor(private themeEmitterService: ThemeEmitterService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const primaryColor = getComputedStyle(this.primaryElement.nativeElement).color;
      const accentColor = getComputedStyle(this.accentElement.nativeElement).color;
      const warnColor = getComputedStyle(this.warnElement.nativeElement).color;

      this.themeEmitterService.setTheme(new Theme(primaryColor, accentColor, warnColor));
    });
  }
}

