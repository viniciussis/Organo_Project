import './Field.css';

const Field = ({ type = 'text', label, onChange, placeholder, mandatory = false, value }) => {
  
  const changing = (event) => {
    onChange(event.target.value)
  }
  
  return (
    <div className={`field field-${type}`}>
      <label htmlFor={label}>{label}</label>
      <input className='field' 
        type={type} 
        value={value} 
        onChange={changing} 
        id={label} 
        required={mandatory} 
        placeholder={`${placeholder}`}/>
    </div>
  )
}

export default Field