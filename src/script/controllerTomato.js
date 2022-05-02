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
      taskCreation(data['task-name'], tomato.tasks.length + 1, 'so-so');
    });
  }

  toActive() {
    const tasks = document.querySelector('.pomodoro-tasks__quest-tasks');
    tasks.addEventListener('click', e => {
      const target = e.target;
      if (target.closest('.pomodoro-tasks__task-text ')) {
        tomato.tasks.forEach((item, index) => {
          if (index + 1 === +(target.parentNode.children[0].textContent)) {
            tomato.toActiveTask(item.id);
          }
        });
      }
      console.log(tomato);
    });
  }
}
