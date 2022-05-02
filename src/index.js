import './scss/index.scss';
import {Task} from './script/task';
import {taskCreation} from './script/taskCreation';
import {timer} from './script/tomato';
import {RenderTomato} from './script/renderTomato';


// taskCreation('задача раз', 1, 'so-so');
// taskCreation('задача два', 2, 'important');
// taskCreation('задача три', 3, 'default');
// timer.toActiveTask(timer.tasks[1].id);

const active = new RenderTomato('.main__container', timer);

active.init();

const form = document.querySelector('.task-form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  taskCreation(data['task-name'], timer.tasks.length + 1, 'so-so');
  active.renderTomato();
});
