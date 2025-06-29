import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";

export const useTodoStore = defineStore('todo', () => {

  const toast = useToast()

  const incompletedTodos = ref([])
  const completedTodos = ref([])
  const inputFieldValue = ref('')

  async function fetchData() {
    try{
      const res = await axios.get("http://127.0.0.1:5000/todos")
      const data = await res.data
      incompletedTodos.value  = data["incompleted_todos"]
      completedTodos.value = data["completed_todos"]
    }
    catch(err){
      toast.error(err.message)
    }
  }

  async function addTodo() {
    try{
      const res = await axios.post("http://127.0.0.1:5000/todos", {
        "todo" : inputFieldValue.value
      })
      await toast.success(res.data["message"])
    }
    catch(err){
      toast.error(err.message)
    }
      await fetchData()
      inputFieldValue.value = ''
  }

  async function completeTodo(id){
      try{
        const res = await axios.post("http://127.0.0.1:5000/todos/complete", {
          'id': id
        })
        await toast.success(res.data["message"])
      }catch(err){
        toast.error(err.message)
      }
      await fetchData()
  }

  async function deleteTodo(id){
    try{

      const res = await axios.post("http://127.0.0.1:5000/todos/delete", {
        'id': id
      })
      await toast.success(res.data["message"])

    }catch(err){
      toast.error(err.message)
    }

      await fetchData()
  }

  return {
    incompletedTodos,
    completedTodos,
    inputFieldValue,
    fetchData,
    addTodo,
    completeTodo,
    deleteTodo
  }

})
