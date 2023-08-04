import { Injectable } from '@angular/core';
import { Carnet,Commentaire } from './carnet.model';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarnetService {
  carnet:Carnet[]=[
  { 
    id : 'c1',
    name :'Marco',
    destination : 'Los Salamos',
    date : '1942/10/10',
    description : 'Petit voyage au Nouveau Mexique',
    imageUrl : 'https://www.nps.gov/common/uploads/akr/park/mapr/1ACE52A4-AA17-D86F-8124628B726F5966/1ACE52A4-AA17-D86F-8124628B726F5966.jpg?autorotate=false&maxWidth=1300&maxHeight=1020'
  },
  {
    id : 'c2',
    name :'Eugnie',
    destination : 'Tahiti',
    date : '2008/01/09',
    description : 'Capitale économique de la Polynésie française, l’île principale Tahiti ne manque pas d’intérêt ! En premier lieu le marché de Papeete. Vous pourrez y découvrir les fameux couronnes et colliers de fleurs tressés le matin même.',
    imageUrl : 'https://tahititourisme.fr/wp-content/uploads/2022/11/P2_01_TAHAA_TAHITI_025_DK_2017_%C2%A9_David-Kirkland-1783x1335-1.jpg'
  },
  { 
    id : 'c3',
    name :'Chris',
    destination : 'Berlin',
    date : '2023/02/11',
    description : 'Petit voyage en Allemagne',
    imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/1200px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg'
  },
  {
  id : 'c4',
  name : 'Victor',
  destination : 'Paris',
  date : '2016/08/19',
  description : 'Petit voyage à Paris ',
  imageUrl : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/67/21/caption.jpg?w=1200&h=-1&s=1'
 },
 {
  id : 'c5',
  name: 'Pedro',
  destination :'Madrid',
  date :'2012/10/10',
  description : 'Voyage pour aller voir jouer le GOAT',
  imageUrl : 'https://sportune.20minutes.fr/wp-content/uploads/2012/09/cristiano-ronaldo.jpg'
 }
]
  
ElCommentaire:Commentaire[]=[
  {
    id:"0",
    name:"Billy",
    message:"Cool le voyage",
    idCarnet:"c1"
  },
  {
    id:"1",
    name:"Bob",
    message:"Cool le voyage",
    idCarnet:"c2"
  },
  {
    id:"2",
    name:"Raoul",
    message:"Cool le voyage",
    idCarnet:"c3"
  },
  {
    id:"3",
    name:"Poul",
    message:"Cool le voyage",
    idCarnet:"c4"
  },
  {
    id:"4",
    name:"Elestos",
    message:"Cool le voyage",
    idCarnet:"c5"
  }
]


getAllCarnet (){
  return this.carnet;
}
getCarnet (carnetId:string){
  return this.carnet.find(carnet =>{
    return carnet.id === carnetId
  })
}
deleteCarnet(carnetId: string){
  this.carnet = this.carnet.filter(carnet => {
    return carnet.id !== carnetId;
  })
}
persistCarnet(carneto:Carnet){
  return this.carnet.push(carneto);
}
insertCarnet(carnet:Carnet): void{
   this.carnet.push(carnet);
}
sortBy() {
  
}
getCommentaire(carnetId: string){
  return this.ElCommentaire.find(ElCommentaire =>{
    return ElCommentaire.idCarnet === carnetId
  })
}
persistCommentaire(com:Commentaire){
  return this.ElCommentaire.push(com);
}
  constructor() { }
}
