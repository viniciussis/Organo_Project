import './Card.css';
import { AiFillCloseCircle } from "react-icons/ai";

const Card = (props) => {
  return (
    <div className='card'>
      <AiFillCloseCircle 
        size={30} 
        className='delete' 
        onClick={() => props.onDeleting(props.id)}
      />
      <div className='upSide' style={{backgroundColor: props.color}}>
        <img src={props.img} alt={props.name}/>
      </div>
      <div className='downSide'>
        <h4 style={{color: props.color}}>{props.name}</h4>
        <h5>{props.role}</h5>
      </div>
    </div>
  )
}

export default Card