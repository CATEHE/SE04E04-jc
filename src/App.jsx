import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import Layout from './layouts/Layout'
import AddEdit from './components/AddEdit'
import UserList from './components/UserList'
import Modal from './components/Modal'
import ImagenU from './components/ImagenU'

const baseUrl = 'https://users-crud-api-81io.onrender.com/api/v1'

function App() {
  const [users, setUsers, loading] = useFetch()
  const [isOpen, setIsOpen] = useState(false)
  const [currentChild, setCurrentChild] = useState(null)

  useEffect(()=>{
    readUsers()
  }, [])

  // crear Usuarios
   const createUser = (dataForm) => {
    setUsers({ 
      url: `${baseUrl}/users`, 
      method: 'POST',
      body: dataForm
    })
    setIsOpen(false)
   }

  // Leer usuarios
  const readUsers = () => {
    setUsers( { url: `${baseUrl}/users` })
  }

  // Actualizar Usuarios
  const updateUser = (dataForm, userId) => {
    setUsers({ 
      url: `${baseUrl}/users/${userId}`, 
      method: 'PATCH',
      body: dataForm
    })
    setIsOpen(false)
  }

  const deleteUser = (userId) => {
    setUsers({ 
      url: `${baseUrl}/users/${userId}`, 
      method: 'DELETE'

    })
  }


  // Crear un usuario
  const openAdd = () => {
    setIsOpen(true)
    setCurrentChild(<AddEdit onSave={createUser} />)
  } 

  const openEdit = (user) => {
    setIsOpen(true)
    setCurrentChild(<AddEdit user={user} onSave={updateUser}/>)
  }



  return (
    
    <Layout>
    <ImagenU />
     <div className='header'>
      <div className='header__container'>
        <h1 className='header__title'>Usuarios</h1>

          <button className='header__button' type='button' onClick={openAdd} >
            Agregar usuario
          </button>

      </div>    
     </div>


    <div className='container'>
      {loading ? (
          <h2>Cargando...</h2>
        ) : (
          <UserList 
            users={users} 
            openEdit={openEdit} 
            deleteUser={deleteUser}/>
        )}
    
    </div>

    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {currentChild}
    </Modal>

    </Layout>
  )
}

export default App
