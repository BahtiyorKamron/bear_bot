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
        data: "qoshildi"
      })
    }
    static delete(req,res){
      let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))
      users = users.filter(el => el.id!==req.body.id)

      fs.writeFileSync(path.join(process.cwd(),"data","users.json"),JSON.stringify(users,null,4))
      res.json({
        data: "ochirildi"
      })
    }
    static update(req,res){
      let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))

      for(let i of users){
        if(i.id==req.body.id){
          i.name = req.body.name ? req.body.name : i.name
          i.age = req.body.age ? req.body.age : i.age
          i.phone = req.body.phone ? req.body.phone : i.phone
          i.viloyat = req.body.viloyat ? req.body.viloyat : i.viloyat
          i.location = req.body.location ? req.body.location : i.location
        }
      }
      fs.writeFileSync(path.join(process.cwd(),"data","users.json"),JSON.stringify(users,null,4))
      res.json({
        data: "modified"
      })
    }
}
