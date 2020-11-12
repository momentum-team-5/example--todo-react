import React from 'react'
import 'tachyons'
import './App.css'

const todos = [
  { id: 1, done: true, task: 'Take out the papers' },
  { id: 2, done: true, task: 'Take out the trash' },
  { id: 3, done: false, task: 'Get some spending cash' }
]

function App () {
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
      </div>

      <ul className='list pl0' id='todos'>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input type='checkbox' checked={todo.done} /> {todo.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
