import {SHOW_ALL} from '../constants/TodoFilters.js';
import {initialTodo} from '../todos/todos.js';

class AppController {
  constructor() {
    this.todos = [initialTodo];
    this.filter = SHOW_ALL;
  }
}

export const App = {
  templateUrl: 'src/app/containers/App.html',
  controller: AppController
};
