class article {
  _id?:string = ''
  title?:string = ''
  content?:string = ''
  description?:string
  tags?:string[] = []
  addtime?:Date
  updatetime?:Date
  author?:string
  constructor(article:article={}){ Object.assign(this,article) }
}
class Article extends article {
  constructor(article:article){
    super(article)
    Article.check(this)
    Object.assign({
      
    } as article,this)
  }
  static article = new article()
  static check = (article={})=>{
    let _article = Article.article
    for(let key in _article){
      let expect_val = _article[key]
      let expect_type = typeof expect_val
      if(expect_type === 'undefined'){
        continue;
      }
      let article_val = article[key]
      let article_type = typeof article_val
      if(article_type !== expect_type){
        throw { position:key, error:`Article's type should be ${expect_type} , but now it's ${article_type}` }
      }
    }
  }
}