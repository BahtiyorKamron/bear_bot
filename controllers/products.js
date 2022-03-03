const fs = require('fs')
const path = require('path')

module.exports = class Products {
  static get(req,res){
    let products = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","products.json")))
    res.json({
      data : products
    })
  }
  static post(req,res){
    let products = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","products.json")))
    console.log(products);
    let id = products.length ? products.length+1 : 1
    req.body.id = id
    products.push(req.body)
    fs.writeFileSync(path.join(process.cwd(),"data","products.json"),JSON.stringify(products,null,4))
    res.json({
      data : req.body
    })
  }
  static delete(req,res){
    let products = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","products.json")))
    let p = products.find(el => el.id==req.body.id)
    products = products.filter( el => el.id!==req.body.id)
    fs.writeFileSync(path.join(process.cwd(),"data","products.json"),JSON.stringify(products,null,4))
    res.json({
      message : "ochirildi",
      data : p
    })

  }
  static update(req,res){
    let products = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","products.json")))
    let p = products.find(el => el.id==req.body.id)

    for(let i of products){
      if(i.id==req.body.id){
        i.username = req.body.username ? req.body.username : i.username
        i.password = req.body.password ? req.body.password : i.password
        i.chegirmasi = req.body.chegirmasi ? req.body.chegirmasi : i.chegirmasi
        i.info = req.body.info ? req.body.info : i.info
      }
    }
    fs.writeFileSync(path.join(process.cwd(),"data","products.json"),JSON.stringify(products,null,4))
    res.json({
      message : "modified",
      data : p
    })
  }
}
