import './Card.css';
import { AiFillCloseCircle, AiFillHeart   } from "react-icons/ai";

const Card = (props) => {
  return (
    <div className='card'>
      <AiFillCloseCircle 
        className='delete' 
        size={30} 
        onClick={() => props.onDeleting(props.id)}
      />
      <div className='upSide' style={{backgroundColor: props.color}}>
        <img src={props.img} alt={props.name}/>
      </div>
      <div className='downSide'>
        <h4 style={{color: props.color}}>{props.name}</h4>
        <h5>{props.role}</h5>
        <AiFillHeart 
          className='favorite' 
          size={30}
          onClick={() => props.onFavorite(props.id)}/>
      </div>
    </div>
  )
}

export default Card