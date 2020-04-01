// Will render
// <ul class="todo-list">
//   <li class="">
//     <div class="view">
//       <input class="toggle" type="checkbox">
//       <label>TODO 1</label>
//       <button class="destroy"></button>
//     </div>
//     <input class="edit" value="TODO 1">
//   </li>
//   <li class="">
//     <div class="view">
//       <input class="toggle" type="checkbox">
//       <label>TODO 2</label>
//       <button class="destroy"></button>
//     </div>
//     <input class="edit" value="TODO 2">
//   </li>
// </ul>

import Stepan from '/src/lib/stepan.js';

import { TodoItem } from '/src/components/todoItem/index.js';

export default class TodoList extends Stepan.Component {

  //constructor() {

  //}

  render(todos) { // render will always accept data to render

    let prev = document.getElementById('todolist');
    if (prev !== null) {
      prev.remove();
    }

    const rootElement = Stepan.createElement('ul', this.parent, { class: "todo-list", id:'todolist' })

    todos.forEach(todoObject => new TodoItem(rootElement).render(todoObject));

    return rootElement;
  }
}
