import { IacsObject } from "./interfaces/interfaces";

let horaAtual = new Date().getHours()
let saudacao: string = horaAtual > 6 && horaAtual < 13 ? "Bom dia" : "Boa Tarde"
const mensagemInicial = `${saudacao} Td bem?, Segue a lista de pacientes agendados para o Dr.João: \n`;

export let ACS: IacsObject[] = [
    {nome: "IRIS",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "JESSICA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "AUDINEIA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "WILMA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "ZILDA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "CLARICE",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "CINTIA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "FERNANDA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "RAIMUNDA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "JOSIANE",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "VERA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "VANESSA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "SUELY",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "ORLANDO",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "MATEUS",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "ARLINDA",contato:"5515996126296",mensagem:mensagemInicial},
    {nome: "STEPHANY",contato:"5515996126296",mensagem:mensagemInicial},
];