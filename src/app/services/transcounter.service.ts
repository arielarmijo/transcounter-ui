import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { concatMap, first, map, take, tap } from 'rxjs/operators';
import { LineNode } from '../components/lines-tree/lines-tree.component';

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

  getLineTree(): Observable<LineNode[]> {

    return this.db.get().pipe(
      map(docs => {

        const lines: Set<string> = new Set();
        const buses: Map<string, any[]> = new Map();

        // TODO: optimizar consulta. 
        // https://stackoverflow.com/questions/47862798/query-function-for-distinct-result-in-firestore
        docs.forEach(doc => {
          const line = doc.data().line;
          const bus = doc.data().bus
          console.log(line, bus);
          lines.add(line);
          if (buses.has(line)) {
            buses.get(line)?.push({name: bus});
          } else {
            buses.set(line, [{name: bus}]);
          }
          
        })

        return [...lines].map(line => ({name: line, children: buses.get(line)}));
        
      })
    );

  }

}
