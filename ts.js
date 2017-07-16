require('ts-node').register({ fast:true, project:__dirname })
const dev = global.dev = exports.dev = !(/production/i.test(process.env.NODE_ENV))
if(dev){
  require('require-dynamic-exec').watch(__dirname,true)
}
require('./server')