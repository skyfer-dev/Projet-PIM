// Import 
const express = require('express') 

const server = express()
const port = 3000

server.get('/', (req, res) => res.send('hello, Express!'))
server.get('/api/pokemon/:id', (req, res) => {
    const id = req.params.id
    res.send(`hello pokemon ${id}`)

})
server.listen(port, () => {
    console.log(`Notre application est démarré en local ${port}`)
})