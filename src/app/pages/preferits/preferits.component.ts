import { Component } from '@angular/core';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';

@Component({
  selector: 'app-preferits',
  standalone: true,
  imports: [PreferitsPanelComponent],
  templateUrl: './preferits.component.html',
  styleUrl: './preferits.component.scss',
})
export class PreferitsComponent {}
