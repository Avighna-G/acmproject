import React,{useState} from "react";
import '../styles/navbar.css';
import {BiSolidMessageRoundedEdit} from 'react-icons/bi'
import {Link,NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
import ACMlogo from '../logo.png';
import {navItems} from '../jsonfiles/NavItems';
export default function NavBar(){
    
    
    let [mob,nmob]=useState('');
    let [cli,acli]=useState('fa fa-bars');
    const chClass=()=>{
    
        if(cli==='fa fa-bars'){
            acli('fa fa-times')
            nmob("#navbar active")
        }
        else{
            acli('fa fa-bars')
            nmob("#navbar")
        }

    }
    return(
        <>
        <nav className="navbar">
        <div className='logo'>
            <img className='logimg' src={ACMlogo}></img>
        </div>
        <div className="navlinks">
        <ul id="navbar" className={mob}>
        {navItems.map((item, index) => {
                if (item.title === "ContactUs") {
                     return (
                        <li key={item.id} className='navitcb' onClick={chClass}>
                            <button id="navbutton">
                                <HashLink to="/#ctus" className="button-content">
                                    <BiSolidMessageRoundedEdit size={28}/><span>ContactUs</span>
                                </HashLink>
                            </button>
                        </li>
                    );
                } else {
                return (
                        <li key={index} onClick={chClass}>
                            <NavLink activeClassName="active" to={item.path}>
                                {item.title}
                            </NavLink>
                        </li>
                        );
                }
                })}

            

        </ul>
        </div>
        {/*<div>
        <button id="navbutton" ><HashLink to="/#ctus"><BiSolidMessageRoundedEdit size={20}/><b>Contact Us</b></HashLink></button>
        </div>*/}
        <div id="mob" >
            <i className={cli} onClick={()=>(chClass())}> </i>
        </div>
        </nav>

        </>
    )
}
