import { Iconsultas } from "../interfaces/interfaces"
import { criarMensagem, criarMensagemACS } from "../model/gerarMsg";
import { gerarJSON } from '../model/gerarJSON'
import { enviarMensagem } from "../model/bot";
import { ACS } from "../global";
import {authorize,planilhaEspecifica} from '../model/driveDownload'


let consultasSemContato: Iconsultas[] = [];
let pacintesImposiveisAvisar:string[];

export async function mandarMsg(mes:string){

    let caminhoArquivo = await authorize().then(planilhaEspecifica).catch(console.error);
    
    if(caminhoArquivo){
        let consultas = await gerarJSON(caminhoArquivo)
        let consultasValidas = validarConsulta(consultas);

        consultasValidas.forEach((consultaInfo)=>{

            enviarMensagem(consultaInfo.NUMERO,criarMensagem(consultaInfo))
        })

        criarMensagemACS(consultasSemContato)
        enviarMensagemACS()
        
        console.log(pacintesImposiveisAvisar)
    }

}

function validarConsulta(consultas:Iconsultas[]){

    let consultasValidas:Iconsultas[] = consultas.filter((consulta) => {
        
        if(consulta.DATA_AGENDADA == "" || consulta.HORA_AGENDADA == ""){ // Verificar se tem data agendada
            return false
        }
        else if(consulta.NUMERO == ""){ // Verifica se tem como avisar
            
            if(consulta.ACS != "" || !(consulta.ACS == "S/ACS")){ // Valida de tem o contato de uma ACS 
                consultasSemContato.push(consulta)
            }
            else{
                pacintesImposiveisAvisar.push(consulta.NOME)
            }
            return false
        }
        else if(consulta.AVISADO == "TRUE"){ // Verificar se ja nao foi Avisada
            return false
        }
        else{
            return true
        }
    })

    return consultasValidas

}

function enviarMensagemACS(){

    ACS.forEach((value)=>{

        if(value.avisar){
            enviarMensagem(value.contato,value.mensagem)
            console.log("---> " + value.nome +" "+ value.contato + " " +value.mensagem)
        }
        
    })

}