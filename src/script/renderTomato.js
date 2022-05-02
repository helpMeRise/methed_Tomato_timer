import {Tomato} from './tomato';
export class RenderTomato {
  constructor(app, timer) {
    this.app = app;
    this.timer = timer;
  }

  init() {
    this.activeTaskWrapper = document.createElement('div');
    this.activeTaskWrapper.classList.add('pomodoro-form', 'window');
    this.tasksListWrap = document.createElement('div');
    this.tasksListWrap.className = 'pomodoro-tasks';
    this.tasksList = document.createElement('ul');
    this.tasksList.className = 'pomodoro-tasks__quest-tasks';

    this.renderTomato();
  }

  renderTomato() {
    if (this.timer.activeTask) {
      const activeTitle = this.renderTitle();
      const activeWindow = this.renderWindow();
      this.activeTaskWrapper.append(activeTitle, activeWindow);
    }
    if (!document.querySelector('.task-form')) {
      const taskForm = this.renderTaskForm();
      this.activeTaskWrapper.append(taskForm);
    }
    // const tasksList = this.renderTasksList();
    // this.tasksList.append(tasksList);
    this.renderTasksList();
    this.tasksListWrap.append(this.tasksList);
    document.querySelector(this.app).append(this.activeTaskWrapper,
        this.tasksListWrap);
  }

  renderTitle() {
    const titleWrap = document.createElement('div');
    titleWrap.className = 'window__panel';
    titleWrap.insertAdjacentHTML('afterbegin', `
        <p class="window__panel-title">${this.timer.activeTask.name}</p>
        <p class="window__panel-task-text">${this.timer.activeTask.count}</p>
    `);
    return titleWrap;
  }

  renderWindow() {
    const activeWindow = document.createElement('div');
    activeWindow.className = 'window__body';
    activeWindow.insertAdjacentHTML('afterbegin', `
      <p class="window__timer-text">25:00</p>
      <div class="window__buttons">
        <button class="button button-primary">Старт</button>
        <button class="button button-secondary">Стоп</button>
      </div>
    `);
    return activeWindow;
  }

  renderTaskForm() {
    const taskForm = document.createElement('form');
    taskForm.className = 'task-form';
    taskForm.insertAdjacentHTML('afterbegin', `
      <input type="text" class="task-name input-primary"
        name="task-name" id="task-name" placeholder="название задачи">
      <button type="button" class="button button-importance default"
        aria-label="Указать важность"></button>
      <button type="submit" class="button button-primary task-form__add-button">
        Добавить</button>
    `);
    return taskForm;
  }

  renderTasksList() {
    this.tasksList.innerHTML = '';
    this.timer.tasks.forEach(item => {
      const task = document.createElement('li');
      task.classList.add(`pomodoro-tasks__list-task`, `${item.importance}`);
      task.insertAdjacentHTML('afterbegin', `
      <span class="count-number">${item.count}</span>
      <button class="pomodoro-tasks__task-text 
          pomodoro-tasks__task-text_active">${item.name}</button>
      <button class="pomodoro-tasks__task-button"></button>
      <div class="burger-popup">
        <button class="popup-button burger-popup__edit-button">
          Редактировать</button>
        <button class="popup-button burger-popup__delete-button">
          Удалить</button>
      </div>
    `);
      this.tasksList.append(task);
    });
  }
}
