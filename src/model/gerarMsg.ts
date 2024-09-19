import { Iconsultas} from "../interfaces/interfaces"
import { ACS } from "../global";

export function criarMensagem(consulta:Iconsultas): string{

    let horaAtual = new Date().getHours()
    let saudacao: string = horaAtual > 6 && horaAtual < 13 ? "Bom dia" : "Boa Tarde"
    let pronomeConsulta: String = consulta.TIPO_CONSULTA == "RETORNO" ? "o" : "a";

    return `${saudacao}, a consulta do(a) paciente ${consulta.NOME} com o Dr.João está agendada para: \n 
    *Dia ${consulta.DATA_AGENDADA} ás ${consulta.HORA_AGENDADA}*`

}

export function criarMensagemACS(consultas:Iconsultas[]){

    console.log("Iniciando ACS")
    for (let i = 0; i < consultas.length; i++) {
        
        for (let j = 0; j < ACS.length; j++) {
            
            if(consultas[i].ACS == ACS[j].nome){

                ACS[j].avisar = true
                ACS[j].mensagem += `- ${consultas[i].NOME} ás *Dia ${consultas[i].DATA_AGENDADA} ${consultas[i].HORA_AGENDADA}* \n`
            }
        }
    
    }
}

/*

consultas.forEach((value)=>{

    let IndexArrayACS = ACS.findIndex((elemento) => elemento.nome == value.ACS)
    ACS[IndexArrayACS].mensagem += criarMensagemACS(value)

})

*/