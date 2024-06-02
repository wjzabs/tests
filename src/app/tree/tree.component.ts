import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';
import { IgxTreemapComponent } from 'igniteui-angular-charts';

@Component({
    selector: "app-tree",
    styleUrls: ["./tree.component.scss"],
    templateUrl: "./tree.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TreeComponent implements AfterViewInit
{

    @ViewChild("treemap", { static: true } )
    private treemap!: IgxTreemapComponent
    private _countyHierarchicalData!: CountyHierarchicalData; // = null;
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
    }

    
    populate() {
      this.treemap.dataSource = this.countyHierarchicalData
      console.log('countyHierarchicalData', this.countyHierarchicalData)
    }
}

