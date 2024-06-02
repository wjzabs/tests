import { Component, Pipe, PipeTransform, forwardRef } from '@angular/core';
import { Towns } from './towns-data';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxAutocompleteDirective, IgxDropDownComponent, IgxDropDownItemComponent, } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    IgxInputGroupComponent,
    IgxLabelDirective,
    IgxInputDirective,
    IgxAutocompleteDirective,
    IgxDropDownComponent,
    NgFor,
    IgxDropDownItemComponent,
    forwardRef(() => InputPipeStartsWith),
  ],
})
export class InputComponent {
  public towns: string[];
  public townSelected = '';

  constructor() {
    this.towns = Towns;
  }
}

@Pipe({ standalone: true, name: 'inputStartsWith' })
export class InputPipeStartsWith implements PipeTransform {
  public transform(collection: string[], term = '') {
    return collection.filter(item => item.toLowerCase().startsWith(term.trim().toLowerCase()));
  }
}
