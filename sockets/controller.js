const socketController = (socket) =>{
    
    console.log("cliente conectado",socket.id);

    socket.on('disconnect',()=>{
      console.log("cliente desconectado",socket.id);
     })

     socket.on('enviar-mensaje',(payload,callback)=>{
      //response desde el serverd
        socket.broadcast.emit("enviar-mensaje",payload);
        const id=7894456
        callback({id,fecha: new Date()});
     })
  }

module.exports={socketController}