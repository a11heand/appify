/** 
 * Filename: sophisticatedCode.js
 * 
 * Description: This code demonstrates a sophisticated and elaborate implementation of a task management system. 
 * It includes features such as creating, updating, and deleting tasks, assigning them to users, setting due dates, and more. 
 * The code is organized into multiple classes and follows best practices for code structure and readability.
 * 
 * Author: Your Name
 * Date: [Current Date]
 */

// User class to represent a user in the system
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Task class to represent a task in the system
class Task {
  constructor(id, title, description, dueDate, assigneeId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.assigneeId = assigneeId;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

// TaskManager class to manage tasks and users
class TaskManager {
  constructor() {
    this.users = [];
    this.tasks = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTaskById(id) {
    return this.tasks.find(task => task.id === id);
  }

  getUserById(id) {
    return this.users.find(user => user.id === id);
  }

  updateTask(id, updatedData) {
    const task = this.getTaskById(id);
    if (!task) {
      console.log('Task not found.');
      return;
    }

    Object.assign(task, updatedData);
  }

  deleteTask(id) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    } else {
      console.log('Task not found.');
    }
  }
}

// Example usage of the TaskManager class

// Create a new instance of TaskManager
const taskManager = new TaskManager();

// Create users
const user1 = new User(1, 'John Doe', 'john@example.com');
const user2 = new User(2, 'Jane Smith', 'jane@example.com');

// Add users to the task manager
taskManager.addUser(user1);
taskManager.addUser(user2);

// Create tasks
const task1 = new Task(1, 'Task 1', 'Description for Task 1', new Date(2022, 0, 1), 1);
const task2 = new Task(2, 'Task 2', 'Description for Task 2', new Date(2022, 0, 2), 2);

// Add tasks to the task manager
taskManager.addTask(task1);
taskManager.addTask(task2);

// Update task
taskManager.updateTask(1, { title: 'Updated Task 1', description: 'Updated description' });

// Delete task
taskManager.deleteTask(2);

console.log(taskManager.getTaskById(1));
console.log(taskManager.getUserById(1));
