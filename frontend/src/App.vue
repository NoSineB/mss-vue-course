<script setup>
import { ref, computed } from 'vue'
import Todo from '@/components/Todo.vue'
import Header from '@/components/Header.vue'

const showInput = ref(false)
const inputValue = ref('')

function showInputField(){
  showInput.value = !showInput.value
}

const buttonText = computed(function (){
  return showInput.value ? 'Hide' : 'Add'
})

const todos = ref([

])

function onClick(){
  todos.value = [{
    'message' : inputValue.value, isCompleted: false}, ...todos.value ]
  inputValue.value = ''
}

function todoCompleted(index){
  todos.value[index].isCompleted = !todos.value[index].isCompleted
}

</script>

<template>
  <Header />
  <button @click="showInputField" v-text="buttonText"></button>
  <span
     v-if="showInput"
    >
    <input
    v-model="inputValue"
    type="text"
    name=""
    id=""
    >
    <button @click="onClick">+</button>
  </span>
  <div>
    <ul>
      <Todo
        v-for="(todo, index) in todos"
        :data="todo"
        :index="index"
        @task-completed="todoCompleted"
      />
    </ul>

  </div>


</template>

<style scoped>
</style>
