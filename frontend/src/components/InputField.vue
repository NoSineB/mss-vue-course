<script setup>

import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";

const store = useTodoStore();

const { inputFieldValue } = storeToRefs(store)

const { addTodo } = store

</script>

<template>
    <div class="w-[650px] shadow-lg rounded-xl flex justify-between items-center bg-white/60 mb-20">
        <input id="todo" name="todo" type="text" placeholder="Add your todo" autocomplete="off"
              class=" p-4 rounded-xl focus-visible:outline-0 flex-1 bg-white/60" v-model="inputFieldValue">
        <button @click="addTodo" class="me-2 h-[30px] w-[30px] text-3xl bg-gray-100 flex flex-col justify-center items-center rounded-lg hover:border-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="stroke-2" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
        </button>
    </div>
</template>
