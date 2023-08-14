import { Sidebar } from "../models/sidebar.interfaces";

export const SiderbarMocks: Sidebar = {
    logo: 'Logo Here',
    icons: [{
        alt: 'Open Menu',
        url: '#'
    },{
        alt: 'Close Menu',
        url: '#'
    }],
    pages: [{
        icon: {
            alt: 'Open Menu',
            url: '#'
        },
        pageName: 'Trains',
        pageUrl: '#',
    }],
    quickLinks: [{
        alt: 'Contact Info',
        label: 'Contact Info',
        url: '#'
    },
    {
        alt: 'News & Updates Page',
        label: 'News & Updates',
        url: '#'
    },
    {
        alt: 'Accessibility Services Page',
        label: 'Accessibility Services',
        url: '#'
    }]
}