import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event ('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';

  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
