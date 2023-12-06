// const initTasks = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

const initTasks = [];

export const tasksReducer = (state = initTasks, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      const addedTask = [...state, action.payload];
      return addedTask;

    case 'tasks/deleteTask':
      const deletedTask = state.filter(task => task.id !== action.payload);
      return deletedTask;

    case 'tasks/toggleCompleted':
      const toggledTask = state.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
      return toggledTask;

    default:
      return state;
  }
};

const initFilters = {
  status: 'all',
};

export const filtersReducer = (state = initFilters, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
