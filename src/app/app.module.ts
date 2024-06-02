import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IgxCategoryChartModule, IgxTreemapModule } from 'igniteui-angular-charts';
import { IgxTooltipModule } from "igniteui-angular";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DockComponent } from "./dock/dock.component";
import { TreeComponent } from "./tree/tree.component";
import { TestComponent } from "./test/test.component";
import { ChartComponent } from "./chart/chart.component";

@NgModule({
  // bootstrap: [AppComponent],
  declarations: [
    DockComponent,
    TreeComponent,
    TestComponent,
    ChartComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxTreemapModule,
    IgxTooltipModule,
    IgxCategoryChartModule,
    
],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
