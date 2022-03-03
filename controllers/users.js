const fs = require('fs')
const path = require('path')
module.exports = class Users {
    static get(req,res){
      let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))
      res.json({
        data:users
      })
    }
    static post(req,res){

      let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))
      users.push(req.body)
      fs.writeFileSync(path.join(process.cwd(),"data","users.json"),JSON.stringify(users,null,4))
      res.json({
        data: req.body,
        message : "posted"
      })
    }
    static delete(req,res){
      let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))
      users = users.filter(el => el.id!==req.body.id)
      let u = users.find( el => el.id==req.body.id)
      
      fs.writeFileSync(path.join(process.cwd(),"data","users.json"),JSON.stringify(users,null,4))
      res.json({
        data: u,
        message : "deleted"
      })
    }
    static update(req,res){
      let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))

      for(let i of users){
        if(i.id==req.body.id){
          i.name = req.body.name ? req.body.name : i.name
          i.age = req.body.age ? req.body.age : i.age
          i.surname = req.body.surname ? req.body.surname : i.surname
          i.login = req.body.login ? req.body.viloyloginat : i.login
          i.password = req.body.password ? req.body.password : i.password
        }
      }
      let u = users.find( el => el.id==req.body.id)
      fs.writeFileSync(path.join(process.cwd(),"data","users.json"),JSON.stringify(users,null,4))
      res.json({
        data: u,
        message : "modified"
      })
    }
}
