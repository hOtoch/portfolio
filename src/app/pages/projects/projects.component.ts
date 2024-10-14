import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  currentProject: number = 0; 

  projects = [
    {
      title: 'Dashboard Interativo Com Controle de Acesso',
      description: 'Projeto desenvolvido para a ROI Investimentos, com o objetivo de fornecer uma visão geral dos investimentos e controle de acesso para diferentes usuários.',
      image: 'assets/images/dashboard.png',
      technologies: ['Streamlit','Pandas', 'Flask','Angular', 'PostgreSQL','HTML','CSS'],
      link: 'https://github.com/hOtoch/Dashboard_Roi_Investimentos'
    },
    {
      title: 'Varredor de vagas',
      description: 'Um scraper que busca vagas de emprego no site da Indeed de acordo com as palavras-chave fornecidas.',
      image: 'assets/images/vagas.png',
      technologies: ['Scrapy', 'PySimpleGUI'],
      link: 'https://github.com/hOtoch/varredor_de_vagas'
    },
    {
      title: 'Gravador de tela',
      description: 'Extensão do navegador Chrome para gravar a tela do usuário independente da aba ativa.',
      image: 'assets/images/gravador.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/hOtoch/GravadorDeTela'
    },
    {
      title: 'Pokedex',
      description: 'Projeto de uma pokedex onde podemos selecionar dois pokemons e compara-los para verificar quem possui o maior poder.',
      image: 'assets/images/pokedex.png',
      technologies: ['Angular','HTML', 'CSS', 'TypeScript'],
      link: 'https://github.com/hOtoch/Pokedex'
    }
  ];

  // Avança para o próximo projeto
  previousProject() {
    this.animateSlide('right'); 
    setTimeout(() => {
      this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
    }, 300); // Tempo de transição da animação
  }

  nextProject() {
    this.animateSlide('left'); 
    setTimeout(() => {
      this.currentProject = (this.currentProject + 1) % this.projects.length;
    }, 300); 
  }

  animateSlide(direction: string) {
    const activeSlide = document.querySelector('.carousel__slide.active');
    if (activeSlide) {
      activeSlide.classList.add(`slide-out-${direction}`);
      setTimeout(() => {
        activeSlide.classList.remove('slide-out-left', 'slide-out-right');
      }, 300); 
    }
  }

  openProject(link: string) {
    window.open(link, '_blank');
  }
}
