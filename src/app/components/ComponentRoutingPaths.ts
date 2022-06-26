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
    articles: "articles",
    journals: "journals"
  }
  public static adminControl = {

    category : {
      main: "admin/category/main",
      save: "admin/category/save",
      update: "admin/category/update"
    },

    journal: {
      main:"admin/journal/main",
      save:"admin/journal/save",
      update:"admin/journal/update",
      updateArticles:"admin/journal/articles/update"
    },

    article:{
      main:"admin/article/main",
      update:"admin/article/update"
    }
  }
}
