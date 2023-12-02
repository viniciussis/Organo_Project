import './Team.css'
import Card from '../Card'
import hexToRgba from 'hex-to-rgba'

const Team = ({ onChanging, members, id, name, color, onDeleting, onFavorite }) => {
  return (    
    (members.length > 0) &&
    <section className='team' style={{backgroundColor: hexToRgba(color, 0.5)}}>
      <input type="color" value={color} onChange={event => onChanging(event.target.value, id)}/>
      <h3 style={{borderColor: color}}>{name}</h3>
      <div className='members'>
        {members.map(member => 
          <Card 
            key={member.id}
            onDeleting={onDeleting} 
            onFavorite={onFavorite}
            id={member.id}
            name={member.name} 
            role={member.role} 
            img={member.img} 
            color={color}
          />
        )}
      </div>
    </section>
  )
}

export default Team