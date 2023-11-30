import './Team.css'
import Card from '../Card'
import hexToRgba from 'hex-to-rgba'

const Team = (props) => {
  return (    
    (props.members.length > 0) &&
    <section className='team' style={{backgroundColor: hexToRgba(props.color, 0.5)}}>
      <input type="color" value={props.color} onChange={event => props.onChanging(event.target.value, props.id)}/>
      <h3 style={{borderColor: props.color}}>{props.name}</h3>
      <div className='members'>
        {props.members.map(member => 
          <Card 
            onDeleting={props.onDeleting} 
            key={member.id}
            id={member.id}
            name={member.name} 
            role={member.role} 
            img={member.img} 
            color={props.color}
          />
        )}
      </div>
    </section>
  )
}

export default Team