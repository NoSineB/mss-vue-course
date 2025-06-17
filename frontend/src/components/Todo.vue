<script setup>
 const {data, index} = defineProps(['data', 'index'])
</script>

<template>
  <li
      v-text="data.message"
      :class="{ completed : data.isCompleted }"
      @dblclick="$emit('task-completed', index)"
    ></li>
</template>

<style scoped>
.completed{
  text-decoration: line-through;;
}
</style>
