const {fs} = require('fs')
const {google} = require('googleapis')
const {GoogleAuth} = require('google-auth-library');
const crendencial = require('../../turnkey-mender-433012-n8-b19b282f045e.json')

// Configurações de escopo e autenticação
const SCOPES = 'https://www.googleapis.com/auth/drive.readonly';
const auth = new GoogleAuth({
  keyFile: crendencial,
  scopes: SCOPES,
});

async function downloadSheet() {

  const drive = google.drive({version: 'v3', auth});
  const planilhaId = '1-h03uQfqlGBRhu-I_LJ2OAo4H57H0OLI00PaKhQNesk';
  
  try {
    
    const file = await drive.files.get({
      fileId: planilhaId, 
      alt: 'media',
    })  

    console.log( "File status: ");
    console.log(file.status);
    return file.status;
    
  }
  catch (err) {
    throw err;
  }
}
downloadSheet()

async function exportarTabela(fileId) {
  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/drive/v3/files',
    apiKey: ''
  });
  
  
  const service = google.drive({version: 'v3', auth});

  try {
    const result = await service.files.export({
      fileId: fileId,
      mimeType: 'application/vnd.google-apps.spreadsheet',
    });
    console.log(result.status);
    return result;
  } catch (err) {

    throw err;
  }
}
exportarTabela("1aGqZNyOaHXSqVZqDLbD2CqA25DHv3yx1WLWhJ6sD5CU")

//https://www.googleapis.com/drive/v3/files
