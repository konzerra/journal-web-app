
export class AppLanguage{

  public static languages = {
    Ru : "Ru",
    En : "En",
    Kg : "Kg"
  }
  public static getLocalLanguage():string{
    return localStorage.getItem("lang") || this.languages.Ru
  }
  public static setLocalLanguage(lang: string){
    localStorage.setItem("lang",lang)
  }
}
