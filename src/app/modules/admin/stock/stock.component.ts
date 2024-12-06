import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stock',
    templateUrl: './stock.component.html'
})
export class StockComponent implements OnInit {
    selectedCategory: string = 'spare-parts';

    categories = [
        { id: 'spare-parts', title: 'Spare Parts', icon: 'settings_suggest', description: 'Manage spare parts inventory' },
        { id: 'consumables', title: 'Consumables', icon: 'inventory_2', description: 'Track consumable materials' },
        { id: 'raw-materials', title: 'Raw Materials', icon: 'category', description: 'Monitor raw materials stock' },
        { id: 'tools', title: 'Tools & Equipment', icon: 'handyman', description: 'Manage tools and equipment' }
    ];

    constructor() {}

    ngOnInit(): void {}

    setCategory(category: string): void {
        this.selectedCategory = category;
    }
}