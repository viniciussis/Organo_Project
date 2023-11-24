import './Dropdown.css'

const Dropdown = (props) => {

  const changing = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <div className='dropdown'>
      <label htmlFor={props.label} >{props.label}</label>
      <select value={props.value} id={props.label} required={props.mandatory} onChange={changing}>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown