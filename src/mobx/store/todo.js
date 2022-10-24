const { makeAutoObservable /* observable, action */ } = require('mobx');

class Todo {
  todos = [
    { id: 1, title: 'тест номер 1', completed: false },
    { id: 2, title: 'тест номер 2', completed: false },
    { id: 3, title: 'тест номер 3', completed: false },
  ];
  constructor() {
    makeAutoObservable(
      this
      //   {
      //     todos: observable,
      //     addTodo: action,
      //     removeTodo: action,
      //     completeTodo: action,
      //   },
      //   { deep: true }
    );
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  completeTodo(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
  fetchTodos() {
    console.log('fetchTodos: ');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => {
        console.log('json: ', json);
        console.log('todos: ', this.todos);
        this.todos = [...this.todos, json];
      });
  }
}

export default new Todo();
