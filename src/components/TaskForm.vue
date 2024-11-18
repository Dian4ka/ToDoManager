<template>
  <form @submit.prevent="submitTask" class="p-3 border rounded shadow-sm">
    <div class="mb-3">
      <label for="task-title" class="form-label">Назва завдання</label>
      <input
        id="task-title"
        v-model="title"
        type="text"
        class="form-control"
        placeholder="Введіть назву завдання"
        :class="{ 'is-invalid': errors.title }"
      />
      <div v-if="errors.title" class="invalid-feedback">
        {{ errors.title }}
      </div>
    </div>

    <div class="mb-3">
      <label for="task-description" class="form-label">Опис завдання</label>
      <textarea
        id="task-description"
        v-model="description"
        class="form-control"
        placeholder="Додайте опис завдання"
        rows="3"
        :class="{ 'is-invalid': errors.description }"
      ></textarea>
      <div v-if="errors.description" class="invalid-feedback">
        {{ errors.description }}
      </div>
    </div>

    <button type="submit" class="btn btn-primary w-100">Додати завдання</button>
  </form>
</template>

<script>
import { useTasksStore } from "@/store/task";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      title: "",
      description: "",
      errors: {},
    };
  },
  setup() {
    const store = useTasksStore();
    return { store };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.title.trim()) {
        this.errors.title = "Назва завдання обов'язкова.";
      } else if (this.title.length < 3) {
        this.errors.title = "Назва має бути не менше 3 символів.";
      }

      if (!this.description.trim()) {
        this.errors.description = "Опис завдання обов'язковий.";
      } else if (this.description.length < 5) {
        this.errors.description = "Опис має бути не менше 5 символів.";
      }

      return Object.keys(this.errors).length === 0;
    },
    submitTask() {
      if (this.validateForm()) {
        this.store.addTask({
          id: uuidv4(),
          title: this.title.trim(),
          description: this.description.trim(),
          completed: false,
        });

        this.title = "";
        this.description = "";
        this.errors = {};
      }
    },
  },
};
</script>

<style>
.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875rem;
}
</style>
