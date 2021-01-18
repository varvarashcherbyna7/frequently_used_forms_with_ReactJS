import React from "react"
import "./Inputs_main.sass"

class InputPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeFlag: true
        };
    }
    handleClick = () => {
        this.setState((p) => {
            return {typeFlag: !p.typeFlag};
        })
    };
    render() {
        return (
            <div className="inputDivForm1">
                <div className="inputTextDivForm1">Password:</div>
                <div className="fasForm1" onClick={this.handleClick}>
                    <i className={this.state.typeFlag ? "fas fa-eye-slash icon-password" : "fas fa-eye icon-password"}/>
                </div>
                <div className="containerInputFieldForm1">
                    <input type={this.state.typeFlag ? "password" : "text"}
                           autoComplete={"off"}
                           placeholder=''
                           name="password"
                           value=''
                    />
                </div>
            </div>
        )
    };
}

export default InputPassword;