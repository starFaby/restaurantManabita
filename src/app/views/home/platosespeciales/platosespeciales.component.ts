import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platosespeciales',
  templateUrl: './platosespeciales.component.html',
  styleUrls: ['./platosespeciales.component.scss']
})
export class PlatosespecialesComponent implements OnInit {
  data = [
    {
      id:1,
      title:'Desconocido',
      img:'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1632835293/restaurantManabita/platosespeciales/WhatsApp_Image_2021-09-28_at_08.01.08_cbbabx.jpg',
      estado:''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
