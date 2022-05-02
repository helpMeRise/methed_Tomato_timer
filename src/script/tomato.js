import {Task} from './task';
import {activeTomato} from '../index.js';
export class Tomato {
  #taskTime = 25;
  #pauseTime = 5;
  #bigPauseTime = 15;
  constructor(tasks = []) {
    if (Tomato.instance) {
      return Tomato.instance;
    }
    this.tasks = tasks;
    this.activeTask = null;
    Tomato.instance = this;
  }

  addTask(task) {
    this.tasks.push(task);
    activeTomato.renderTomato();
  }

  toActiveTask(id) {
    this.tasks.forEach(item => {
      if (item.id === id) {
        this.activeTask = item;
      }
    });
    activeTomato.renderTomato();
  }

  startTask() {
    // // taskTimerRun() // запустит таймер когда он будет
    // if (this.activeTask === null) {
    //   throw new Error('Нет активной задачи');
    //   //  if (!this.activeTask.count % 3) {
    //   //    startBigPauseTimer();
    //   //  } else {
    //   //   startPauseTimer();
    //   // }
    //   this.taskCount(this.activeTask.id);
    // }
  }

  taskCount(id) {
    this.tasks.forEach(item => {
      if (item.id === id) {
        item.count++;
      }
    });
  }
}

export const tomato = new Tomato([]);
