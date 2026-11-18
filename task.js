const http = require("node:http")
const fs = require("node:fs")


const server = http.createServer(function(req, res) {

    const method = req.method
    const path = req.url

    const log = `[${Date.now()}]: ${method} ${path}\n`
    fs.appendFileSync('log.txt', log, 'utf-8')

    switch(method){
        case "GET": {
            switch(path){
                case '/': {
                    res.writeHead(200).end("Hello from the server")
                }
                case '/contact-us': {
                    res.writeHead(200).end("reach at : abc@gmail.com")
                }
                case '/tweet': {
                    res.writeHead(200).end("tweet1\ntweet2\ntweet3")
                }
            }
        }
        break
        case 'POST':{
            switch(path){
                case '/tweet':{
                    return res.writeHead(201).end("Tweet uploaded successfully")
                }
            }
        }
    }
    
    return res.writeHead(404).end("You are lost")

})

server.listen(8001, () => {
    console.log("Server is running on port 8001")
})