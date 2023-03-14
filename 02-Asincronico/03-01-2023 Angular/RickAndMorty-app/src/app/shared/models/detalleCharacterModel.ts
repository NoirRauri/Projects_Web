export interface DetalleCharacterModel {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    episode: [];
    url: string;
    created: Date;
}