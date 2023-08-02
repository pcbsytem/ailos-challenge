import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent {
  @Input() iconName: string = '';
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() color: string = '';
}
