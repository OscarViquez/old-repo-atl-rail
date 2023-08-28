import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@shared';

@Component({
   selector: 'lib-train-arrivals',
   standalone: true,
   imports: [CommonModule, SidebarModule],
   templateUrl: './train-arrivals.component.html',
   styleUrls: ['./train-arrivals.component.scss']
})
export class TrainArrivalsComponent {
}
