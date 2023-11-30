import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {

  const teams = [
    {
      name:'Team A',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name:'Team B',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name:'Team C',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name:'Team D',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name:'Team E',
      primaryColor: '#DB6EBF',
      secondaryColor:'#FAE9F5'
    },
    {
      name:'Team F',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name:'Team G',
      primaryColor: '#FF8A29',
      secondaryColor:'#FFEEDF'
    }
  ]
  
  const [members, setMember] = useState([])

  const submittingMember = (member) => {
    console.log(member)
    setMember([...members, member])
  }

  function deletingMember() {
    console.log('deleting member')
  }

  return (
    <div className="App">
      <Banner/>
      <Form 
        teams={teams.map(team => team.name)} 
        onSubmitting={member => submittingMember(member)}
      />
      {teams.map(team => 
        <Team 
          members={members.filter(member => member.team === team.name)} 
          key={team.name} 
          name={team.name} 
          primaryColor={team.primaryColor} 
          secondaryColor={team.secondaryColor}
          onDeleting={deletingMember}
        />
      )}
      <Footer/>
    </div>
  )
}

export default App
