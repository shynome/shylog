//ser view engie
import { expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)

server.use((req,res,next)=>{
  if(dev){ return next() }
  let html = res.locals.express_tsx_html
  res.locals.heads = [].concat(res.locals.heads).concat('<script>production="production"</script>')
  next()
})

server.get('/5',(req,res)=>{
  res.end('5')
})

server.get(/\//,(req,res)=>{
  res.render('./views/index.tsx',{ title:'shynome' })
})