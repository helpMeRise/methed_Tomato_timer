import './scss/index.scss';
import {Tomato} from './script/tomato';
import {Task} from './script/task';

const tomato = new Tomato([]);

const formTask = document.querySelector('.task-form');
formTask.addEventListener('submit', e => {
  e.preventDefault();

  const task = new Task(formTask['task-name'].value);
  tomato.addTask(task);
});

