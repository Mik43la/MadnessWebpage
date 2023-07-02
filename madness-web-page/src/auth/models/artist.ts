export type ArtistModel = {
    id?:number;
    name: string;
    rating: number;
}


export type ArtistGet = {
    id: number;
    attributes: ArtistModel;
};