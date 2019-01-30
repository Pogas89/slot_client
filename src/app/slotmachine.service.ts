import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Property } from './property'

@Injectable({
  providedIn: 'root'
})
export class SlotmachineService {
  private URI = Property.uri; //'https://protected-bayou-76067.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.URI + 'rest/slotmachine');
  }

  get(id: string) {
    return this.http.get(this.URI + 'rest/slotmachine/'+id);
  }

  getBySlotroomId(slotroomId: string): Observable<any> {
    return this.http.get(this.URI + 'rest/slotmachine?slotroomId='+slotroomId);
  }

  create(slotmachine: any): Observable<any> {
    return this.http.post(this.URI + 'rest/slotmachine', slotmachine);
  }

  update(slotmachine: any): Observable<any> {
    return this.http.put(this.URI + 'rest/slotmachine', slotmachine);
  }

  delete(id: string) {
    return this.http.delete(this.URI + 'rest/slotmachine/'+id);
  }
}
