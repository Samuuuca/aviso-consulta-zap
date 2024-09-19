import { Iconsultas } from "../interfaces/interfaces"

const csvtojson = require('csvtojson')


export async function gerarJSON(caminhoArquivo: string): Promise<Iconsultas[]>{

    let pathCSV = caminhoArquivo
    let consultas = await csvtojson().fromFile(pathCSV)
    return consultas

}

function retornaMes(mesNumber:number) {

    switch (mesNumber) {
        case 1:
            return "JANEIRO"
        case 2:
            return "FEVERREIRO"
        case 3:
            return "MARCO"
        case 4:
            return "ABRIL"
        case 5:
            return "MAIO"
        case 6:
            return "JUNHO"
        case 7:
            return "JULHO"
        case 8:
            return "AGOSTO"
        case 9:
            return "SETEMBRO"
        case 10:
            return "OUTUBRO"
        case 11:
            return "NOVEMBRO"
        case 12:
            return "DEZEMBRO"
        default:
            break;
    }

}