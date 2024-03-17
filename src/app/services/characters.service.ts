import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  public apiUrl = 'https://rickandmortyapi.com/api/character/';


  constructor(private http: HttpClient) { }

  getCharacters(pageUrl?: string): Observable<any> {
    const url = pageUrl || this.apiUrl;

    return this.http.get(url);
  }
}
