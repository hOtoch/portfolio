export const environment = {
    production: true,
    serviceID: (window as any).NG_APP_SERVICE_ID || '',
    templateID: (window as any).NG_APP_TEMPLATE_ID || '',
    publicKey: (window as any).NG_APP_PUBLIC_KEY || ''
};