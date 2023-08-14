import { Component, Input } from '@angular/core';
import { Sidebar } from './models/sidebar.interfaces'
import { SiderbarMocks } from './mocks/sidebar.mocks';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() content!: Sidebar

}
