import { Component, OnInit } from '@angular/core';
import { MoveDirection, OutMode, Engine,Container,ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { NgParticlesService } from "@tsparticles/angular";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  id = "tsparticles";

  particlesOptions: ISourceOptions = {
    
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Use string instead of ClickMode.push
        },
        onHover: {
          enable: true,
          mode: "repulse", // Use string instead of HoverMode.repulse
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#9400FF",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none", // Use string instead of MoveDirection.none
        enable: true,
        outModes: {
          default: "bounce", // Use string instead of OutMode.bounce
        },
        random: false,
        speed: 4,
        straight: true,
      },
      number: {
        density: {
          enable: true,
          width: 1000,
          height: 1000,
        },
        value: 30,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine: Engine) => {
      console.log(engine);
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
