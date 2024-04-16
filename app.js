const http = require("http")
const fs = require("fs")
const port =4141
//storing pages into a variable


const homepage = fs.readFileSync("./pages/index.html","utf-8")
const about = fs.readFileSync("./pages/about.html","utf-8")
const contact = fs.readFileSync("./pages/contact.html","utf-8")
const testimonia = fs.readFileSync("./pages/testimonia.html","utf-8")
const error = fs.readFileSync("./pages/error.html","utf-8")



const server = http.createServer((req, res) => {
let path =req.url
if(path==="/" ||path==="/home"){
    res.end(homepage)
}else if(path=== "/about"){
    res.end(about)
}else if(path==="/testimonia"){
    res.end(testimonia)
}else if (path==="/contact"){
    res.end(contact)
}else{
    res.end(error)
}


})
server.listen(port,()=>{
    console.log("server is running on port 4141")
})


