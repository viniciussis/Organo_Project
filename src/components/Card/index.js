import './Card.css';
import { AiFillCloseCircle, AiFillHeart } from "react-icons/ai";

const Card = ({ onDeleting, member, id, onFavorite, name, role, img, color }) => {
  return (
    <div className='card'>
      <AiFillCloseCircle 
        className='delete' 
        size={30} 
        onClick={() => onDeleting(id)}
      />
      <div className='upSide' style={{backgroundColor: color}}>
        <img src={img} alt={name}/>
      </div>
      <div className='downSide'>
        <h4 style={{color: color}}>{name}</h4>
        <h5>{role}</h5>
        {member.favorite 
          ? <AiFillHeart
            className='favorite'
            size={30}
            onClick={() => onFavorite(id)}
            style={{color: 'red'}}/> 
          : <AiFillHeart
            className='favorite'
            size={30}
            onClick={() => onFavorite(id)}
            style={{color: 'black'}}/>
        }
      </div>
    </div>
  )
}

export default Card