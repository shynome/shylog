const request = require('request-promise')
const { server_listen_port } = require('../server')
const example_user = {
  username:'username',
  password:'password',
}
describe('user',function(){
  it('create test',async()=>{
    let port = await server_listen_port
    let result = await request(`http://127.0.0.1:${port}/user/create`,{ formData:example_user })
    console.log(result)
  })
})