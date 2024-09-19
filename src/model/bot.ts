import {servidorIniciado} from "../../index"
// const { Client } = require('whatsapp-web.js')
import { Client } from "whatsapp-web.js"
// const qrcode = require('qrcode-terminal')
import qrcode from 'qrcode-terminal'


const client = new Client({})

client.on('qr', (qr: any) => {
    qrcode.generate(qr, { small: true });
});


client.on('ready', () => {

    console.log("Client ready");
    servidorIniciado()

});

export async function enviarMensagem(numero: string,mensagem: string){
    await client.sendMessage(`${numero}@c.us`, mensagem)
}


export function iniciarClient(){
    client.initialize()
}

