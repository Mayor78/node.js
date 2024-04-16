
const fs = require("fs")

const content = fs.readFileSync("./file/precious.txt","utf-8");
console.log(content)

const content2 = fs.readFileSync("./file/monday.txt","utf-8");
console.table(content2)

const content3 = "abraham"

fs.writeFileSync("./file/joseph.txt",content3)
console.table(content3);

const node = "node is a javascript runtime environment built on google open source v8 engine that is used to build scalable application"
 fs.writeFileSync("./file/node.txt",node)
 console.log(node)



 fs.readFile("./file/precious.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
 })

 fs.readFile("./file/monday.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.table(data)
    }
 })

 fs.writeFile("./file/Amaka.txt","mayowa is a boy", "utf-8",()=>{
    console.log("data entr succes")
 })

// creating a server 