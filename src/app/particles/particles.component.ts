import { Component, OnInit } from '@angular/core';
declare var particlesJS: any; 

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {

  ngOnInit(): void {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
       
      },
      "interactivity": {
       
      },
      "retina_detect": true
    });
  }
}
