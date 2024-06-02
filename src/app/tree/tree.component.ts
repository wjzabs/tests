import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxTreemapComponent, IgxTreemapModule } from 'igniteui-angular-charts';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [IgxTreemapModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent  implements AfterViewInit{

    @ViewChild("treemap", { static: true } )
    private treemap!: IgxTreemapComponent
    private _countyHierarchicalData!: CountyHierarchicalData; //  = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }

    public constructor(private _detector: ChangeDetectorRef)
    {
    }

    public ngAfterViewInit(): void
    {
      this.populate()
      // console.log('countyHierarchicalData', this.countyHierarchicalData)
    }

    populate() {
      this.treemap.dataSource = this.countyHierarchicalData
      console.log('countyHierarchicalData', this.countyHierarchicalData)
    }
}
