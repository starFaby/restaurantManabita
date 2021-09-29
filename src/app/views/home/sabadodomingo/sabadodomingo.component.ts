import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabadodomingo',
  templateUrl: './sabadodomingo.component.html',
  styleUrls: ['./sabadodomingo.component.scss']
})
export class SabadodomingoComponent implements OnInit {
  platos = [
    {
      id:1, 
      title:'Encebollado',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632831754/restaurantManabita/platos%20del%20sabado%20y%20domingo/encebollado_vk9f24.jpg', 
      description:'', 
      estado:0
    },
    {
      id:1, 
      title:'Camaron',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632831764/restaurantManabita/platos%20del%20sabado%20y%20domingo/cevichecamaron_ne6xic.png', 
      description:'', 
      estado:0
    },
    {
      id:1, 
      title:'Pescado Grande',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632832493/restaurantManabita/platos%20del%20sabado%20y%20domingo/pescadogrande_wglslh.jpg', 
      description:'', 
      estado:0
    },
    {
      id:1, 
      title:'Pescado Extra Grande',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632832491/restaurantManabita/platos%20del%20sabado%20y%20domingo/pescadoextragrande_st2cna.jpg', 
      description:'', 
      estado:0
    },
    {
      id:1, 
      title:'Guatita',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632833636/restaurantManabita/platos%20del%20sabado%20y%20domingo/guatita_tvlc44.jpg', 
      description:'', 
      estado:0
    },
    {
      id:1, 
      title:'Seco de Chancho',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632833636/restaurantManabita/platos%20del%20sabado%20y%20domingo/secochancho_ribl9j.jpg', 
      description:'', 
      estado:0
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
