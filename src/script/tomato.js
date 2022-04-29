import {Task} from './task';

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
  }

  toActiveTask(id) {
    this.tasks.forEach(item => {
      if (item.id === id) {
        this.activeTask = item;
      }
    });
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

export const timer = new Tomato([]);
