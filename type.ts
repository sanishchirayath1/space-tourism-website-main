export interface Data {
    destinations: Destination[];
    crew:         Crew[];
    technology:   Technology[];
}

export interface Crew {
    id:        string;
    name:   string;
    images: CrewImages;
    role:   string;
    bio:    string;
}

export interface CrewImages {
    png:  string;
    webp: string;
}

export interface Destination {
    id:        string;
    name:        string;
    images:      CrewImages;
    description: string;
    distance:    string;
    travel:      string;
}

export interface Technology {
    id:        string;
    name:        string;
    images:      TechnologyImages;
    description: string;
}

export interface TechnologyImages {
    portrait:  string;
    landscape: string;
}
