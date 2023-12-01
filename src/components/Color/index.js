import './Color.css'

const Color = (props) => {

  const changing = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <div className='input-color'>
      <label htmlFor={props.label}>{props.label}</label>
      <input type='color' value={props.value} onChange={changing} id={props.label} required={props.mandatory}/>
    </div>
  )
}

export default Color