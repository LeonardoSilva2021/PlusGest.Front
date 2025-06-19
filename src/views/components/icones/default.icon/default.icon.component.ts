import { Component, Input } from '@angular/core';
import { DefaultIconComponentProps } from './default.icon.component.props';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'default-icon-component',
  imports: [CommonModule],
  templateUrl: './default.icon.component.html',
  styleUrl: './default.icon.component.styles.css',
})
export class DefaultIconComponent {
  @Input() props!: DefaultIconComponentProps;
}
