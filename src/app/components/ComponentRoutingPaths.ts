import {Category} from "../domain/category/Category";

export class ComponentRoutingPaths {
  public static userControl = {
    login : "login",
    register : "register",
    profile : "user/profile",
    handbook: "user/handbook",
    publish: "user/publish"
  }
  public static common = {
    home : "",
    articles: "articles"
  }
  public static adminControl = {

    category : {
      main: "category/main",
      save: "category/save",
      update: "category/update"
    }
  }
}
