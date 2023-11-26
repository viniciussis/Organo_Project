import './Team.css'
import Card from '../Card'

const Team = (props) => {
  return (
    (props.members.length > 0) &&
    <section className='team' style={{backgroundColor: props.secondaryColor}}>
      <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
      <div className='members'>
        {props.members.map(member => <Card key={member.name} name={member.name} role={member.role} img={member.img} primaryColor={props.primaryColor}/>)}
      </div>
    </section>
  )
}

export default Team