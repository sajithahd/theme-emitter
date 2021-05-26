import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Theme, ThemeEmitterService } from 'theme-emitter';
import { Chart } from './chart/chart.model';

// Manage these in a constant file
export const ANALYSER_CHART_TYPE = 'pie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'theme-emitter-demo';
  theme!: Theme;
  chartData!: Chart;

  constructor(
    private themeEmitterService: ThemeEmitterService
  ) {}

  public ngOnInit(): void {
    this.initTheme();
  }

  private initTheme(): void {
    this.themeEmitterService.getTheme$().subscribe(
      theme => {
        this.theme = theme;
        this.chartData = this.initChart();
      }, err => {
        console.log('Error occurred while loading theme details');
      });
  }

  private initChart(): Chart {
    const type = ANALYSER_CHART_TYPE as ChartType;
    const size = {
      width: 100,
      height: 100
    };
    const colors = [
      {
        backgroundColor: [
          this.theme?.primaryColor,
          'rgba(0, 0, 0, 0.12)'
        ],
        borderWidth: 0
      }
    ];
    const options = {
      tooltips: {
        enabled: false
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: false
    };

    const data = [70, 30];

    return new Chart(type, colors, size, options, data);
  }

}
