import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './taskEditing';

const rootReducer = combineReducers({
  tasks,// tasks: tasks
  isDisplayForm,
  taskEditing
});

export default rootReducer;
