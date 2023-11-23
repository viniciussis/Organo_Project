import './Dropdown.css'

const Dropdown = (props) => {
  return (
    <div className='dropdown'>
      <label >{props.label}</label>
      <select required={props.mandatory} id="dropdown">
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown