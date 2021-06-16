import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranscounterService {

  // TODO: agregar interface para los documentos de la coleccion.
  db: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.db = this.firestore.collection('tcdb');
  }

  getData(): Observable<any[]> {
    return this.db.valueChanges({idField: 'id'});
  }

  createData(data: any) {
    return this.db.add(data);
  }

  deleteData(id: string): Promise<void> {
    return this.db.doc(id).delete();
  }

}
