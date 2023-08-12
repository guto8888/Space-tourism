import "./style.css";
import logoImg from "../../assets/shared/logo.svg"

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = () => {
    const [btn, setBtn]:any = useState()
    const button = document.querySelector(".spanBurger")
    const lis = document.querySelectorAll(".liBtn")
    const ul = document.querySelector(".headerUl")
    const header = document.querySelector(".header")
    const headerImg = document.querySelector(".headerImg")

    useEffect(() => {
        setBtn(button)
        button?.addEventListener("click", () => {
            headerImg?.classList.toggle("showImg")
            header?.classList.toggle("showHeader")
            button?.classList.toggle("btnBurguer")
            ul?.classList.toggle("showUl")
            lis.forEach((item) => {
                item.classList.toggle("showLi")
            })
        })
    }, [button])

    return (
        <>
        <p className="reactHeader">Feito com ReactJS e Typescript</p>
        <div className="header">
            <img className="headerImg" src={logoImg} alt="logo"/>
            <hr className="headerHr" />
            <ul  className="headerUl">
                <li className="headerLi spanLi"><span className="spanBurger"></span></li>
                <li  className="headerLi liBtn">
                    <NavLink to="/" className="link">
                        <span  className="headerSpan">00</span>HOME
                    </NavLink>
                </li>
                <li  className="headerLi liBtn">
                    <NavLink to="/destination" className="link" >
                        <span  className="headerSpan">01</span>DESTINATION
                    </NavLink>
                </li>
                <li  className="headerLi liBtn">
                    <NavLink to="/crew" className="link">
                        <span  className="headerSpan">02</span>CREW
                    </NavLink>
                </li>
                <li  className="headerLi liBtn">
                    <NavLink to="/technology" className="link">
                        <span  className="headerSpan">03</span>TECHNOLOGY
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Menu;