import React from 'react'
import imUsers from '../../public/users.png'
import '../styles/imagenU.css'

function ImagenU() {
  return (
    <div className='container__imagen'>
      <img className='img__usuarios' src={imUsers} alt="Imagen de usuarios" />
    </div>
  )
}

export default ImagenU