import { IacsObject } from "./interfaces/interfaces";

let horaAtual = new Date().getHours()
let saudacao: string = horaAtual > 6 && horaAtual < 13 ? "Bom dia" : "Boa Tarde"
const mensagemInicial = `${saudacao} Td bem?, Segue a lista de pacientes agendados para o Dr.João: \n`;

export let ACS: IacsObject[] = [
    {nome: "IRIS", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "JESSICA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "AUDINEIA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "WILMA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "ZILDA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "CLARICE", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "CINTIA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "FERNANDA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "RAIMUNDA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "JOSIANE", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "VERA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "VANESSA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "SUELY", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "ORLANDO", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "MATEUS", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "ARLINDA", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "STEPHANY", contato: "5515998148236", mensagem: mensagemInicial,avisar: false},
    {nome: "NILTON", contato: "5515998148236", mensagem: mensagemInicial,avisar: false}
];