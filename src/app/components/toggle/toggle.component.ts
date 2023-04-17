import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})export class ToggleComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  @ViewChild('doneSwitch', { read: ElementRef }) element: ElementRef | undefined;
  @Input() value = false;
  @Output() toggleChange: EventEmitter<boolean> = new EventEmitter<boolean>;

  checked = false;
  disabled = false;

  ngAfterViewInit() {
    this.setIcon();
  }

  setIcon() {
    if (this.element) {
      const targetSpan: HTMLElement = this.element.nativeElement.querySelector('.mat-slide-toggle-thumb');
      while (targetSpan.firstChild) {
        targetSpan.firstChild.remove();
      }
      const elem = this.renderer.createElement('mat-icon');
      const icon = this.checked ? 'done' : 'remove';
      elem.setAttribute('class', 'mat-icon notranslate material-icons mat-icon-no-color done-switch-icon');
      elem.textContent = icon
      targetSpan.appendChild(elem);
    }
  }

  changeTheme(event: any) {
    this.checked = !this.checked;
    this.setIcon();
    this.toggleChange.emit(event.checked)
  }

}
