import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component} from '@angular/core';

export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss'],
})

export class MiPerfilComponent {
  vegetables: Vegetable[] = [
    {name: 'Paseador'},
    {name: 'Aseo'},
    {name: 'Cocina'},
    {name: 'Seguridad'},
    {name: 'Niñera'},
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
  constructor() { }

  ngOnInit() {}

}
