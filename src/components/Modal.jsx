import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import '../styles/modal.css'

function Modal( { isOpen, setIsOpen, children } ) {
  
  const modalRef = useRef()
 
  useEffect(() => {
    const modal = modalRef.current
    const modalClose = (e) => {
      if (modal && !modal.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', modalClose)
    return () => {
      document.removeEventListener('mousedown', modalClose)
    }
  },[])




  return (
    <div className={`modal ${isOpen ? 'modal--open' : ''}`}>
      <div className="modal--overlay"/>
      <div ref={modalRef} className="modal__container">
        {children}
      </div>
    </div>
  )
}

export default Modal