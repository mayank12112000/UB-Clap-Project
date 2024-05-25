import React from 'react'
import {Button, SignupForm, LoginForm} from '..'
export default function Modal({children,target}) {
  return (
    <div>
      <Button children={children} type="button" className="btn btn-outline" data-bs-toggle="modal" data-bs-target={`#${target}`} data-bs-whatever="@mdo"/>
      <div className="modal fade" id={target} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {children === "Login" ? <LoginForm formType={children} /> : <SignupForm formType={children} />} </div>
    </div>
  )
}
