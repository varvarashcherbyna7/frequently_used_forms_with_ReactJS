import React from "react"
import "./RegistrationInputs_main.sass"

class PasswordInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeFlagPassword: true,
            typeFlagConfirmPassword: true,
        };
    }
    handleClickPassword = () => {
        this.setState((p) => {
            return {typeFlagPassword: !p.typeFlagPassword};
        })
    };
    handleClickConfirmPassword = () => {
        this.setState((p) => {
            return {typeFlagConfirmPassword: !p.typeFlagConfirmPassword};
        })
    };
    render() {
        return (
            <div>
                <div className="inputContainerForm3">
                    <i onClick={this.handleClickPassword}
                       className={this.state.typeFlagPassword ? "fas fa-lock" : "fas fa-unlock-alt"}
                    />
                    <input type={this.state.typeFlagPassword ? "password" : "text"}
                           autoComplete={"off"}
                           name="password"
                           placeholder="Password"
                           value=''
                    />
                </div>
                <div className="inputContainerForm3">
                    <i onClick={this.handleClickConfirmPassword}
                       className={this.state.typeFlagConfirmPassword ? "fas fa-lock" : "fas fa-unlock-alt"}
                    />
                    <input type={this.state.typeFlagConfirmPassword ? "password" : "text"}
                           autoComplete={"off"}
                           name='c_password'
                           placeholder="Confirm password"
                           value=''
                    />
                </div>
            </div>
        )
    }
}

export default PasswordInputs;