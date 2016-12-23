import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'app-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit, OnChanges {
    @Input() categories: any;
    @Output() selectedFilters = new EventEmitter();
    @Input() allergens: any;
    searchTerm: string = "";

    selectedAllergens: string = 'All';
    selectedCategory: string = 'All';
    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        
    }

    handleSelected = (event, type) => {
        switch(type) {
            case 'allergens': 
                this.selectedAllergens = event.text;
                this.selectedFilters.emit({
                    allergen: this.selectedAllergens,
                    category: this.selectedCategory,
                    search: this.searchTerm
                })
                break;
            case 'category':
                this.selectedCategory = event.text;
                this.selectedFilters.emit({
                    allergen: this.selectedAllergens,
                    category: this.selectedCategory,
                    search: this.searchTerm
                });
            case 'search':
                this.selectedFilters.emit({
                    allergen: this.selectedAllergens,
                    category: this.selectedCategory,
                    search: this.searchTerm
                });
                break;
            default:
                break;
        }
    }

}
