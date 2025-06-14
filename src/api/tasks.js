let tasks = []; 

export const getTasks = () => Promise.resolve(tasks);

export const getTaskById = (id) => Promise.resolve(tasks.find(t => t.id === id));

export const addTask = (task) => {
  const newTask = { ...task, id: Date.now().toString() };
  tasks.push(newTask);
  return Promise.resolve(newTask);
};

export const updateTask = (id, updatedTask) => {
  tasks = tasks.map(t => (t.id === id ? { ...updatedTask, id } : t));
  return Promise.resolve();
};
