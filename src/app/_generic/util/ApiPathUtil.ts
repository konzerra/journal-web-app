
export class ApiPathUtil {

  public static insertId(path:string,id:string):string{
    return path.replace("{id}", id)
  }
  public static insertPageNumber(path:string,pageNumber:string):string{
    return path.replace("{pageNumber}", pageNumber)
  }
}
