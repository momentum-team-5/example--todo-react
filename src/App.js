import React, { useState } from 'react'
import 'tachyons'
import './App.css'
import TodoItem from './components/TodoItem'

function App () {
  const [todos, setTodos] = useState([
    { id: 1, done: true, task: 'Take out the papers' },
    { id: 2, done: true, task: 'Take out the trash' },
    { id: 3, done: false, task: 'Get some spending cash' }
  ])
  const [showCompletedItems, setShowCompletedItems] = useState(true)

  function shouldShowTodoItem (todo) {
    return showCompletedItems || !todo.done
  }

  function updateTodoDone (id, done) {
    // Make a new array
    const newTodos = []
    // Loop through the array
    for (const todo of todos) {
      // if the todo.id === id then set done
      if (todo.id === id) {
        todo.done = done
      }
      // push the todo onto the new array
      newTodos.push(todo)
    }
    // setTodos to the new array
    setTodos(newTodos)
  }

  let showHideLabel = 'Show completed items'
  if (showCompletedItems) {
    showHideLabel = 'Hide completed items'
  }

  return (
    <div className='App mw8 pa2 center'>
      <h1>My todos</h1>

      <div>
        <span id='left'>
          {todos.filter(todo => !todo.done).length}
        </span> left{' '}
        <span id='done'>
          {todos.filter(todo => todo.done).length}
        </span> done
        {' '}
      </div>

      <div className='mb2 mt1'>
        <button onClick={() => setShowCompletedItems(!showCompletedItems)}>
          {showHideLabel}
        </button>
      </div>

      <ul className='list pl0' id='todos'>
        {todos.map(todo => (
          shouldShowTodoItem(todo) && (
            <li key={todo.id} className='TodoItem'>
              <label htmlFor={'todo-' + todo.id}>
                <input
                  id={'todo-' + todo.id}
                  type='checkbox'
                  checked={todo.done}
                  onChange={event => updateTodoDone(todo.id, event.target.checked)}
                /> {todo.task}
              </label>
            </li>
          )
        ))}
      </ul>
    </div>
  )
}

export default App
