export class ComponentRoutingPaths {
  public static userControl = {
    login : "login",
    register : "register",
    profile : "user/profile",
    handbook: "user/handbook",
    publish: "user/publish",
    reset_password: "user/reset_password"
  }
  public static common = {
    home : "",
    articles: "articles",
    journals: "journals",
    markdown: "markdown"
  }

  public static adminControl = {

    category : {
      main: "admin/category/main",
      save: "admin/category/save",
      update: "admin/category/update"
    },

    reviewer:{
      main: "admin/reviewer/main",
      save: "admin/reviewer/save",
      update: "admin/reviewer/update"
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
    },
    markdown : {
      main: "admin/markdown/main",
      save: "admin/markdown/save",
      update: "admin/markdown/update"
    },
    tip:{
      main: "admin/tip/main",
      save: "admin/tip/save",
      update: "admin/tip/update"
    }
  }

  public static reviewerControl = {
    article:{
      main:"reviewer/article/main",
      update:"reviewer/article/update"
    }
  }
}
