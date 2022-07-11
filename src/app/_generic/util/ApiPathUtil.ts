
export class ApiPathUtil {

  public static insertName(path:string,name:string):string{
    return path.replace("{name}", name)
  }
  public static insertId(path:string,id:string):string{
    return path.replace("{id}", id)
  }
  public static insertPageNumber(path:string,pageNumber:string):string{
    return path.replace("{pageNumber}", pageNumber)
  }
  public static insertPageSize(path:string, pageSize: string): string{
    return path.replace("{pageSize}", pageSize)
  }
  public static insertPageNumberAndSize(path:string, pageNumber: string,pageSize:string):string{
    path = this.insertPageNumber(path, pageNumber)
    path= this.insertPageSize(path,pageSize)
    return path
  }
}
