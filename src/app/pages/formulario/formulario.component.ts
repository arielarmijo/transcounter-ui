import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MapaComponent } from 'src/app/components/mapa/mapa.component';
import { TranscounterService } from 'src/app/services/transcounter.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @ViewChild(MapaComponent) map!: MapaComponent;

  // TODO: Hacer formulario reactivo

  dataForm = this.fb.group({
    line: [null],
    bus: [null],
    direction: ['ida'],
    timeStamp: [null],
    position: this.fb.group({
      latitude: [null],
      longitude:[null]
    }),
    passengersIn: [null],
    passengersOut: [null]
  });

  constructor(private fb: FormBuilder, private tcs: TranscounterService, private snackBar: MatSnackBar) { }

  updatePosition(event: any) {
    this.dataForm.patchValue({
      position: {
        latitude: event.lat,
        longitude: event.lng
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

  onSubmit(): void {
    const ahora = new Date();
    this.dataForm.patchValue({
      timeStamp: ahora.toISOString()
    });
    this.tcs.createData(this.dataForm.value).then(docRef => {
      console.log(docRef);
      this.openSnackBar('Dato creado con exito.', 'Ok');
      this.dataForm.reset();
      this.map.markerPosition = undefined;
    }).catch(error => {
      console.error('Error agregando documento', error);
      this.openSnackBar('Error al crear documento.', 'Ok');
    });
  }

}
