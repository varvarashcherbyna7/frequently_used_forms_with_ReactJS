import React from "react"
import "./HeadContainer_main.sass"
import SubmenuForms from "../SubmenuForms/SubmenuForms";

const HeadContainer = () => {
    return (
        <>
            <a name="about"/>
            <a name="top"/>

            <div className='headContainer'>
                <header className='header'>
                    <div><a href="#forms">Popular Forms</a></div>
                    <div className='headerMenu'>
                        <div className="itemHeaderMenu"><a href="#about">About</a></div>
                        <div className="itemHeaderMenu"><a href="#description">Description</a></div>
                        <div className="itemHeaderMenu"><SubmenuForms/></div>
                        {/*<div><a href="#fag">FAQ</a></div>*/}
                    </div>
                </header>
                <div className='description'>
                    <div className='containerTextLineHeader'>
                        <div className='headText'><a href="#forms">The most commonly used forms</a></div>
                        <div className='lineContainer'/>
                    </div>
                    <p className='descriptionTextHeader'>
                        This project contains frequently used forms
                        (login, registration, order, contacts, comments, order services, etc.)
                        Forms are made using the library
                        React JS and with required npm packages.
                        Forms are easy to use and also easily changeable to suit your own project needs.
                    </p>
                </div>
            </div>

        </>
    )
};
export default HeadContainer;