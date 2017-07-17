import express = require('express')
export const server = express()
//ser view engie
import { render } from "express-tsx";
server.use((req,res,next)=>{
  if(dev){ return next() }
  let html = res.locals.express_tsx_html
  res.locals.express_tsx_html = async(...r)=>{
    let _html = await html(...r)
    return _html.replace('</title>',`</title><script>production="production"</script>`)
  }
  next()
})
server.engine('.tsx',render)
server.set('views',__dirname)
server.set('.iew engie','tsx')
//import dynamic router
import { router } from "./router";
server.use(router)