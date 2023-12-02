import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'
import Title from './components/Title'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [teams, setTeams] = useState([])
  const [members, setMember] = useState([])

  const submittingMember = (member) => {
    member = {...member, id:uuidv4(), favorite: false}
    setMember([...members, member])
  }

  const submittingTeam = (newTeam) => {
    newTeam = {...newTeam, id:uuidv4()}
    setTeams([...teams, newTeam])
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

  function favoriteMember(id) {
    setMember(
      members.map(member => {
        if(member.id === id)
          member.favorite = !member.favorite;
          return member      
      })
    )
  }

  return (
    <div className="App">
      <Banner/>
      <Form 
        teams={teams.map(team => team.name)} 
        onSubmittingCard={member => submittingMember(member)}
        onSubmittingTeam={newTeam => submittingTeam(newTeam)}
      />
      <Title/>
      {teams.map(team => 
        <Team 
          key={team.id}
          onChanging={changingColor}
          members={members.filter(member => member.team === team.name)}
          id={team.id}
          name={team.name} 
          color={team.color} 
          onDeleting={deletingMember}
          onFavorite={favoriteMember}
        />
      )}
      <Footer/>
    </div>
  )
}

export default App