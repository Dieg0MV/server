import objets from "./app.js";

objets.io.on('connection', socket =>{
    console.log(socket.id)

    socket.on('mensaje', (body)=> {
        console.log(body)
        socket.broadcast.emit('mensaje', {
            body, 
            from: socket.id.slice(5), })
    
    })
})
 
objets.app.get('/', (req, res) => {
    /*res.sendFile(obj.path.join('../cliente/c/public'));*/
    res.send('hola')
})

objets.server.listen(5000, function () {
    console.log('aplication');   
})
