import React from 'react'
import { IoGiftSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import '../styles/cards.css'

function UserCard({user, openEdit, deleteUser}) {
  return (
    <div className='card'>
      <h3 className='card__name'>{user?.first_name} {user?.last_name}</h3>
      <div className='card__info'>
        <div>
          <span className='card__label'>Correo</span>
          <MdEmail /> {user?.email}
        </div>
        <div>
          <span className='card__label'>Cumpleaños</span>
          <span className='card__data'>
            <IoGiftSharp className='icon--gift'/> {user?.birthday}
          </span>
        </div>
      </div>

      <div className='card__btns'>
        <button className='btn--delete' onClick={()=> deleteUser(user.id)}><FaTrashAlt /></button>
        <button className='btn--edit' onClick={()=> openEdit(user)}><MdEditSquare /></button>
      </div>

    </div>
  )
}

export default UserCard