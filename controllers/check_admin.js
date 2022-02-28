const fs = require('fs')
const path = require('path')

module.exports = class Check_Admin {
  static get (req,res) {
     let admin = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","check_admin.json")))
     res.json({
       data : admin
     })
  }
  static post(req,res){
    let admin = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","check_admin.json")))
    admin.push(req.body)
    fs.writeFileSync(path.join(process.cwd(),'data','check_admin.json'),JSON.stringify(admin,null,4))
    res.json({
      data : 'qoshildi'
    })
  }
  static delete(req,res){
    let admin = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","check_admin.json")))
    admin = admin.filter(el => el.id!==req.body.id)
    fs.writeFileSync(path.join(process.cwd(),'data','check_admin.json'),JSON.stringify(admin,null,4))
    res.json({
      data : 'ochirildi'
    })
  }
  static update(req,res){
    let admin = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","check_admin.json")))
    for(let i of admin){
      if(i.id==req.body.id){
        i.password = req.body.password ? req.body.password : i.password
        i.product = req.body.product ? req.body.product : i.product
        i.kategoriya = req.body.kategoriya ? req.body.kategoriya : i.kategoriya
      }
    }

    fs.writeFileSync(path.join(process.cwd(),'data','check_admin.json'),JSON.stringify(admin,null,4))
    res.json({
      data : 'modified'
    })
  }
}
