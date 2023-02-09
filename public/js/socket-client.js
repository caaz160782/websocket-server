//referencias del html
const  lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socketCliente=io();

socketCliente.on("connect",()=>{
    lblOffline.style.display='none';
     lblOnline.style.display='';
});

socketCliente.on("disconnect",()=>{
    lblOffline.style.display='';
     lblOnline.style.display='none';
});

socketCliente.on("enviar-mensaje",(payload)=>{
    console.log("recibido del server",payload)
});



btnEnviar.addEventListener('click',()=>{
    const mensaje= txtMensaje.value;
    const payload={
        mensaje,
        id:'123456ABC',
        fecha:new Date().getTime()
    }
    socketCliente.emit('enviar-mensaje',payload,(id)=>{
            console.log('desde lel server',id)
    });   
});