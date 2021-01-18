import React from "react"
import "./Button_main.sass"

const Button = (props) => {
    return (
        <div className='buttonsDiv'>
            <div>
                <input type="submit"
                       value="Submit"
                />
            </div>
        </div>
    )
};

export default Button;