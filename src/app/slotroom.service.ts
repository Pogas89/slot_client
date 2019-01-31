import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SlotroomService {
  private URI =  environment.uri;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.URI + 'rest/slotroom');
  }

  get(id: string) {
    return this.http.get(this.URI + 'rest/slotroom/'+id);
  }

  create(slotroom: any): Observable<any> {
    return this.http.post(this.URI + 'rest/slotroom', slotroom);
  }

  update(slotroom: any): Observable<any> {
    return this.http.put(this.URI + 'rest/slotroom', slotroom);
  }

  delete(id: string) {
    return this.http.delete(this.URI + 'rest/slotroom/'+id);
  }
}
