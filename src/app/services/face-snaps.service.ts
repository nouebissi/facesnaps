import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 140,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 190,
      location: 'la montagne'
    },
    {
      id: 3,
      title: 'Four Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 190,
      location: 'la montagne'
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps
  }
  getsnapsById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
    if (faceSnap) {
      return faceSnap
    } else {
      throw new Error("FaceSnap not found");
    }
  }
  snapfaceSnapById(faceSnapId: number, snapType: 'snapped' | 'unsnapped'): void {
    const faceSnap = this.getsnapsById(faceSnapId);
    snapType === 'snapped' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}