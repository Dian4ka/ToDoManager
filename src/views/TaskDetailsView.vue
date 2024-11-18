<template>
  <div v-if="task" class="p-4 bg-white shadow rounded">
    <h1 class="mb-3">{{ task.title }}</h1>
    <p class="mb-3">{{ task.description }}</p>
    <p class="fw-bold">Статус: {{ task.completed ? "Виконано" : "Активне" }}</p>
    <button class="btn btn-secondary" @click="goBack">Назад</button>
  </div>
  <div v-else>
    <p class="text-danger">Завдання не знайдено.</p>
    <button class="btn btn-secondary" @click="goBack">Назад</button>
  </div>
</template>

<script>
import { useTasksStore } from "@/store/task";

export default {
  props: ["id"],
  setup(props) {
    const store = useTasksStore();
    const task = store.tasks.find((t) => t.id === props.id);

    const goBack = () => {
      window.history.back();
    };

    return { task, goBack };
  },
};
</script>
