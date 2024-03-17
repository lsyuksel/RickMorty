import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../../../services/characters.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.scss',
})

export class EpisodeDetailComponent implements OnInit {
  episodes: any;
  characters: any[] = [];
  characterUrls: any[] = [];
   
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
    ) { }

  formatCreatedDate(created: string): string {
    const date = new Date(created);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  characterFunction() {
    this.characterUrls.forEach(url => {
      this.characterService.getCharacters(url).subscribe(
        (data: any) => {
          this.characters.push(data);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const episodeId = params['id'];
      const url = `https://rickandmortyapi.com/api/episode/${episodeId}`;

      if (url) {
        this.characterService.getCharacters(url).subscribe(
          (data: any) => {
            this.episodes = data;
            this.characterUrls = data.characters;
            this.characterFunction();
          },
          (error: any) => {
            console.error('Error:', error);
          }
        );
      }
    });
  }
}