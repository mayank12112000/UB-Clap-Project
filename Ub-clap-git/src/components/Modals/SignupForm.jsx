import React from 'react'
import authService from "../../appwrite/auth"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Button, Input } from ".."

export default function SignupForm({ formType }) {

  const { register, handleSubmit } = useForm()

  const dispatch = useDispatch()
  const onsubmit = async (data) => {
    console.log(data)
    try {
      const userSession = await authService.createAccount(data)
      if (userSession) {
        console.log("user & session created, user Session::", userSession)
        const userData = await authService.getCurrentUser()
        console.log("user data after user session creation::", userData)
        if (userData) useDispatch(login(userData))
      }
    } catch (error) {
      console.log("error while getting current user::", error)
    }
  }
  return (

    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{formType}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit(onsubmit)}>
            <Input {...register("name", { required: true })} placeholder={"enter your full name"} label={"Full Name: "} />
            <Input {...register("email", { required: true })} type='email' placeholder={"enter your email"} label={"Email:"} />
            <Input {...register("password", { required: true })} type='password' placeholder={"enter password"} label={"Password: "} />
            <div className="modal-footer">
              <Button style={{ width: "100%" }} type="submit" className="btn-primary" children={formType} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}