import { mandarMsg } from "./src/controller/controller";
mandarMsg("8")

// const readline = require("node:readline")

// let verficador = true
// const msgWhile = `Digite o número do que deseja fazer \n
//                     1 - Deseja avisar os contatos via whatsapp \n
//                     2 - Encerrar o whatsapp \n `

                    
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// while (verficador) {

//     rl.question(msgWhile, (msg: string) => {

//         if (msg == '1') {
            
//             mandarMsg("8")
            
//         }
//         else if (msg == '2') {
//             verficador = false;
//         }
//         rl.close();
//     })
// }