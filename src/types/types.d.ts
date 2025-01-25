
export interface Url {
    id: number;
    originalLink: string;
    shortenedLink: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    accessCount: number;
}

export interface User {
    id: number;
    username: string;
}

export interface NewUrl {
    originalLink: string;
    description: string;
    idUser?: number;
}

export interface NewUser {
    username: string;
}

export interface UpdateUrl {
    originalLink: string;
}

