const dev = global.dev = exports.dev = !(/production/i.test(process.env.NODE_ENV))
require('ts-node').register({ fast:true, project:__dirname, sourceMap:dev })
if(dev){
  require('require-dynamic-exec').watch(__dirname,true)
}
require('./server')