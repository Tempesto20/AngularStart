import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  // model:string = "BMW";
  name!: string;
  model!: string;
  speed!: number;


  // colors: {
  //   car: string;
  //   salon: string;
  //   wheels: string;
  // } | undefined;

  colors!: Colors;
  options!: string[];





  ngOnInit() {
    this.name = 'lada';
    this.model = 'priora';
    this.speed = 100;
    this.colors = {
      car: 'survive',
      salon: 'survive',
      wheels: 'survive'
    };
    this.options = [
      'hope in the future'
    ];
  }


  carSelect(carName: string) {
    if (carName == 'BMW') {
      this.name = 'BMW';
      this.model = 'M5';
      this.speed = 200;
      this.colors = {
        car: 'white',
        salon: 'white',
        wheels: 'white'
      };
      this.options = [
        'BMW abs', 'BMW autopilot', 'BMW parking'
      ];
    } else if (carName == 'AUDI') {
      this.name = 'AUDI';
      this.model = 'RS8';
      this.speed = 180;
      this.colors = {
        car: 'black',
        salon: 'black',
        wheels: 'black'
      };
      this.options = [
        'AUDI abs', 'AUDI autopilot', 'AUDI parking'
      ];
    } else if(carName == 'MERCEDES') {
      this.name = 'MERCEDES';
      this.model = 'AMG';
      this.speed = 280;
      this.colors = {
        car: 'silver',
        salon: 'silver',
        wheels: 'silver'
      };
      this.options = [
        'MERCEDES abs', 'MERCEDES autopilot', 'MERCEDES parking'
      ];
    }
  }







}

  // audiSelect(){
  //   this.name = 'AUDI';
  //   this.model = 'RS8';
  //   this.speed = 180;
  //   this.colors = {
  //     car: 'black',
  //     salon: 'black',
  //     wheels: 'black'
  //   };
  //   this.options = [
  //     'abs','autopilot', 'parking'
  //   ];
  // }


  // mercedesSelect(){
  //   this.name = 'MERCEDES';
  //   this.model = 'AMG';
  //   this.speed = 280;
  //   this.colors = {
  //     car: 'silver',
  //     salon: 'silver',
  //     wheels: 'silver'
  //   };
  //   this.options = [
  //     'abs','autopilot', 'parking'
  //   ];
  // }

// }


interface Colors {
  car: string;
  salon: string;
  wheels: string;
}