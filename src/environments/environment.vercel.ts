export const environment = {
    production: true,
    serviceID: process.env['NG_APP_SERVICE_ID'] || '',
    templateID: process.env['NG_APP_TEMPLATE_ID'] || '',
    publicKey: process.env['NG_APP_PUBLIC_KEY'] || ''
};