import { Component } from '@angular/core';
import { OnibusService } from 'app/onibus.service';
import { Coord } from 'app/coord';

@Component({
  selector: 'app-bus-dialog',
  templateUrl: './bus-dialog.component.html',
  styleUrls: ['./bus-dialog.component.css']
})
export class BusDialogComponent {
  
  veiculo: any;
  coordenadas:any[] = [];  

  
  lat: number = 51.678418;
  lng: number = 7.809007;

  fakeData:boolean = false;

  count: number = 2;

  constructor(private onibusService: OnibusService){

  }
   getCoordenadas(){

    if(this.fakeData){
      this.getFakeData();
      
    }else{
      let ordemId = this.veiculo[1];
       this.onibusService.getCoordenadasVeiculo(ordemId).subscribe((data)=>{
          this.coordenadas.push(data.DATA[0]);
          this.atualizaCoordenadas();
       })
    }
   }

   getFakeData(){
    let c : any = ['07-20-2018 02:29:37','C47844', 863, -22.9564,-43.346581,29,287] ;
    c[3] = c[3] + this.count;
    c[4] = c[4] + this.count;
    this.count = this.count + 0.00002;
    this.coordenadas.push(c);
    this.atualizaCoordenadas();
   }

  atualizaCoordenadas(){
    let coord:any;
    coord =  this.coordenadas[this.coordenadas.length -1]
    this.lat = coord[3];
    this.lng = coord[4];
  }


 


}


