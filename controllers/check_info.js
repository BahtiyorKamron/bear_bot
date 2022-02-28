const fs = require('fs')
const path = require('path')

module.exports = class Check_Info {
  static get(_,res){
    let info = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data',"check_info.json")))
    res.json({
      data : info
    })
  }
  static post(req,res){
    let info = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data',"check_info.json")))
    
    info.push(req.body)
    fs.writeFileSync(path.join(process.cwd(),"data","check_info.json"),JSON.stringify(info,null,4))
    res.json({
      data: "qoshildi"
    })
  }
  static delete(req,res){
    let check = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","check_info.json")))
    check = check.filter(el => el.id!==req.body.id)

    fs.writeFileSync(path.join(process.cwd(),"data","check_info.json"),JSON.stringify(check,null,4))
    res.json({
      data: "ochirildi"
    })
  }
  static update(req,res){
    let check = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","check_info.json")))

    for(let i of check){
      if(i.id==req.body.id){
        i.name = req.body.name ? req.body.name : i.name
        i.age = req.body.age ? req.body.age : i.age
        i.phone = req.body.phone ? req.body.phone : i.phone
        i.product = req.body.product ? req.body.product : i.product
        i.location = req.body.location ? req.body.location : i.location
      }
    }
    fs.writeFileSync(path.join(process.cwd(),"data","check_info.json"),JSON.stringify(check,null,4))
    res.json({
      data: "modified"
    })
  }
}
