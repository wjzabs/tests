import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxTreemapModule } from 'igniteui-angular-charts';
import { IgxTooltipModule } from "igniteui-angular";

@NgModule({
  // bootstrap: [AppComponent],
  declarations: [
    // AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxTreemapModule,
    IgxTooltipModule 
],
  providers: [],
  schemas: []
})
export class AppModule {}
