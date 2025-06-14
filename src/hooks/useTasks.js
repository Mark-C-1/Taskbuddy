import { useEffect, useState } from 'react';
import { getTasks } from '../api/tasks';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTasks().then(data => {
      setTasks(data);
      setIsLoading(false);
    });
  }, []);

  return { tasks, isLoading };
};
