import React from 'react'

export default function TodoItem (props) {
  const { todo } = props

  return (
    <li className='TodoItem'>
      <label htmlFor={'todo-' + todo.id}>
        <input
          id={'todo-' + todo.id}
          type='checkbox'
          checked={todo.done}
          onChange={event => {
            todo.done = event.target.checked
          }}
        /> {todo.task}
      </label>
    </li>
  )
}
