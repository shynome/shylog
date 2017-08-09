export class Article {
  _id?:string = ''
  title?:string = ''
  content?:string = ''
  description?:string
  tags?:string[] = []
  addtime?:Date
  updatetime?:Date
  author?:string
  constructor(article:Article={}){ Object.assign(this,article) }
}