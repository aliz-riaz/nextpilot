import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: generateRandomId(),
        text: action.payload,
        completed: false,
      });
    },
    // addTodo: (state, action) => {
    //   const todo = {
    //     id: nanoid,
    //     text: action.payload,
    //   };
    //   state.todos.push(todo);
    // },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Helper function to generate a random ID
function generateRandomId(size = 21) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < size; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
