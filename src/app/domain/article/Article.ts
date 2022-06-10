
export interface Article {
  id: Number,
  name: string,
  status: string,
  tags: string,
  journal: {
    name:string,
    version:string
  },
  category: string,
  annotation: string

}
