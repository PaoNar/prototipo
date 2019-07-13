import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { MessageI } from '../models/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private contactCollattion : AngularFirestoreCollection<MessageI> ;

  constructor(private afs : AngularFirestore) {
    this.contactCollattion= afs.collection<MessageI>('contactos');
   }

   saveMensaje(newContact : MessageI) : void {
     this.contactCollattion.add(newContact)
   }
}
