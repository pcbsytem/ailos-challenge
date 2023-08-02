import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StepperItem {
  label: string;
}

interface Stepper {
  current: number;
  list: StepperItem[]
}

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() data: Stepper = {
    current: 0,
    list: []
  };
}
