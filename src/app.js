//----------------------------------------------------------------------------------------------------------//

import Stepan from '/src/lib/stepan.js';

import {TodoList, TodoListHead, TodoListToggleAll} from './components/todoList/index.js';

import {Footer} from './components/footer/index.js';

//----------------------------------------------------------------------------------------------------------//

let todos = [
  {isDone: true, title: '(Done) Todo 1', id: 'todo1'},
  {isDone: false, title: 'Todo 2', id: 'todo2'}
];



class App extends Stepan.Component {

  constructor(parent, todos) {
    super(parent);
    this.parent = parent;
    this.todos = todos;

  }

//todos =  []
  render() {
    const rootElement = this.parent;
    const divContainer = Stepan.createElement('div', rootElement);

    // TodoListHead-----------------
    this.head = new TodoListHead(divContainer);
    this.head.render();

    // TodoListToggleAll-----------------
    const sectionMain = Stepan.createElement('section', divContainer, { class: 'main' });
    this.toggle = new TodoListToggleAll(sectionMain);
    this.toggle.render();

    // TodoList-----------------
    this.list = new TodoList(sectionMain);
    this.list.render(this.todos);

    // Footer-----------------
    this.foot = new Footer(divContainer);
    this.foot.render(this.todos);

    return rootElement
  }

  static toggle(event) {
    let id = event.originalTarget.id;
    console.log(app.todos);
    for (let el of app.todos) {
      if (el.id+'-cb' === id) {
        el.isDone = !(el.isDone);
      }
    }
    console.log(app.todos);
    app.list.render(app.todos);
    app.listenTgl();
  }

  listenTgl() {
    for (const el of this.todos) {
      const oneTodo = document.getElementById(el.id + '-cb');
      oneTodo.addEventListener('click',App.toggle);
    }
  }


}

//----------------------------------------------------------------------------------------------------------//

let app = new App(document.getElementById('todoapp'), todos);
app.render();
app.listenTgl();
//new App(document.getElementById('todoapp')).render([{isDone: true, title: 'Third'}])

//const newTodo = document.getElementById("newTodo");
//newTodo.addEventListener('input', app.addTodo(newTodo.value, todos))