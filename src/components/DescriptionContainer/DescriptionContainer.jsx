import React from "react"
import './DescriptionContainer_main.sass'
import line_red from "../../img/line_red.png"
import ScrollUpButton from "react-scroll-up-button"

const DescriptionContainer = () => {
    return (
        <div className='descriptionContainer'>
            <h2>Description <a name="description"/></h2>
            <div><img src={line_red} alt="line"/></div>
            <div className='itemsDescriptionDiv'>
                <div className='itemDescription'>
                    <div className='iconCogsDiv'><i className="fab fa-react"/></div>
                    <div className='itemHeadDiv'>Made with React JS</div>
                    <div className='itemTextDiv'>
                        Each form is a separate component that is easy to use. In turn,
                        each of these components is divided into internal components that make up each form separately.
                        Each of the components can be changed separately and this will not affect the other components.
                    </div>
                </div>
                <div className='itemDescription'>
                    <div className='iconCogsDiv'><i className="fab fa-npm"/></div>
                    <div className='itemHeadDiv'>NPM packages</div>
                    <div className='itemTextDiv'>
                        Used npm package manager packages for the JavaScript programming language.
                        Packages in the file package.json are in CommonJS format and include JSON metadata files.
                        You can install all project dependencies with one command via the package.json file.
                        In the package.json file, each dependency can define a range of valid versions,
                        which allows developers to automatically update their packages while avoiding unwanted changes.
                    </div>
                </div>
                <div className='itemDescription'>
                    <div className='iconCogsDiv'><i className="fas fa-cogs"/></div>
                    <div className='itemHeadDiv'>Strongly tuned</div>
                    <div className='itemTextDiv'>
                        Contains a large number of custom items:
                        text input, file input, selection, tooltips,
                        text areas, radios, checkboxes, switches, and buttons.
                    </div>
                </div>
            </div>
            <div className='itemsDescriptionDiv'>
                <div className='itemDescription'>
                    <div className='iconCogsDiv'><i className="fab fa-wpforms"/></div>
                    <div className='itemHeadDiv'>Modal Forms</div>
                    <div className='itemTextDiv'>
                        You don't have enough space for the form?
                        It's not a problem! Use any form in responsive modal window.
                    </div>
                </div>
                <div className='itemDescription'>
                    <div className='iconCogsDiv'><i className="fab fa-sass"/></div>
                    <div className='itemHeadDiv'>HTML5 and SASS</div>
                    <div className='itemTextDiv'>
                        Take full advantage of modern web technologies. Make powerful forms with easy.
                    </div>
                </div>
                <div className='itemDescription'>
                    <div className='iconCogsDiv'><i className="fab fa-font-awesome-flag"/></div>
                    <div className='itemHeadDiv'>Font Awesome</div>
                    <div className='itemTextDiv'>
                        Complete set of Font Awesome vector icons created by Dave Gandy.
                    </div>
                </div>
            </div>
            <div className='itemsDescriptionDiv'>
                <div className='itemDescription'>
                    <div className='iconCogsDiv'><i className="fas fa-clipboard-check"/></div>
                    <div className='itemHeadDiv'>Data Validation</div>
                    <div className='itemTextDiv'>
                        All forms have a client-side check that ensures the security of your information.
                        Validation was performed using NPM packages Formic and Yup.
                    </div>
                </div>
                <div className='itemDescription'>
                    <div className='iconCogsDiv'><i className="fas fa-mobile-alt"/></div>
                    <div className='itemHeadDiv'>Grid System</div>
                    <div className='itemTextDiv'>
                        All forms have a fully responsive design that adapts perfectly for mobiles,
                        tablets and desktops.
                    </div>
                </div>
                <div className='itemDescription'>
                    <div className='iconCogsDiv'><i className="far fa-comment-dots"/></div>
                    <div className='itemHeadDiv'>Support</div>
                    <div className='itemTextDiv'>
                        To get support please send me an email through the contact form on my profile page.
                    </div>
                </div>
            </div>
            <ScrollUpButton
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{border: '1px solid rgb(84, 184, 227)', backgroundColor: 'rgb(84, 184, 227)', color: 'rgb(84, 184, 227)'}}
                ToggledStyle={{border: '1px solid #F38181', backgroundColor: '#F38181', color: '#F38181'}}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
            />
        </div>
    )
};
export default DescriptionContainer;