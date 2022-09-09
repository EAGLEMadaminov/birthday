import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import Birthday from './birthday'
import Users from './data'
import './index.css'

function View() {
  const [users, setUsers] = useState(Users)
  return (
    <section className='head'>
      <h1>5 birthdays today</h1>
      <div className='table'>
        <Birthday users={users} />
      </div>

      <button className='btn' onClick={() => setUsers([])}>
        CLEAR ALL
      </button>
    </section>
  )
}
ReactDOM.render(<View />, document.getElementById('root'))
