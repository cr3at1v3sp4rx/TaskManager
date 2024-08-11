import React, { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Checkbox } from "../components/ui/checkbox"

const TaskItem = ({ task, onToggle, onDelete }) => (
  <Card className="mb-2">
    <CardContent className="flex items-center justify-between p-3">
      <div className="flex items-center">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task.id)}
          className="mr-3"
        />
        <span className={task.completed ? 'line-through' : ''}>
          {task.text}
        </span>
      </div>
      <Button variant="ghost" size="icon" onClick={() => onDelete(task.id)} className="text-destructive hover:text-destructive/90">
        <Trash2 size={18} />
      </Button>
    </CardContent>
  </Card>
);

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto pt-10 px-6">
        <h1 className="text-2xl font-bold mb-6">Task Manager</h1>
        <div className="flex mb-4 space-x-2">
          <Input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow"
          />
          <Button onClick={addTask} className="bg-primary text-primary-foreground">
            <PlusCircle size={24} />
          </Button>
        </div>
        <div className="space-y-2">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;