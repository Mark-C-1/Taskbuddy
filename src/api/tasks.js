let tasks = []; 

export const getTasks = () => Promise.resolve(tasks);

export const getTaskById = (id) =>
  Promise.resolve(tasks.find(t => t.id === id.toString()));

export const addTask = (task) => {
  const newTask = { ...task, id: Date.now().toString() };
  tasks.push(newTask);
  return Promise.resolve(newTask);
};

export const updateTask = (id, updatedTask) => {
  tasks = tasks.map(t =>
    t.id === id.toString() ? { ...updatedTask, id: id.toString() } : t
  );
  return Promise.resolve();
};

export const deleteTask = (id) => {
  tasks = tasks.filter(t => t.id !== id.toString()); 
  return Promise.resolve();
};
