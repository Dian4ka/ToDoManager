<template>
  <li>
    <router-link
      :to="`/task/${task.id}`"
      class="text-decoration-none text-dark"
    >
      <span
        :class="{ 'text-decoration-line-through text-muted': task.completed }"
      >
        {{ task.title }}
      </span>
    </router-link>
    <div>
      <button
        class="btn btn-sm btn-success me-2"
        @click="$emit('toggle', task.id)"
      >
        ✓
      </button>
      <button class="btn btn-sm btn-danger" @click="$emit('delete', task.id)">
        🗑️
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
.completed {
  text-decoration: line-through;
}
a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}
</style>
