import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URI =  environment.uri;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.URI + 'rest/user');
  }

  get(id: string) {
    return this.http.get(this.URI + 'rest/user/'+id);
  }

  delete(id: string) {
    return this.http.delete(this.URI + 'rest/user/'+id);
  }
}
