import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterListComponent } from './components/characters/character-list/character-list.component';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { CharacterCardComponent } from './components/characters/character-card/character-card.component';
import { EpisodeCardComponent } from './components/characters/episode-card/episode-card.component';
import { EpisodeDetailComponent } from './components/characters/episode-detail/episode-detail.component';
import { FilterCharactersComponent } from './components/characters/filter-characters/filter-characters.component';

import { CharacterService } from './services/characters.service';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CharactersComponent,
        NavMenuComponent,
        CharacterListComponent,
        CharacterDetailComponent,
        EpisodeDetailComponent,
        FilterCharactersComponent,
        CharacterCardComponent,
        EpisodeCardComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
    ],
    providers: [CharacterService],
    bootstrap: [AppComponent]
})
export class AppModule { }