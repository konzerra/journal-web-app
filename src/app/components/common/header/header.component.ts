import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../../../domain/user/service/UserAuthService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userAuthService:UserAuthService
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.userAuthService.isLoggedIn()
  }

  logout() {
    this.userAuthService.clear()
  }
  hasRole(role:string): boolean{
    return this.userAuthService.hasRole(role)
  }
}
