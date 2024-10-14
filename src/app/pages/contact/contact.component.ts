import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  enviarEmail(event: Event) {
    event.preventDefault();
    // Configuração para o EmailJS
    const serviceID = environment.serviceID;
    const templateID = environment.templateID;
    const userID = environment.userID;
    
    let params = {
      name : (document.getElementById('name') as HTMLInputElement).value,
      email : (document.getElementById('email') as HTMLInputElement).value,
      message : (document.getElementById('message') as HTMLInputElement).value,
      subject : (document.getElementById('subject') as HTMLInputElement).value,
    }


    // Enviar email usando o EmailJS
    emailjs.send(serviceID, templateID, params, userID)
      .then((result) => {
        alert('Email enviado com sucesso!');
      }, (error) => {
        console.log('Erro ao enviar email:', error);
      });
  }

}
