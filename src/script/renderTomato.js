export class RenderTomato {
  constructor(app, tomato) {
    this.app = app;
    this.tomato = tomato;
  }

  init() {
    this.activeTaskWrapper = document.createElement('div');
    this.activeTaskWrapper.classList.add('pomodoro-form', 'window');
    this.taskFormWrapper = document.createElement('div');
    this.taskFormWrapper.classList.add('pomodoro-form', 'window');
    this.wrap = document.createElement('div');

    this.tasksListWrap = document.createElement('div');
    this.tasksListWrap.className = 'pomodoro-tasks';
    this.tasksList = document.createElement('ul');
    this.tasksList.className = 'pomodoro-tasks__quest-tasks';

    this.renderTomato();
  }

  renderTomato() {
    this.activeTaskWrapper.innerHTML = '';
    const activeTitle = this.renderTitle();
    const activeWindow = this.renderWindow();

    this.activeTaskWrapper.append(activeTitle, activeWindow);
    if (!document.querySelector('.task-form')) {
      const taskForm = this.renderTaskForm();
      this.taskFormWrapper.append(taskForm);
    }
    this.wrap.append(this.activeTaskWrapper, this.taskFormWrapper);
    this.renderTasksList();
    this.tasksListWrap.append(this.tasksList);
    if (!document.querySelector('.pomodoro-tasks__quest-list')) {
      const instructions = this.renderInstruction();
      this.tasksListWrap.insertBefore(instructions[0], this.tasksList);
      this.tasksListWrap.insertBefore(instructions[1], this.tasksList);
    }
    this.tasksListWrap.append(this.tasksList);
    document.querySelector(this.app).append(this.wrap,
        this.tasksListWrap);
  }

  renderTitle() {
    const titleWrap = document.createElement('div');
    titleWrap.className = 'window__panel';
    if (!this.tomato.activeTask) {
      titleWrap.insertAdjacentHTML('afterbegin', `
        <p class="window__panel-title">Название задачи</p>
        <p class="window__panel-task-text">1</p>
    `);
    } else {
      titleWrap.insertAdjacentHTML('afterbegin', `
        <p class="window__panel-title">${this.tomato.activeTask.name}</p>
        <p class="window__panel-task-text">${this.tomato.activeTask.count}</p>
    `);
    }
    return titleWrap;
  }

  renderWindow() {
    const activeWindow = document.createElement('div');
    activeWindow.className = 'window__body';
    activeWindow.insertAdjacentHTML('afterbegin', `
      <p class="window__timer-text">00:00</p>
      <div class="window__buttons">
        <button class="button button-primary button-start">Старт</button>
        <button class="button button-secondary button-stop">Стоп</button>
      </div>
    `);
    return activeWindow;
  }

  renderTaskForm() {
    const taskForm = document.createElement('form');
    taskForm.className = 'task-form';
    taskForm.insertAdjacentHTML('afterbegin', `
      <input type="text" class="task-name input-primary"
        name="task-name" id="task-name" placeholder="название задачи" required>
      <button type="button" class="button button-importance default"
        aria-label="Указать важность"></button>
      <button type="submit" class="button button-primary task-form__add-button">
        Добавить</button>
    `);
    return taskForm;
  }

  renderInstruction() {
    const instructionTitle = document.createElement('p');
    instructionTitle.className = 'pomodoro-tasks__header-title';
    instructionTitle.textContent = 'Инструкция:';
    const instructions = document.createElement('ul');
    instructions.className = 'pomodoro-tasks__quest-list';
    instructions.insertAdjacentHTML('afterbegin', `
      <li class="pomodoro-tasks__list-item">
        Напишите название задачи чтобы её добавить
      </li>
      <li class="pomodoro-tasks__list-item">
        Чтобы задачу активировать, выберите её из списка
      </li>
      <li class="pomodoro-tasks__list-item">
        Запустите таймер
      </li>
      <li class="pomodoro-tasks__list-item">
        Работайте пока таймер не прозвонит
      </li>
      <li class="pomodoro-tasks__list-item">
        Сделайте короткий перерыв (5 минут)
      </li>
      <li class="pomodoro-tasks__list-item">-->
        Продолжайте работать, пока задача не будет выполнена.
      </li>
      <li class="pomodoro-tasks__list-item">
        Каждые 4 периода таймера делайте длинный перерыв (15-20 минут).
      </li>
    `);
    return [instructionTitle, instructions];
  }

  renderTasksList() {
    this.tasksList.innerHTML = '';
    const defaultList = [];
    const soSo = [];
    const important = [];
    this.tomato.tasks.forEach(item => {
      if (item.importance === 'default') defaultList.push(item);
      if (item.importance === 'important') important.push(item);
      if (item.importance === 'so-so') soSo.push(item);
    });
    const tasks = [...important, ...soSo, ...defaultList];
    tasks.forEach((item, index) => {
      const task = document.createElement('li');
      task.classList.add(`pomodoro-tasks__list-task`, `${item.importance}`);
      task.insertAdjacentHTML('afterbegin', `
      <span class="count-number">${item.count}</span>
      <button class="pomodoro-tasks__task-text">${item.name}</button>
      <button class="pomodoro-tasks__task-button"></button>
      <div class="burger-popup">
        <button class="popup-button burger-popup__edit-button">
          Редактировать</button>
        <button class="popup-button burger-popup__delete-button">
          Удалить</button>
      </div>
    `);
      if (this.tomato.activeTask !== null) {
        if (item.id === this.tomato.activeTask.id) {
          task.children[1].classList.add('pomodoro-tasks__task-text_active');
        }
      }
      this.tasksList.append(task);
    });
  }

  renderListModal() {

  }
}

