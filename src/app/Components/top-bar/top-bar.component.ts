import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  isCollapsed = true;

  expandIcon1 = false;
  expandIcon2 = false;
  expandIcon3 = false;
  expandIcon4 = false;
  expandIcon5 = false;
  expandIcon6 = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
