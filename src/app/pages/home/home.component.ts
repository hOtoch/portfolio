import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  

  ngOnInit(): void {
    
  }

  scrollToSession(section: string){
    const element = document.getElementById(section);

    if (element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
