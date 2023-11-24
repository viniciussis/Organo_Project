import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'

function App() {

  const [members, setMember] = useState([])

  const submittingMember = (member) => {
    console.log(member)
    setMember([...members, member])
  }

  return (
    <div className="App">
      <Banner/>
      <Form onSubmitting={member => submittingMember(member)}/>
    </div>
  )
}

export default App
