import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-exercicio',
  standalone: true,
  imports: [RouterOutlet, FormsModule, DialogModule, CommonModule],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.scss'
})

export class ExerciciosComponent implements OnInit {

  visible: boolean = false;
  exerciseObj: Exercise = new Exercise();
  exerciseList: Exercise[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem('angular17crud');
    if (localData != null) {
      this.exerciseList = JSON.parse(localData);
    }
  }

  showDialog() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
    this.exerciseObj = new Exercise();
  }

  onDelete(item: Exercise) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      const currentRecord = this.exerciseList.findIndex(m => m.id === item.id);
      this.exerciseList.splice(currentRecord, 1);
      localStorage.setItem('angular17crud', JSON.stringify(this.exerciseList));
    }
  }

  onEdit(item: Exercise) {
    this.exerciseObj = { ...item };
    this.showDialog();
  }

  updateExercise() {
    const index = this.exerciseList.findIndex(m => m.id === this.exerciseObj.id);
    if (index !== -1) {
      this.exerciseList[index] = { ...this.exerciseObj };
      localStorage.setItem('angular17crud', JSON.stringify(this.exerciseList));
      this.closeModal();
    }
  }

  saveExercise() {
    if (this.exerciseObj.id === 0) {
      this.exerciseObj.id = this.exerciseList.length + 1;
      this.exerciseList.push({ ...this.exerciseObj });
    }
    localStorage.setItem('angular17crud', JSON.stringify(this.exerciseList));
    this.closeModal();
  }

  getExerciseImage(exercise: string): string {
    switch (exercise) {
      case 'corrida':
        return '../assets/esportes/corrida-image.png';
      case 'yoga':
        return '../assets/esportes/yoga-image.png';
      case 'bicicleta':
        return '../assets/esportes/bicicleta-image.png';
      case 'esporte':
        return '../assets/esportes/esporte-image.png';
      case 'natacao':
        return '../assets/esportes/natacao-image.png';
      case 'musculacao':
        return '../assets/esportes/musculacao-image.png';
      default:
        return '';
    }
  }
}

export class Exercise {
  id: number;
  exercise: string; 
  date: string;
  distance: string;
  time: string;

  constructor() {
    this.id = 0;
    this.exercise = '';
    this.date = '';
    this.distance = '';
    this.time = '';
  }
}