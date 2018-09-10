import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Dossier} from '../domain/dossier';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private http: HttpClient) {
  }

  getDossiers() {
    return this.http.get<Dossier[]>(API_URL + '/dossiers')
      .toPromise()
      .then(data => data);
  }

  getDossier(id: String) {
    return this.http.get<Dossier>(API_URL + '/dossiers/' + id)
      .toPromise()
      .then(data => data);
  }
}
