
const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

export const client = new Client()

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});


client.on('ready', () => {

    console.log("Client ready");

});

export function enviarMensagem(numero,mensagem){
    client.sendMessage(numero, mensagem)
}

client.initialize()
