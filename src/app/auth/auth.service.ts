import { Injectable } from '@angular/core';
import { JwtDto } from '../domain/auth/JwtDto';
import { User } from '../domain/user/User';
import { Role } from '../domain/role/Role';
import {AuthSigninDto} from "./_models/auth.signin.dto";
import {UserApi} from "../domain/user/UserApi";
import {HttpClient} from "@angular/common/http";
import {AuthApi} from "./auth.api";
import {AuthSignupDto} from "./_models/auth.signup.dto";
import {AuthResetDto} from "./_models/auth.reset.dto";
import {ApiPathUtil} from "../_generic/util/ApiPathUtil";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public setData(jwtDto: JwtDto) {
    this.setUser(jwtDto.user)
    this.setJwtToken(jwtDto.jwtToken)
    this.setRole(jwtDto.user.roles)
  }

  signin(signinDto:AuthSigninDto){
    return this.httpClient.post<JwtDto>(AuthApi.signin, signinDto)
  }
  signup(signupDto: AuthSignupDto){
    return this.httpClient.post(AuthApi.signup,signupDto)
  }

  resetPassword(resetDto:AuthResetDto){
    return this.httpClient.post<JwtDto>(AuthApi.reset, resetDto)
  }
  generatePasswordPin(email:string){
    return this.httpClient.get<JwtDto>(ApiPathUtil.insertEmail(AuthApi.generate_password_pin,email))
  }
  private setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  public getUser(): User | null {
    let userJson = localStorage.getItem('user')
    if (userJson != null) {
      return JSON.parse(userJson)
    }
    return null
  }

  private setRole(roles: Array<Role>) {
    localStorage.setItem("roles", JSON.stringify(roles))
  }
  public getRole(): Array<Role> {
    let roles: Array<Role> = new Array<Role>()
    let rolesJson = localStorage.getItem("roles" || "[]")
    if (rolesJson != null) {
      roles = JSON.parse(rolesJson)
    }
    return roles
  }

  public hasRole(role: string): boolean {
    let found = false
    if (this.isJwtTokenExpired()) {
      return false
    }
    let roles: Array<Role> = new Array<Role>()
    let rolesJson = localStorage.getItem("roles" || "[]")

    if (rolesJson != null) {
      roles = JSON.parse(rolesJson)
      roles.forEach((it) => {
        if (it.name === role)
          found = true
      })
    }
    return found
  }


  private setJwtToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken)
  }
  public getJwtToken(): string | null {
    if (this.isJwtTokenExpired()) {
      return null
    }
    return localStorage.getItem("jwtToken")
  }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('roles')
  }


  public isLoggedIn(): boolean {
    return this.getJwtToken() != null
  }

  public isJwtTokenExpired(): boolean {
    let token = localStorage.getItem("jwtToken")
    if (token != null) {
      return this.tokenExpired(token)
    }
    return false
  }


  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
