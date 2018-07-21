import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BusDialogComponent } from 'app/bus-dialog/bus-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { OnibusService } from 'app/onibus.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data:any[] = [];
  veiculos:any[] = [];

constructor(private dialog: MatDialog,
            private onibusService: OnibusService){
           
            this.getData();
}

  getData(){
    this.onibusService.getData().subscribe((data)=>{
      this.data = data.DATA;
      
    })
  }

  carregaVeiculos(veiculo){
      this.onibusService.getVeiculosByLinha(veiculo).subscribe((data)=>{
        this.veiculos = data.DATA;
      })
  }

  

  openDialog(veiculo){
    let dialogRef = this.dialog.open(BusDialogComponent, {
      height: '800px',
      width: '800px',
    });
    const dialog = dialogRef.componentInstance;

    dialog.veiculo = veiculo;
   
    dialog.getCoordenadas();
   const interval = setInterval(()=>{
    dialog.getCoordenadas();
    },5000)
      
   dialogRef.beforeClose().subscribe((data)=>{
      if(interval){
        clearInterval(interval)
      }
    })
  }




}
