import { Component, OnInit } from '@angular/core';
import {Cv} from "../../cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
 
  public cvs: Cv[] = [
    new Cv(0, "bargougui", "haikel", 22, 11111111, "Student", "assets/images/rotating_card_profile2.png"),
    new Cv(1, "BRAGA", "hykel", 22, 11111111, "Student", "assets/images/rotating_card_profile2.png"),
    new Cv(2, "baRgOuguI", "haikel", 22, 11111111, "Student", "assets/images/rotating_card_profile3.png"),
  ];

  selectedCv: Cv | null = null;

  showDetails(id: number) {
    this.selectedCv = this.cvs.find((cv) => cv.id === id) || null;
  }
  ngOnInit(): void {
  }


}
