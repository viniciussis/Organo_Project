import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'
import Title from './components/Title'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name:'Team A',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name:'Team B',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name:'Team C',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name:'Team D',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name:'Team E',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name:'Team F',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Team G',
      color: '#FF8A29'
    }
  ])
  
  const [members, setMember] = useState([])

  const submittingMember = (member) => {
    member = {...member, id:uuidv4()}
    setMember([...members, member])
  }

  function changingColor(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
      return team
    }))
  }

  function deletingMember(id) {
    setMember(
      members.filter(member => member.id !== id)
    )
  }

  return (
    <div className="App">
      <Banner/>
      <Form 
        teams={teams.map(team => team.name)} 
        onSubmitting={member => submittingMember(member)}
      />
      <Title/>
      {teams.map(team => 
        <Team 
          onChanging={changingColor}
          members={members.filter(member => member.team === team.name)} 
          key={team.id}
          id={team.id}
          name={team.name} 
          color={team.color} 
          onDeleting={deletingMember}
        />
      )}
      <Footer/>
    </div>
  )
}

export default App