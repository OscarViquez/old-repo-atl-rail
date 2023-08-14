export interface Sidebar {
    logo: string
    icons: Icons[]
    pages: Pages[]
    quickLinks: QuickLinks[]
}


export interface Icons {
    alt: string;
    url: string;
} 

export interface Pages {
    icon: Icons;
    pageName: string;
    pageUrl: string;
}

export interface QuickLinks {
    alt: string;
    label: string;
    url: string;
}