import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() EventToggleSideBar: EventEmitter<any> = new EventEmitter()

  toggleSideBar() {
    this.EventToggleSideBar.emit();
  }
}
