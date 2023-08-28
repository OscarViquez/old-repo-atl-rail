import { Component, Input } from '@angular/core';
import { Sidebar } from './models/sidebar.interfaces'
import { SiderbarDarkMocks } from './mocks/sidebar.mocks';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() content: Sidebar = SiderbarDarkMocks
}
