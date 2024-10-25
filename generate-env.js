const fs = require('fs');
const targetPath = './src/environments/environment.vercel.ts';

const envConfigFile = `export const environment = {
  production: true,
  serviceID: '${process.env.NG_APP_SERVICE_ID}',
  templateID: '${process.env.NG_APP_TEMPLATE_ID}',
  publicKey: '${process.env.NG_APP_PUBLIC_KEY}'
};
`;

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Arquivo ${targetPath} criado com sucesso`);
  }
});
