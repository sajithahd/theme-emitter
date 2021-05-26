export class Theme {
  primaryColor: string;
  accentColor: string;
  warnColor: string;

  constructor(primaryColor: string, accentColor: string, warnColor: string) {
    this.primaryColor = primaryColor;
    this.accentColor = accentColor;
    this.warnColor = warnColor;
  }
}
