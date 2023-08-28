import { Sidebar } from '../models/sidebar.interfaces';

export const SiderbarLightMocks: Sidebar = {
   mode: 'light',
   logo: {
      alt: 'Logo',
      url: 'https://atl-railmap-assets.netlify.app/images/logo-light.svg'
   },
   icons: [
      {
         alt: 'Open Menu',
         url: '#'
      },
      {
         alt: 'Close Menu',
         url: '#'
      }
   ],
   pages: [
      {
         active: true,
         icon: {
            alt: 'Train icon',
            url: '#'
         },
         pageName: 'Trains',
         pageUrl: '/trains'
      },
      {
         active: false,
         icon: {
            alt: 'Bus icon',
            url: '#'
         },
         pageName: 'Buses',
         pageUrl: '#'
      },
      {
         active: false,
         icon: {
            alt: 'Steet Car icon',
            url: '#'
         },
         pageName: 'Steet Car',
         pageUrl: '#'
      },
      {
         active: false,
         icon: {
            alt: 'Advisories icon',
            url: '#'
         },
         pageName: 'Advisories',
         pageUrl: '#'
      },

      {
         active: false,
         icon: {
            alt: 'Breeze Card icon',
            url: '#'
         },
         pageName: 'Breeze Card',
         pageUrl: '#'
      },
      {
         active: false,
         icon: {
            alt: 'Dropdown icon',
            url: '#'
         },
         pageName: 'More',
         pageUrl: '#'
      }
   ],
   quickLinks: {
      title: 'Quick Links',
      links: [
         {
            label: 'Contact Info',
            url: '#'
         },
         {
            label: 'News & Updates',
            url: '#'
         },
         {
            label: 'Accessibility Services',
            url: '#'
         }
      ]
   }
};

export const SiderbarDarkMocks: Sidebar = {
   mode: 'dark',
   logo: {
      alt: 'Logo',
      url: 'https://atl-railmap-assets.netlify.app/images/logo-dark.svg'
   },
   icons: [
      {
         alt: 'Open Menu',
         url: '#'
      },
      {
         alt: 'Close Menu',
         url: '#'
      }
   ],
   pages: [
      {
         active: true,
         icon: {
            alt: 'Train icon',
            url: '#'
         },
         pageName: 'Trains',
         pageUrl: '/trains'
      },
      {
         active: false,
         icon: {
            alt: 'Bus icon',
            url: '#'
         },
         pageName: 'Buses',
         pageUrl: '#'
      },
      {
         active: false,
         icon: {
            alt: 'Steet Car icon',
            url: '#'
         },
         pageName: 'Steet Car',
         pageUrl: '#'
      },
      {
         active: false,
         icon: {
            alt: 'Advisories icon',
            url: '#'
         },
         pageName: 'Advisories',
         pageUrl: '#'
      },

      {
         active: false,
         icon: {
            alt: 'Breeze Card icon',
            url: '#'
         },
         pageName: 'Breeze Card',
         pageUrl: '#'
      },
      {
         active: false,
         icon: {
            alt: 'Dropdown icon',
            url: '#'
         },
         pageName: 'More',
         pageUrl: '#'
      },
      {
         active: false,
         icon: {
            alt: 'Dropdown icon',
            url: '#'
         },
         pageName: 'More',
         pageUrl: '#'
      }
   ],
   quickLinks: {
      title: 'Quick Links',
      links: [
         {
            label: 'Contact Info',
            url: '#'
         },
         {
            label: 'News & Updates',
            url: '#'
         },
         {
            label: 'Accessibility Services',
            url: '#'
         }
      ]
   }
};
