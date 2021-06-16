import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Output() position = new EventEmitter<google.maps.LatLngLiteral>();

  center: google.maps.LatLngLiteral = {
    lat: -33.43799974538497,
    lng: -70.65047705571942
  };

  zoom = 14;

  markerOptions: google.maps.MarkerOptions = {draggable: true};
  markerPosition?: google.maps.LatLngLiteral;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: google.maps.MapMouseEvent) {
    this.position.emit(event.latLng.toJSON());
    this.markerPosition = event.latLng.toJSON();
  }

  

}
