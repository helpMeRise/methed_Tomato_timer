import {taskCreation} from './taskCreation';
import {tomato} from './tomato';

export class ControllerTomato {
  constructor(tomato, form) {
    this.tomato = tomato;
  }

  addTask(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      taskCreation(data['task-name'], 0, 'so-so');
    });
  }

  toActive() {
    const tasks = document.querySelector('.pomodoro-tasks__quest-tasks');
    tasks.addEventListener('click', e => {
      const target = e.target;
      if (target.closest('.pomodoro-tasks__task-text ')) {
        tomato.tasks.forEach((item, index) => {
          if (item.name === (target.parentNode.children[1].textContent)) {
            tomato.toActiveTask(item.id);
          }
        });
      }
      target.parentNode.children[1].classList
          .add('pomodoro-tasks__task-text_active');
      console.log(tomato);
    });
  }

  startTimer() {
    document.addEventListener('click', e => {
      const target = e.target;
      if (target.closest('.button-start')) {
        tomato.taskTimerRun();
      }
    });
  }
}
