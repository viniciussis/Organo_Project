import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './Form.css'

const Form = () => {

  const teams = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F']

  const onSave = () => {
    console.log('Card criado com sucesso!!')
  }

  return (
    <section className='form'>
      <form onSubmit={onSave()}>
        <h2>Preencha os dados para criar o card...</h2>
        <TextField mandatory={true} label='Nome' placeholder='Digite seu nome...'/>
        <TextField mandatory={true} label='Cargo' placeholder='Digite seu cargo...'/>
        <TextField label='Imagem' placeholder='Informe o endereço da imagem...'/>
        <Dropdown mandatory={true}  label='Time' itens={teams}/>
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}

export default Form