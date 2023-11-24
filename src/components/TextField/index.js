import './TextField.css';

const TextField = (props) => {
  
  const changing = (event) => {
    props.onChange(event.target.value)
  }
  
  return (
    <div className='text-field'>
      <label htmlFor={props.label}>{props.label}</label>
      <input value={props.value} onChange={changing} id={props.label} required={props.mandatory} placeholder={`${props.placeholder}`}/>
    </div>
  )
}

export default TextField