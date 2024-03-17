import { Component, Output, EventEmitter } from '@angular/core';
import { FilterArray } from '../../../models/filters.model';

@Component({
  selector: 'app-filter-characters',
  templateUrl: './filter-characters.component.html',
  styleUrl: './filter-characters.component.scss'
})

export class FilterCharactersComponent {
  filterArray: FilterArray = {
    filterName: '',
    filterType: null,
    filterStatus: '',
    filterGender: ''
  };

  @Output() filterChange: EventEmitter<FilterArray> = new EventEmitter<FilterArray>();

  emitFilterChange(): void {
    this.filterChange.emit(this.filterArray);
  }

  clearFilter(): void {
    this.filterArray = {
      filterName: '',
      filterType: null,
      filterStatus: '',
      filterGender: ''
    };
    this.emitFilterChange()
  }
}
