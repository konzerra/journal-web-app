
export class AppLanguage{

  public static languages = {
    Ru : "ru",
    En : "en",
    Kg : "kg",
    Default: "kg"
  }
  public static getLocalLanguage():string{
    return localStorage.getItem("lang") || this.languages.Ru
  }
  public static setLocalLanguage(lang: string){
    localStorage.setItem("lang",lang)
  }
}
