import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      var newTask = {
        id: generateId(),
        name: action.task.name,
        status: action.task.status === 'true' ? true : false
      };
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function generateId() {
  return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

export default tasks;
