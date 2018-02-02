import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../router.animations';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
