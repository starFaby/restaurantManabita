import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  title = ' ';
  position={
    lat: -0.258361, 
    lng: -78.516924
  }

  label={
    color:'red',
    text:'marcador'
  }
  data = [
    {
      title:'Viche de pescado, cangrejo o camarón',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775598/restaurantManabita/vichepescado_wygdcw.jpg',
      description:'Es una sopa espesa que combina una gran variedad de vegetales frescos, plátanos y caldo a base de cacahuete. Se cocina con zanahorias, habas y distintas hierbas.'    
    },
    {
      title:'Tonga',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775599/restaurantManabita/tonga_c0emm8.png',
      description:'Es un plato que incluye arroz, bananas cocidas y pollo en salsa de cacahuete. Sobresale por su originalidad al ser servido sobre una hoja de banano.'    
    },
    {
      title:'Cazuela manaba',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775599/restaurantManabita/Cazuelamanaba_rfowkp.jpg',
      description:'Este plato típico de la cocina costeña se realiza al horno con plátano verde, refrito, pescado o camarón y cacahuete. Se acompaña con el clásico arroz blanco caliente, limón y ají, y se cocina en pailas de barro.'    
    },
    {
      title:'Encebollado',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775598/restaurantManabita/encebollado_ltaimy.jpg',
      description:'Este plato típico de la cocina costeña se realiza al horno con plátano verde, refrito, pescado o camarón y cacahuete. Se acompaña con el clásico arroz blanco caliente, limón y ají, y se cocina en pailas de barro.'    
    },
    {
      title:'Seco de gallina criolla y de pescado',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775598/restaurantManabita/gallinaCriolla_ierlkp.jpg',
      description:'Se cocina en una cacerola la gallina junto con cebolla rallada, aceite, tomates, perejil, cilantro, comino, sal y pimienta.'    
    },
  ];
  images = [
    'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775598/restaurantManabita/vichepescado_wygdcw.jpg',
    'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775599/restaurantManabita/tonga_c0emm8.png',
    'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775599/restaurantManabita/Cazuelamanaba_rfowkp.jpg',
    'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775598/restaurantManabita/encebollado_ltaimy.jpg',
    'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632775598/restaurantManabita/gallinaCriolla_ierlkp.jpg'
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel | any;
  constructor() {
  }

  ngOnInit(): void {
  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
