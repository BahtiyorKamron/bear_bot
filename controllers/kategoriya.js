const fs = require('fs')
const path = require('path')

module.exports = class Categoriya {
    static get(req,res){
      let kategoriyalar = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","categoriya.json")))
      res.json({
        data : kategoriyalar
      })
    }
    static post(req,res){
     let kategoriyalar = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","categoriya.json")))
      let id = kategoriyalar.length ? kategoriyalar.length +1 : 1
      req.body.id = id
      kategoriyalar.push(req.body)
      fs.writeFileSync(path.join(process.cwd(),"data","categoriya.json"),JSON.stringify(kategoriyalar,null,4))
      res.json({
        message : "qoshildi",
        data : req.body
      })
    }
    static delete(req,res){
      let kategoriyalar = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","categoriya.json")))
      let k = kategoriyalar.find(el => el.id==req.body.id)
      kategoriyalar = kategoriyalar.filter(el => el.id!==req.body.id)
      fs.writeFileSync(path.join(process.cwd(),"data","categoriya.json"),JSON.stringify(kategoriyalar,null,4))
      res.json({
        message : "o'chirildi",
        data : k
      })
    }

}
