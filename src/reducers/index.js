import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './taskEditing';
import filterTable from './filterTable';
import keyword from './keyword';

const rootReducer = combineReducers({
  tasks,// tasks: tasks
  isDisplayForm,
  taskEditing,
  filterTable,
  keyword
});

export default rootReducer;
