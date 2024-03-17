import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  episodes: any[] = [];
  characters: any[] = [];
  apiUrl = "https://rickandmortyapi.com/api";

  constructor(private characterService: CharacterService) { }
  
  ngOnInit(): void {
    this.characterService.getCharacters(`${this.apiUrl}/character`).subscribe(
      (data: any) => {
        this.characters = data.results;
      },
      (error: any) => {
        console.error('Hata:', error);
      }
    );
    this.characterService.getCharacters(`${this.apiUrl}/episode`).subscribe(
      (data: any) => {
        this.episodes = data.results;
      },
      (error: any) => {
        console.error('Hata:', error);
      }
    );
  }
}
