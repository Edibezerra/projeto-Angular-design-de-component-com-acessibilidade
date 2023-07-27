import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {
  @Input() public valeu: string = null;
  @Input() public label = " ";

  constructor() { }


  ngOnInit(): void {
  }

}