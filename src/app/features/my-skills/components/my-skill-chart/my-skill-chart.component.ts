import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
const EasyPieChart = require('easy-pie-chart');

@Component({
  selector: 'app-my-skill-chart',
  templateUrl: './my-skill-chart.component.html',
  styleUrls: ['./my-skill-chart.component.scss']
})
export class MySkillChartComponent implements AfterViewInit, OnDestroy {
  @Input() public rating: number;
  @Input() public name: string;
  @ViewChild('chartEl') public chartEl: ElementRef;
  public chart: typeof EasyPieChart;
  public options: object = {
    scaleColor: '#ecf0f1',
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#73990b',
    trackColor: '#ecf0f1',
    size: 210,
    animate: 500
  };

  ngAfterViewInit(): void {
    this.chart = new EasyPieChart(this.chartEl.nativeElement, this.options);
  }

  ngOnDestroy(): void {
    this.chart = null;
  }
}
