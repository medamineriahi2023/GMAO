import { Component } from '@angular/core';

@Component({
    selector: 'assets',
    templateUrl: './assets.component.html'
})
export class AssetsComponent {
    navigation = [
        { id: 'list', icon: 'heroicons_outline:view-list', label: 'Asset List', link: './list' },
        { id: 'hierarchy', icon: 'heroicons_outline:template', label: 'Asset Hierarchy', link: './hierarchy' }
    ];
}