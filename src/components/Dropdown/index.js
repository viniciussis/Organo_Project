import './Dropdown.css'

const Dropdown = ({ value, mandatory, onChange, label, itens }) => {

  const changing = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className='dropdown'>
      <label htmlFor={label} >{label}</label>
      <select value={value} id={label} required={mandatory} onChange={changing}>
        <option disabled style={{display:'none'}} ></option>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown