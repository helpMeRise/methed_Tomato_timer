import {activeTomato, timer} from '../index.js';
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

  taskTimerRun() {
    if (this.activeTask === null) {
      alert('Нет активной задачи');
      return;
    }
    timer.startTimer();
  }

  rename() {
    activeTomato.renderTomato();
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    activeTomato.renderTomato();
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
