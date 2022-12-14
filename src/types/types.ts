export interface ISong {
    description: string
    id: string

}

interface IArtist {
    external_urls: {
        spotify: string
        href: string
        id: string
        name: string
        type: string
        uri: string
    }
}

interface IImage {
    height: number
    url: string
    width: number
}

export interface ISongInfo {
    number: number
    author?: string
    index?: number
    id?: string
    setButtonNumber?: (num: number) => void
    buttonNumber?: number
    description?: string | undefined
    img?: string
    songNumber?: number
    title?: string | undefined
    albumName?: string
    isFavourite?: boolean
    songAuthorId: string
}

export interface IPlaylist {
    id: string
    img: string
    title: string
    description: string
    // type: string
    songs?: ISongInfo[]
}

export interface IShowList {
    id?: string
    description?: string
    title?: string
    author?: string
    image?: string
    items?: any[] | null,
    background?: string
}

export interface ISearchedTracks {
    // name: string,
    // id: string,
    // albumName: string,
    // author: string,
    // image: string
    songs: ISongInfo[] | undefined
    name: string | undefined
    description: string
    img: string | undefined
    id: string
    author: string,
    albumName: string,
    songAuthorId: string
}
export interface ISearchedAlbums {
    image: string,
    name: string,
    author: string
    id: string
}
export interface ISearchedPlaylists {
    image: string,
    name: string,
    id: string,
    description: string,
    songsList: ISongInfo[] | undefined
}
export interface ISearchedArtists {
    image: {
        url: string
    },
    name: string,
    id: string ,
}

export interface ISearchedArtist {
    image: string
    id: string
    name: string
}

export interface ICurrentArtistTopTracks {

}

export interface IRelatedArtist {
    authorId: string
    image: {
        url: string
    }
    name: string
}

// let INewRelatedArtist = {

// }