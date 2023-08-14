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
            alt: 'Train icon',
            url: '#'
        },
        pageName: 'Trains',
        pageUrl: '#',
    },
    {
        icon: {
            alt: 'Bus icon',
            url: '#'
        },
        pageName: 'Buses',
        pageUrl: '#',
    },
    {
        icon: {
            alt: 'Steet Car icon',
            url: '#'
        },
        pageName: 'Steet Car',
        pageUrl: '#',
    },
    {
        icon: {
            alt: 'Advisories icon',
            url: '#'
        },
        pageName: 'Advisories',
        pageUrl: '#',
    },

    {
        icon: {
            alt: 'Breeze Card icon',
            url: '#'
        },
        pageName: 'Breeze Card',
        pageUrl: '#',
    },
    {
        icon: {
            alt: 'Dropdown icon',
            url: '#'
        },
        pageName: 'More',
        pageUrl: '#',
    }
],
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