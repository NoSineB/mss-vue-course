from flask import Flask, request
from peewee import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = SqliteDatabase('todos.db')

class Todo(Model):
   todo_id = AutoField()
   message = CharField()
   is_completed = BooleanField(default=False)

   class Meta:
      database = db


db.connect()

@app.route("/health")
def hello_world():
    return {
        "status": "up"
    }

@app.route("/todos", methods=['POST', 'GET'])
def get_all_todos():
    if request.method == 'POST':
      message = request.json["todo"]
      Todo(message=message).save()
      return {
          "message" : "Todo Added"
      }
    if request.method == 'GET':
       query = Todo.select()
       incomplete_todos = []
       completed_todos = []
       for todo in query:
          if todo.is_completed:
            todo_to_be_added = {
               "id" : todo.todo_id,
               "message" : todo.message
            }
            completed_todos.append(todo_to_be_added)
          else:
            todo_to_be_added = {
               "id" : todo.todo_id,
               "message" : todo.message
            }
            incomplete_todos.append(todo_to_be_added)
       return {
          "incompleted_todos" : incomplete_todos,
          "completed_todos" : completed_todos
       }

@app.route("/todos/complete", methods=['POST'])
def todo_completed():
   id=request.json["id"]
   todo = Todo.get_by_id(id)
   todo.is_completed = True
   todo.save()
   return {
      "message" : "Todo Completed"
   }


@app.route("/todos/delete", methods=['POST'])
def todo_delete():
    id=request.json["id"]
    todo = Todo.get_by_id(id)
    todo.delete_instance()
    return {
       "message" : "Todo Deleted"
    }

