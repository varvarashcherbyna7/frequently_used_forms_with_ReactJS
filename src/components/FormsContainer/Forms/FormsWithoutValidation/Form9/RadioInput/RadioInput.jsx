import React from "react"
import "./RadioInput_main.sass"

class RadioInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ['Visa', 'MasterCard', 'PayPal', 'Check', 'Other']
        }
    }
    render() {
        
        return (
            <div className="radioInputsContainerForm9">
                {this.state.values.map((value, i) => <div className="radioInputDivForm9">
                        <input type="radio"
                               id={value + i}
                               value={value}
                               name={this.props.name}
                        />
                        <label htmlFor={value + i}>{value}</label>
                    </div>
                )}
            </div>
        )
    }
}

export default RadioInput;