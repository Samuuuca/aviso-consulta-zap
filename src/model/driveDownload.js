import path from 'path'
import fs from 'fs/promises'
import process from 'process'
import {google} from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';


const SCOPES = ['https://www.googleapis.com/auth/drive','https://www.googleapis.com/auth/drive.metadata.readonly'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credencial.json');

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  
  } catch (err) {
    return null;
  }
}

async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  
  const key = keys.installed || keys.web;
  
  const payload = JSON.stringify({
    
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });

  
  await fs.writeFile(TOKEN_PATH, payload);
}

export async function authorize(){

  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}



export async function planilhaEspecifica(authClient) {
  let csvFormat = '';
  const sheet = google.sheets({version: 'v4', auth: authClient});
  try{

    const response = await sheet.spreadsheets.values.get({
      spreadsheetId: '1aGqZNyOaHXSqVZqDLbD2CqA25DHv3yx1WLWhJ6sD5CU',
      range: `SETEMBRO - 2024!A1:Z`
    })
    
    const linhas = response.data.values ?? []
    
    linhas.forEach((linha) => {
      csvFormat += linha.join(',') + '\n';
    })
    
    const caminhoArquivo = `../csv/ConsultasSETEMBRO.csv`
    fs.writeFile(caminhoArquivo, csvFormat)

    return caminhoArquivo
  
  }catch(err){
    throw err
  }
}

async function atualizarPlanilha(authClient){

  const planilha = google.sheets({version: 'v4', auth: authClient})

  // spreadsheetId: '1aGqZNyOaHXSqVZqDLbD2CqA25DHv3yx1WLWhJ6sD5CU',
  // range:`SETEMBRO - 2024!A1:Z`,
  // valueInputOption: 'USER_ENTERED',
  // resource: {
  //   values: [['TRUE']]
  // }

  const res = planilha.spreadsheets.values.batchUpdate({
    
  })
}

module.exports = {authorize,planilhaEspecifica}
//authorize().then(planilhaEspecifica).catch(console.error);



// async function listFiles(authClient) {
// const caminhoArquivo = '../csv/consultas.csv'
// const drive = google.drive({version: 'v3', auth: authClient});
// try{
// const res = await drive.files.export({
// fileId: "1aGqZNyOaHXSqVZqDLbD2CqA25DHv3yx1WLWhJ6sD5CU",
// mimeType: 'text/csv'
// })
// fs.writeFile(caminhoArquivo, res.data, (err)=> {
// if(err)throw err
// console.log('File is created successfully.');
// })
// return caminhoArquivo
// }
// catch(err){
// throw err
// }
// }