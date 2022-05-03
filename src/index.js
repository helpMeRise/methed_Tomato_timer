import './scss/index.scss';
import {tomato} from './script/tomato';
import {RenderTomato} from './script/renderTomato';
import {ControllerTomato} from './script/controllerTomato';


export const activeTomato = new RenderTomato('.main__container', tomato);
activeTomato.init();

const form = document.querySelector('.task-form');
export const controller = new ControllerTomato(tomato, form);

controller.addTask(form);
controller.toActive();
controller.startTimer();

