import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../services/characters.service';
import { FilterArray } from '../../../models/filters.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  pageInfo: any = {};
  activePage: any = 1;
  filteredItems: any = "";
  constructor(private characterService: CharacterService) { }
  
  applyFilter(filter: FilterArray): void {
    const filters = [
      filter.filterName && `name=${filter.filterName}`,
      filter.filterType && `type=${filter.filterType}`,
      filter.filterStatus && `status=${filter.filterStatus}`,
      filter.filterGender && `gender=${filter.filterGender}`,
    ].filter(Boolean);
    this.filteredItems = filters.join('&');
    const apiUrl = `https://rickandmortyapi.com/api/character/?${this.filteredItems}`;

    this.characterService.getCharacters(apiUrl).subscribe(
      (data: any) => {
        this.characters = data.results;
      },
      (error: any) => {
        this.characters = [];
      }
    );
    this.getCharacters(apiUrl);
  }

  getPageNumbers(): (number | string)[] {
    const totalPages = this.pageInfo.pages;
    const currentPage = this.getCurrentPage();
  
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(startPage + 4, totalPages);
  
    const pageNumbers: (number | string)[] = [];
  
    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push('...');
      }
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
  
    return pageNumbers;
  }

  getCurrentPage(): number {
    const currentUrl = this.pageInfo?.prev || this.pageInfo?.next;
    if (!currentUrl) {
      return 1;
    }
    const urlParams = new URLSearchParams(currentUrl.split('?')[1]);
    return Number(urlParams.get('page'));
  }
  
  getPageUrl(pageNumber: number | string): string | undefined {
    this.activePage = pageNumber;
    if(typeof pageNumber == 'number'){
      if(this.filteredItems){
        return `${this.characterService.apiUrl}?page=${pageNumber}&${this.filteredItems}`;
      } else {
        return `${this.characterService.apiUrl}?page=${pageNumber}`;
      }
    } else {
      return `${this.characterService.apiUrl}?page=${this.activePage}`;
    }
  }

  getCharacters(pageUrl?: string): void {
    const pageNumber = pageUrl?.split("page=")[1]?.split("&")[0];
    this.activePage = pageNumber;
    if(!this.activePage) {
      this.activePage = 1;
    }

    this.characterService.getCharacters(pageUrl).subscribe(
      (data: any) => {
        this.characters = data.results;
        this.pageInfo = data.info;
      },
      (error: any) => {
        console.error('Hata:', error);
      }
    );
  }

  ngOnInit(): void {
    this.getCharacters();
  }
}
