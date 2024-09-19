export interface Iconsultas{
    QTND: string,
    MATRICULA: string,
    NOME: string,
    LOCAL: string,
    ACS: String,
    NUMERO: string,	
    DATA_AGENDADA: string,	
    HORA_AGENDADA: string,	
    TIPO_CONSULTA: string,	
    OBSERVAÇÃO: string,	
    AVISADO: string,	
    RETORNO: string
}

export interface IacsObject{
    nome:string,
    contato: string,
    mensagem: string,
    avisar: boolean

}