<script setup>

import Header from "@/components/Header.vue"
import InputField from "@/components/InputField.vue"
import DisplayTodos from "@/components/DisplayTodos.vue";

import { useTodoStore } from "@/stores/todo";

const { fetchData } = useTodoStore();

fetchData()

</script>

<template>
  <Header />
  <InputField/>
  <DisplayTodos/>
</template>

<style scoped>
</style>
