import {CommonTask, NormalTask, ImportantTask} from './task';
import {timer} from './tomato';

class TaskCreationCommand {
  constructor(importance) {
    this.importance = importance;
  }

  execute() {
    throw new Error('Not implemented');
  }
}

class ToCommon extends TaskCreationCommand {
  execute() {
    const newTask = new CommonTask();
    timer.addTask(newTask);
  }
}

class ToNormal extends TaskCreationCommand {
  execute() {
    const newTask = new NormalTask();
    timer.addTask(newTask);
  }
}

class ToImportant extends TaskCreationCommand {
  execute() {
    const newTask = new ImportantTask();
    timer.addTask(newTask);
  }
}

export class TaskCreation {
  constructor() {
    this.commands = [];
  }

  operation(importance) {
    let Command;
    if (importance === 'common') {
      Command = ToCommon;
    } else if (importance === 'normal') {
      Command = ToNormal;
    } else {
      Command = ToImportant;
    }
    const command = new Command(importance);
    if (command.execute()) {
      this.commands.push(command);
    }
  }
}

export const taskCreation = importance => {
  const task = new TaskCreation();
  task.operation(importance);
};
