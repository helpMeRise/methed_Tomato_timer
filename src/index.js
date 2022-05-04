import './scss/index.scss';
import {tomato} from './script/tomato';
import {RenderTomato} from './script/renderTomato';
import {ControllerTomato} from './script/controllerTomato';
import {Timer} from './script/timer';

export const activeTomato = new RenderTomato('.main__container', tomato);
activeTomato.init();
export const controller = new ControllerTomato(tomato);
export const timer = new Timer(tomato.taskTime,
    tomato.pauseTime, tomato.bigPauseTime);

controller.addTask();
controller.toActive();
controller.startTimer();
controller.importanceChange();
controller.openTaskModal();
controller.taskModal();


