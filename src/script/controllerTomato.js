import {taskCreation} from './taskCreation';
import {tomato} from './tomato';
import {activeTomato, timer} from '../index';
export class ControllerTomato {
  constructor(tomato) {
    this.tomato = tomato;
  }

  addTask() {
    const form = document.querySelector('.task-form');
    const input = form['task-name'];
    let inputValue = '';
    input.addEventListener('input', e => {
      inputValue = input.value;
    });

    form.addEventListener('submit', e => {
      e.preventDefault();

      const tasksNames = tomato.tasks.map(item => item.name);
      if (tasksNames.includes(inputValue)) {
        alert('У задач должно быть уникальное имя');
        return;
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const importance = form.querySelector('.button-importance').classList[2];
      taskCreation(data['task-name'], 0, importance);
      form.reset();
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
        target.parentNode.children[1].classList
            .add('pomodoro-tasks__task-text_active');
      }
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

  importanceChange() {
    document.addEventListener('click', e => {
      const target = e.target;
      if (target.closest('.button-importance')){
        if (target.closest('.default')) {
          target.classList.remove('default');
          target.classList.add('so-so');
        } else if (target.closest('.so-so')) {
          target.classList.remove('so-so');
          target.classList.add('important');
        } else if (target.closest('.important')) {
          target.classList.remove('important');
          target.classList.add('default');
        }
      }
    });
  }

  openTaskModal() {
    document.addEventListener('click', e => {
      const target = e.target;

      if (target.closest('.pomodoro-tasks__task-button')) {
        target.parentNode.children[3].classList.toggle('burger-popup_active');
      }
    });
  }

  taskModal() {
    document.addEventListener('click', e => {
      const target = e.target;

      if (target.closest('.burger-popup__edit-button')) {
        let newName = prompt('Введите новое название');
        while (newName === null || newName === undefined || newName === '') {
          newName = prompt('Введите корректное имя');
        }
        const tasksNames = tomato.tasks.map(item => item.name);
        if (tasksNames.includes(newName)) {
          alert('У задач должно быть уникальное имя');
          return;
        }
        tomato.tasks.forEach((item, index) => {
          if (item.name === (target.parentNode.parentNode
              .children[1].textContent)) {
            item.nameChange(newName);
            tomato.rename();
          }
        });
      }

      const modal = document.querySelector('.modal-overlay');
      if (target.closest('.burger-popup__delete-button')) {
        modal.classList.add('modal-overlay_active');
        if (modal.classList.contains('modal-overlay_active')) {
          modal.addEventListener('click', e => {
            if (e.target.closest('.modal-delete__cancel-button') ||
              e.target.closest('.modal-delete__close-button') ||
              !e.target.closest('.modal-delete')) {
              modal.classList.remove('modal-overlay_active');
            }
            if (e.target.closest('.modal-delete__delete-button')) {
              const taskName = document.querySelector('.burger-popup_active')
                  .parentNode.children[1].textContent;
              tomato.removeTask(taskName);
              modal.classList.remove('modal-overlay_active');
            }
          });
        }
      }
    });
  }
}
