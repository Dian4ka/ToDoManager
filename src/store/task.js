import { defineStore } from "pinia";
export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
      this.saveToLocalStorage();
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.saveToLocalStorage();
    },
    toggleTaskStatus(taskId) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) task.completed = !task.completed;
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
});
