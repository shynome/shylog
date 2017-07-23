//ser view engie
import { expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)

server.use((req,res,next)=>{
  if(dev){ return next() }
  let html = res.locals.express_tsx_html
  res.locals.express_tsx_html = async(...r)=>{
    let _html = await html(...r)
    return _html.replace('</title>',`</title><script>production="production"</script>`)
  }
  next()
})

server.get('/',(req,res)=>{
  res.render('./views/index.tsx',{ title:'shynome' })
})