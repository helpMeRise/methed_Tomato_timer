import {Task} from './task';
import {activeTomato} from '../index.js';
import {Timer} from './timer';
export class Tomato {
  #taskTime = 1;
  #pauseTime = 2;
  #bigPauseTime = 3;
  constructor(tasks = []) {
    if (Tomato.instance) {
      return Tomato.instance;
    }
    this.tasks = tasks;
    this.activeTask = null;
    Tomato.instance = this;
  }

  get taskTime() {
    return this.#taskTime;
  }

  get pauseTime() {
    return this.#pauseTime;
  }

  get bigPauseTime() {
    return this.#bigPauseTime;
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

  taskTimerRun() {
    if (this.activeTask === null) {
      alert('Нет активной задачи');
      return;
    }
    const timer = new Timer(this.#taskTime,
        this.#pauseTime, this.#bigPauseTime);
    timer.startTimer();
  }

  taskCount(id) {
    this.tasks.forEach(item => {
      if (item.id === id) {
        item.countChange();
      }
    });
  }
}

export const tomato = new Tomato([]);
