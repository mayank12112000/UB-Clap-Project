import React , {useId} from 'react'

const Input = React.forwardRef(function({label,type="text",className,placeholder,...props},ref) {
    const id = useId()
  return (
    <div className='mb-3'>
      <label htmlFor={id} className={`col-form-label ${className}`}> <b>{label}</b> </label>
      <input type={type} ref={ref} className='form-control' id={id} {...props} placeholder={placeholder}/>
    </div>
  )
})
export default Input;