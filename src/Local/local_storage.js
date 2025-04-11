


// const todos = [];
// const stringFyTodos = "[]";

export const setToLocal = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  export const getFromLocal = () => {
    const todos = localStorage.getItem('todos');
    return todos === null ? [] : JSON.parse(todos);
  }
  
  
  export const clearLocal = () => {
    localStorage.clear();
  }