import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit{

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const titleUnderline = this.el.nativeElement.querySelector('.about__content__title-underline');
    
    // Define o observer para monitorar quando o elemento está visível
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe de animação quando o elemento está visível
          titleUnderline.classList.add('animate');
          observer.unobserve(entry.target); // Para de observar após ativar a animação
        }
      });
    });

    // Inicia o observer no elemento desejado
    observer.observe(titleUnderline);
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/CV.pdf';
    link.download = 'Curriculo_Hugo_Otoch.pdf';
    link.click();
  }
}
