export interface Carnet {
    id: string;
    name: string;
    destination: string;
    date:string;
    description:string;
    imageUrl: string;
}

export interface Commentaire{
    id:string;
    name:string;
    message:string;
    idCarnet?:string;
}