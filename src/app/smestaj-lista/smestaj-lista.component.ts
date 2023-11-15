import { Component, OnInit } from '@angular/core';
import { Smestaj } from './smestaj.model';

@Component({
  selector: 'app-smestaj-lista',
  templateUrl: './smestaj-lista.component.html',
  styleUrls: ['./smestaj-lista.component.css']
})
export class SmestajListaComponent implements OnInit {
  smestaji: Smestaj[] = [
    { naziv: 'Jednokrevetna Soba', brojKreveta: 1, cenaPoNoci: 50 },
    { naziv: 'Dvokrevetna Soba', brojKreveta: 2, cenaPoNoci: 100 },
    { naziv: 'Penthouse', brojKreveta: 4, cenaPoNoci: 250 },
   
  ];

  constructor() { }

  ngOnInit(): void {
  }
  dodajNoviSmestaj(smestaj: Smestaj): void {
    this.smestaji.push(smestaj);
  }
}
