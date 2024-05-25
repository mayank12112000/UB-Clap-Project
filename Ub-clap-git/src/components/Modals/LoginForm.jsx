import React, { useState } from 'react'
import { Button , Input} from '..';
export default function ({formType}) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const onChange = (e) => {
    const { type, value, name } = e.target;
    setFormData((preData) => {
      return { ...preData, [name]: value }
    })
  }
  const submitHanlder = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (

    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{formType}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form onSubmit={submitHanlder}>
            <Input name="email" value={formData.email} onChange={onChange} placeholder=
              {"enter your email"} type="email" label={"Email:"} />
            <Input name="password" value={formData.password} onChange={onChange}
              placeholder={"enter password"} type="password" label={"Password:"} />
            {/* extra props like name value onchange is passed because we have spread the ...props in the Input component for extra props */}
            <div className="modal-footer">
              <Button style={{ width: "100%" }} type="submit" className="btn-primary"
                children={formType} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
