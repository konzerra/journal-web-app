import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../../ComponentRoutingPaths";

@Component({
  selector: 'app-publish-guide',
  templateUrl: './publish-guide.component.html',
  styleUrls: ['./publish-guide.component.css']
})
export class PublishGuideComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onPublishClicked() {
    this.router.navigate([ComponentRoutingPaths.userControl.publish])
  }
}
