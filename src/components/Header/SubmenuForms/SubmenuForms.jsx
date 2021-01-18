import React from "react"
import './SubmenuForms.sass'

const SubmenuForms = () => {
    return (
        <>
                        <div class="dropdown">
                            <a class="mainmenubtn">Forms</a>
                            <div class="dropdown-child">
                                <a href="#with_validation_modal">with validation and with modal</a>
                                <a href="#with_validation_without_modal">with validation and without modal</a>
                                {/*<a href="#without_validation_with_modal">without validation and with modal</a>*/}
                            </div>
                        </div>

        </>
    )
};
export default SubmenuForms;