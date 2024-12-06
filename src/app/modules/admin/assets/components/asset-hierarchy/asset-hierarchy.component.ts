import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface AssetNode {
    name: string;
    type: string;
    children?: AssetNode[];
}

interface FlatAssetNode {
    expandable: boolean;
    name: string;
    type: string;
    level: number;
}

@Component({
    selector: 'asset-hierarchy',
    templateUrl: './asset-hierarchy.component.html'
})
export class AssetHierarchyComponent implements OnInit {
    private _transformer = (node: AssetNode, level: number): FlatAssetNode => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            type: node.type,
            level: level,
        };
    };

    treeControl = new FlatTreeControl<FlatAssetNode>(
        node => node.level,
        node => node.expandable,
    );

    treeFlattener = new MatTreeFlattener(
        this._transformer,
        node => node.level,
        node => node.expandable,
        node => node.children,
    );

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    constructor() {
        // Sample hierarchical data
        const TREE_DATA: AssetNode[] = [
            {
                name: 'Main Factory',
                type: 'Site',
                children: [
                    {
                        name: 'Building A',
                        type: 'Building',
                        children: [
                            {
                                name: 'Production Floor',
                                type: 'Floor',
                                children: [
                                    {
                                        name: 'Assembly Line 1',
                                        type: 'Equipment',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        this.dataSource.data = TREE_DATA;
    }

    ngOnInit(): void {}

    hasChild = (_: number, node: FlatAssetNode) => node.expandable;
}