import { Component, Input } from '@angular/core';
import { DefaultIconComponentProps } from './default.icon.component.props';
import { CommonModule } from '@angular/common';
import { SvgElement } from './svg.element.props';

@Component({
  selector: 'default-icon-component',
  imports: [CommonModule],
  templateUrl: './default.icon.component.html',
  styleUrl: './default.icon.component.styles.css',
})
export class DefaultIconComponent {
  @Input() props!: DefaultIconComponentProps;

  trackByFn(index: number, el: any): any {
    return index;
  }
}
