import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Button,Logo,Modal} from '..';

export default function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
        
    const authItems=[
    {name: "Sign Up", slug: "signup", active:!authStatus},    
    {name: "Login", slug: "login", active:!authStatus},    
    {name: "Logout", slug: "logout", active:authStatus},
    ]
    return (
    
    <header className="d-flex navbar bg-body-tertiary">
    <div className="">
    <Link to="/"><Logo children={"Ub clap"}/></Link>
    </div>
    <div className='d-flex justify-content-around' style={{width:"15rem"}}>
        <Link to={"/"}>
            <Button className={"btn-outline"} children="Home"/>
        </Link>
    {authItems.map((item)=>(
        item.active? <Modal key={item.slug} target={item.slug} children={item.name}/>:null
    ))}
    
    </div>
    
    </header>
    )
}
