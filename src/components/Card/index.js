import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='upSide' style={{backgroundColor: props.primaryColor}}>
        <img src={props.img} alt={props.name}/>
      </div>
      <div className='downSide'>
        <h4 style={{color: props.primaryColor}}>{props.name}</h4>
        <h5>{props.role}</h5>
      </div>
    </div>
  )
}

export default Card