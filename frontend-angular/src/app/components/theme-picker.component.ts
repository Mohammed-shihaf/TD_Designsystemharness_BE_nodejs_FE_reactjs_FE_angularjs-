import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../themes';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <select (change)="select.emit($any($event.target).value)">
      <option *ngFor="let t of themes" [value]="t.id">{{ t.name }}</option>
    </select>
  `,
})
export class ThemePickerComponent {
  @Input() themes: Theme[] = [];
  @Output() select = new EventEmitter<string>();
}
