import { Component } from '@angular/core';
import { CategoryChartType, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart',
  // standalone: true,
  // imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {

  public chartType = CategoryChartType.Auto;

  public data = [
    { CountryName: 'China', Pop1995: 1216, Pop2005: 1297, },
    { CountryName: 'India', Pop1995: 920, Pop2005: 1090, },
    { CountryName: 'United States', Pop1995: 266, Pop2005: 295, },
    { CountryName: 'Indonesia', Pop1995: 197, Pop2005: 229, },
    { CountryName: 'Brazil', Pop1995: 161, Pop2005: 186, }
  ];

  ngOnInit() {
    console.log('in catgy')
  }
}
