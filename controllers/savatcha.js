const fs = require('fs')
const path = require('path')

module.exports = class Savatcha {
   static get(req,res){
     let savatcha = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","savatcha.json")))
     res.json({
       data : savatcha
     })
   }
   static post(req,res){
     let savatcha = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","savatcha.json")))
     let id = savatcha.length ? savatcha.length + 1 : 1
     req.body.id = id
     savatcha.push(req.body)
     fs.writeFileSync(path.join(process.cwd(),"data","savatcha.json"),JSON.stringify(savatcha,null,4))
     res.json({
       message : "qoshildi",
       data : req.body
     })
   }
   static update(req,res){
     let savatcha = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","savatcha.json")))
     let s = savatcha.find(el => el.id==req.bod.id)
     for(let i of savatcha){
       if(i.id==req.body.id){
         i.product_id = req.body.product_id ? req.body.product_id : i.product_id
         i.narxi = req.body.narxi ? req.body.narxi : i.narxi
       }
     }
     fs.writeFileSync(path.join(process.cwd(),"data","savatcha.json"),JSON.stringify(savatcha,null,4))

     res.json({
       message : "modified",
       data : s
     })
   }
   static delete(req,res){
     console.log(req.body.id);
     let savatcha = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","savatcha.json")))
     savatcha = savatcha.filter(el => el.id!==req.body.id)
     fs.writeFileSync(path.join(process.cwd(),"data","savatcha.json"),JSON.stringify(savatcha,null,4))

     res.json({
       message : "o'ochirildi"
     })
   }
}
