<script setup>
import Progress from "./Progress.vue";
</script>


<template>
  <div class="container">
    <TransitionGroup name="slide">
      <div
        v-for="task in tasks"
        @click="claimTask(task)"
        class="task"
        :class="{ 'completed-task': task.completed }"
        :key="task.id"
      >
        <p>
          {{ task.text }}
        </p>
        <Progress
          :barColor="task.completed ? 'var(--hl-color)' : null"
          :value="task.progress.value"
          :text="task.progress.text"
          max="1"
        ></Progress>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
progress {
  width: 100%;
}
.container {
  text-align: center;
}
.task {
  width: 100%;
  border: 1px solid var(--shadow-color);
  background-color: var(--hl-color);
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
}
.completed-task {
  background-color: var(--bg-color);
  cursor: pointer;
}
</style>

<script>
import { Task } from "../assets/js/Task.js";
import { useStore } from "../store/store.js";
export default {
  methods: {
    claimTask(task) {
      if (!task.completed) return;
      task.claim();
    },
  },
  computed: {
    tasks() {
      const { currentTasks } = useStore();
      return currentTasks
        .filter((index) => index !== -1)
        .map((index) => {
          return Task.TASKS[index];
        });
    },
  },
};
</script>