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
      subtitle:'Sabor y Tradicion el Manaba',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632831754/restaurantManabita/platos%20del%20sabado%20y%20domingo/encebollado_vk9f24.jpg', 
      description:'',
      nota:'No esperes..!! Llama ya al',
      cel:'0987384692 / 0983118303',
      estado:0
    },
    {
      id:2, 
      title:'Camaron',
      subtitle:'Sabor y Tradicion el Manaba',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632831764/restaurantManabita/platos%20del%20sabado%20y%20domingo/cevichecamaron_ne6xic.png', 
      description:'', 
      nota:'No esperes..!! Llama ya al',
      cel:'0987384692 / 0983118303',
      estado:0
    },
    {
      id:3, 
      title:'Pescado Grande',
      subtitle:'Sabor y Tradicion el Manaba',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632832493/restaurantManabita/platos%20del%20sabado%20y%20domingo/pescadogrande_wglslh.jpg', 
      description:'', 
      nota:'No esperes..!! Llama ya al',
      cel:'0987384692 / 0983118303',
      estado:0
    },
    {
      id:4, 
      title:'Pescado Extra Grande',
      subtitle:'Sabor y Tradicion el Manaba',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632832491/restaurantManabita/platos%20del%20sabado%20y%20domingo/pescadoextragrande_st2cna.jpg', 
      description:'', 
      nota:'No esperes..!! Llama ya al',
      cel:'0987384692 / 0983118303',
      estado:0
    },
    {
      id:5, 
      title:'Guatita',
      subtitle:'Sabor y Tradicion el Manaba',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632833636/restaurantManabita/platos%20del%20sabado%20y%20domingo/guatita_tvlc44.jpg', 
      description:'', 
      nota:'No esperes..!! Llama ya al',
      cel:'0987384692 / 0983118303',
      estado:0
    },
    {
      id:6, 
      title:'Seco de Chancho',
      subtitle:'Sabor y Tradicion el Manaba',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632833636/restaurantManabita/platos%20del%20sabado%20y%20domingo/secochancho_ribl9j.jpg', 
      description:'', 
      nota:'No esperes..!! Llama ya al',
      cel:'0987384692 / 0983118303',
      estado:0
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
