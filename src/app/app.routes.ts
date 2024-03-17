import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { EpisodeDetailComponent } from './components/characters/episode-detail/episode-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'characters',
    component: CharactersComponent,
    title: 'Characters'
  },
  {
    path: 'details/:id',
    component: CharacterDetailComponent,
    title: 'Character details'
  },
  {
    path: 'episode-details/:id',
    component: EpisodeDetailComponent,
    title: 'Episode details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
