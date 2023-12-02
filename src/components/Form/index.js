import Field from '../Field'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './Form.css'
import { useState } from 'react'

const Form = ({onSubmittingCard, onSubmittingTeam, teams}) => {

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [img, setImg] = useState('')
  const [team, setTeam] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamColor, setTeamColor] = useState('#FFFFFF')

  const submittingCard = (event) => {
    event.preventDefault()
    onSubmittingCard({name, role, img, team})
    setImg('')
    setName('')
    setRole('')
    setTeam('')
  }

  const submittingTeam = (event) => {
    event.preventDefault()
    onSubmittingTeam({name: teamName, color: teamColor})
    setTeamName('')
  }

  return (
    <div className='forms'>      
      <form onSubmit = {submittingCard} >
        <h2>Preencha os dados para criar o card...</h2>
        <Field type='text' value={name} mandatory label='Nome' onChange={name => setName(name)}
          placeholder='Digite seu nome...'/>
        <Field type='text' value={role} mandatory label='Cargo' onChange={role => setRole(role)} 
          placeholder='Digite seu cargo...'/>
        <Field type='text' value={img} label='Imagem' onChange={img => setImg(img)}
          placeholder='Informe o endereço da imagem...'/>
        <Dropdown value={team} mandatory onChange={team => setTeam(team)} 
          label='Time' itens={teams}/>
        <Button>Criar card</Button>
      </form>
      <form onSubmit={submittingTeam}>
        <h2>Preencha os dados para criar o time...</h2>
        <Field type='text' value={teamName} mandatory label='Nome do Time' onChange={teamName => setTeamName(teamName)} 
          placeholder='Digite o nome do time...'/>
        <Field type='color' value={teamColor} label='Cor do Time' onChange={teamColor => setTeamColor(teamColor)}/>  
        <Button>Criar time</Button>
      </form>
    </div>
  )
}

export default Form