import './scss/index.scss';
import {taskCreation} from './script/taskCreation';
import {timer} from './script/tomato';

const formTask = document.querySelector('.task-form');
formTask.addEventListener('submit', e => {
  e.preventDefault();

  taskCreation('normal');
  taskCreation('important');
  taskCreation('common');
  console.log(timer);
});

