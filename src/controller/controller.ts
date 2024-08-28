import { Iconsultas } from "../interfaces/interfaces"
import { criarMensagem } from "../model/gerarMsg";
import { gerarJSON } from '../model/gerarJSON'


let consultasSemContato: Iconsultas[] = [];
let pacintesImposiveisAvisar = [];
export async function mandarMsg(mes:string){

    let consultas = await gerarJSON(parseInt(mes))

    let consultasValidas = validarConsulta(consultas);

    if (consultasSemContato.length) {
        validarConsultasACS(consultasSemContato)
    }

    for (let i = 0; i < consultasValidas.length; i++) {
        
        console.log("---> " + criarMensagem(consultasValidas[i]))
    
    }

}

function validarConsultasACS(consultaSemContato:Iconsultas[]) {
    
    return consultaSemContato.filter((consulta)=> consulta.ACS != "")

}

function validarConsulta(consultas:Iconsultas[]){

    let consultasValidas:Iconsultas[] = consultas.filter((consulta) => {
        
        if(consulta.DATA_AGENDADA == "" || consulta.HORA_AGENDADA == ""){ // Verificar se tem data agendada
            return false
        }
        else if(consulta.NUMERO == ""){ // Verifica se tem como avisar
            consultasSemContato.push(consulta)
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
