import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  resetPass(id: string) {
    return this.http.get(this.URI + 'rest/user/reset/'+id);
  }

  changePass(form: any) {
    return this.http.put(this.URI + 'rest/user',form);
  }
}
