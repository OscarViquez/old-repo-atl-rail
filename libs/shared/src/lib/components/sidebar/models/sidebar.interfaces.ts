export interface Sidebar {
    // Dark Or Light Mode
    mode:  string; 
    logo: Icon;
    icons: Icon[];
    pages: Page[];
    quickLinks: QuickLink;
}


export interface Icon {
    alt: string;
    url: string;
} 

export interface Page {
    active: boolean;
    icon: Icon;
    pageName: string;
    pageUrl: string;
}

export interface QuickLink {
    title: string;
    links: Links[];
}

export interface Links {
    label: string;
    url: string;
}