import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'assets',
        title: 'Asset Management',
        type : 'basic',
        icon : 'heroicons_outline:cube',
        link : '/assets'
    },
    {
        id   : 'stock',
        title: 'Stock Management',
        type : 'basic',
        icon : 'heroicons_outline:archive-box',
        link : '/stock'
    }
];

export const compactNavigation: FuseNavigationItem[] = [...defaultNavigation];
export const futuristicNavigation: FuseNavigationItem[] = [...defaultNavigation];
export const horizontalNavigation: FuseNavigationItem[] = [...defaultNavigation];