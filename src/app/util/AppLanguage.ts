
export class AppLanguage{

  public static languages = {
    Ru : "Ru",
    En : "En",
    Kg : "Kg"
  }
  public static getLocalLanguage():string{
    return localStorage.getItem("lang") || "Kg"
  }
}
