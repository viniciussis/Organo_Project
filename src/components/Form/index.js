import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './Form.css'
import { useState } from 'react'

const Form = (props) => {

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [img, setImg] = useState('')
  const [team, setTeam] = useState('')

  const submitting = (event) => {
    event.preventDefault()
    props.onSubmitting({name, role, img, team})
    setImg('')
    setName('')
    setRole('')
    setTeam('')
  }

  return (
    <section className='form'>
      <form onSubmit = {submitting} >
        <h2>Preencha os dados para criar o card...</h2>
        <TextField value={name} mandatory={true} label='Nome' onChange={name => setName(name)}
          placeholder='Digite seu nome...'/>
        <TextField value={role} mandatory={true} label='Cargo' onChange={role => setRole(role)} 
          placeholder='Digite seu cargo...'/>
        <TextField value={img} label='Imagem' onChange={img => setImg(img)}
          placeholder='Informe o endereço da imagem...'/>
        <Dropdown value={team} mandatory={true} onChange={team => setTeam(team)} 
          label='Time' itens={props.teams}/>
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}

export default Form