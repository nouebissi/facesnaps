import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import {   ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!:FaceSnap;
  buttonText!:string;

  constructor( private faceSnapsService: FaceSnapsService,private router:ActivatedRoute){}
  
  ngOnInit(): void {
    this.buttonText='Oh snap !'
    const faceSnapId = +this.router.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getsnapsById(faceSnapId);
  }
  onAddSnap(){
    if(this.buttonText=='Oh snap !'){
      this.faceSnapsService.snapfaceSnapById(this.faceSnap.id,'snapped');
      this.buttonText='Oops unsnaps !'
    }else{
      this.faceSnapsService.snapfaceSnapById(this.faceSnap.id,'unsnapped');
      this.buttonText='Oh snap !'
    }
  }
}
