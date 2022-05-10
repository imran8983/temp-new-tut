const http = require('http')

const server= http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to home page')
    }
    if(req.url === '/about'){
        res.end('your are now on about')
    }
    res.end(`
    <h1>oops</h1>
    <p>page not found</p>
    <a href='/'>back home</a>
    `)

})
server.listen(5000)