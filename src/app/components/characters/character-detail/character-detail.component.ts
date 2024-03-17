import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../../../services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})

export class CharacterDetailComponent implements OnInit {
  character: any = null;
  episodes: any[] = [];
  episodeUrls: any[] = [];
   
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
    ) { }

  formatCreatedDate(created: string): string {
    const date = new Date(created);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
  episodeFunction() {
    this.episodeUrls.forEach(url => {
      this.characterService.getCharacters(url).subscribe(
        (data: any) => {
          this.episodes.push(data);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const characterId = params['id'];
      const url = `https://rickandmortyapi.com/api/character/${characterId}`

      if (url) {
        this.characterService.getCharacters(url).subscribe(
          (data: any) => {
            this.character = data;
            this.episodeUrls = data.episode;
            this.episodeFunction();
          },
          (error: any) => {
            console.error('Error:', error);
          }
        );
      }
    });
  }
}