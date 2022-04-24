import {Tomato} from './tomato';
export class Task {
  #name;
  #count;
  #id;
  constructor(name, count = 0) {
    this.#name = name;
    this.#count = count;
    this.#id = Math.floor(Math.random() * 10000);
  }

  countChange() {
    this.#count++;
  }

  nameChange(newName) {
    return this.#name = newName;
  }
  get name() {
    return this.#name;
  }
  get count() {
    return this.#count;
  }
  get id() {
    return this.#id;
  }
  set name(data) {
    console.log('Данные можно изменить только используя методы');
  }
  set count(data) {
    console.log('Данные можно изменить только используя методы');
  }
  set id(data) {
    console.log('Данные можно изменить только используя методы');
  }
}

// const item = new Task('Имя', 2);
