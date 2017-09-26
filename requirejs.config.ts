//config requirejs config
import { static as staticMiddleware } from "express";
import { Router } from "express";
import { requirejsConfig } from "express-tsx";
let pkg:(module:string,min_pkg?:string)=>string
export const router = Router()
if(dev){
  const local = '/node_modules'  
  router.use(local,staticMiddleware(__dirname+local,{ maxAge:15*24*60*60 }))
  pkg = (module)=>`${local}/${module}`
}else{
  const cdn = 'https://unpkg.com'
  const dependencies:{ [module:string]:{ version:string } } = require('./package-lock').dependencies
  pkg = (module,min)=>{
    let path_split = module.split('/')
    let name = path_split[0]
    if(name in dependencies){
      let version = dependencies[name].version
      name = `${name}@${version}`
    }
    module = [name].concat(path_split.slice(1)).join('/')
    min = min ? '.min':''
    return `${cdn}/${module}${min}`
  }
  
}
requirejsConfig({
  paths:{
    'requirejs'         :pkg('requirejs/require.js#'),
    'glamor'            :pkg('glamor/umd/index','min'),
    'glamorous'         :pkg('glamorous/dist/glamorous.umd','min'),
    'react'             :pkg('react/dist/react','min'),
    'react-dom'         :pkg('react-dom/dist/react-dom','min'),
    'antd'              :pkg('antd/dist/antd','min'),
    'react-motion'      :pkg('react-motion/build/react-motion'),
    'react-router-dom'  :pkg('react-router-dom/umd/react-router-dom','min'),
    'semantic-ui-react' :pkg('semantic-ui-react/dist/umd/semantic-ui-react.min'),
    'semantic-ui-css'   :pkg('semantic-ui-css/semantic','min'),
  },
  map:{
    'semantic-ui-react':{ 'React':'react', 'ReactDOM':'react-dom' },
  },
  shim:{
    'antd'              :{ deps:['css!antd'], },
    'semantic-ui-react' :{ deps:['css!semantic-ui-css'] },
  },
  // waitSeconds           :7,
})