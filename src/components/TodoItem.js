import React from 'react'

export default function TodoItem (props) {
  const { todo, handleClick } = props

  return (
    <li className='TodoItem'>
      <label htmlFor={'todo-' + todo.id}>
        <input
          id={'todo-' + todo.id}
          type='checkbox'
          checked={todo.done}
          onChange={handleClick}
        /> {todo.task}
      </label>
    </li>
  )
}
