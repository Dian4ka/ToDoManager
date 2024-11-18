<template>
  <div>
    <div class="btn-group d-flex mb-3" role="group">
      <button
        class="btn btn-outline-primary"
        :class="{ active: filter === 'all' }"
        @click="filter = 'all'"
      >
        Усі
      </button>
      <button
        class="btn btn-outline-primary"
        :class="{ active: filter === 'active' }"
        @click="filter = 'active'"
      >
        Активні
      </button>
      <button
        class="btn btn-outline-primary"
        :class="{ active: filter === 'completed' }"
        @click="filter = 'completed'"
      >
        Виконані
      </button>
    </div>

    <transition-group name="task" tag="ul" class="list-group">
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @delete="store.deleteTask"
        @toggle="store.toggleTaskStatus"
        class="list-group-item"
      />
    </transition-group>
  </div>
</template>

<script>
import { useTasksStore } from "@/store/task";
import TaskItem from "./TaskItem.vue";

export default {
  components: { TaskItem },
  data() {
    return {
      filter: "all",
    };
  },
  setup() {
    const store = useTasksStore();
    return { store };
  },
  computed: {
    filteredTasks() {
      if (this.filter === "active") {
        return this.store.tasks.filter((task) => !task.completed);
      }
      if (this.filter === "completed") {
        return this.store.tasks.filter((task) => task.completed);
      }
      return this.store.tasks;
    },
  },
};
</script>

<style>
.task-enter-active,
.task-leave-active {
  transition: all 0.5s;
}
.task-enter-from,
.task-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.btn-group .btn.active {
  background-color: #0d6efd;
  color: white;
}
</style>
