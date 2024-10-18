import { Component} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  {
  currentSkill: number = 0;

  skills = [
    {
      name: 'Python',
      icon: 'devicon-python-plain colored',
      stars: 4
    },
    {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain colored',
      stars: 4
    },
    {
      name: 'Angular',
      icon: 'devicon-angularjs-plain colored',
      stars: 3
    },
    {
      name: 'Flask',
      icon: 'devicon-flask-original colored',
      stars: 3
    },
    {
      name: 'HTML5',
      icon: 'devicon-html5-plain colored',
      stars: 4
    },
    {
      name: 'CSS3',
      icon: 'devicon-css3-plain colored',
      stars: 4
    },
    {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain colored',
      stars: 3
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored',
      stars: 3
    },
    {
      name: 'Node.js',
      icon: 'devicon-nodejs-plain colored',
      stars: 3
    },
    {
      name: 'Git',
      icon: 'devicon-git-plain colored',
      stars: 4
    },
    {
      name: 'Docker',
      icon: 'devicon-docker-plain colored',
      stars: 3
    },
    {
      name: 'Selenium',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
      icon: 'devicon-selenium-original',
      stars: 4
    },
    {
      name: 'Pandas',
      icon: 'devicon-pandas-plain colored',
      stars: 3
    },
    {
      name: 'Java',
      icon: 'devicon-java-plain',
      stars: 3
    },
    {
      name: 'Spring',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
      stars: 3
    },
    {
      name: 'C',
      icon: 'devicon-c-plain',
      stars: 4
    },
  ]

  skillsCarousel1: any[];
  skillsCarousel2: any[];

  // Controladores para os carrosséis
  currentSkill1: number = 0;
  currentSkill2: number = 0;

  constructor() {
    const mid = Math.ceil(this.skills.length / 2);
    this.skillsCarousel1 = this.skills.slice(0, mid);
    this.skillsCarousel2 = this.skills.slice(mid);
  }

  previousSkill1() {
    this.animateSlide('right', 'carousel1'); 
    setTimeout(() => { 
      this.currentSkill1 = (this.currentSkill1 - 1 + this.skillsCarousel1.length) % this.skillsCarousel1.length;
    }, 300); // Tempo de transição da animação
  }

  nextSkill1() {
    this.animateSlide('left', 'carousel1'); 
    setTimeout(() => {
      this.currentSkill1 = (this.currentSkill1 + 1) % this.skillsCarousel1.length;
    }, 300); 
  }

  previousSkill2() {
    this.animateSlide('right', 'carousel2'); 
    setTimeout(() => { 
      this.currentSkill2 = (this.currentSkill2 - 1 + this.skillsCarousel2.length) % this.skillsCarousel2.length;
    }, 300); // Tempo de transição da animação
  }

  nextSkill2() {
    this.animateSlide('left','carousel2'); 
    setTimeout(() => {
      this.currentSkill2 = (this.currentSkill2 + 1) % this.skillsCarousel2.length;
    }, 300); 
  }

  animateSlide(direction: string, carouselClass: string) {
    const activeSlide = document.querySelector(`.${carouselClass} .carousel__slide.active`);
    if (activeSlide) {
      activeSlide.classList.add(`slide-out-${direction}`);
      setTimeout(() => {
        activeSlide.classList.remove('slide-out-left', 'slide-out-right');
      }, 300); 
    }
  }
}
