import React from "react"
import "./RadioInput_main.sass"

class RadioInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ['Visa', 'MasterCard', 'PayPal'],
            paySystem: ''
        }
    }
    onValueChange = (e) => {
        const value = e.target.value;
        this.setState({paySystem: value});
    };
    render() {
        return (
            <div className="radioInputsContainerForm7">

                {this.state.values.map((value, i) =>
                   ( <div className="radioInputDivForm7">
                        <input type="radio"
                               id={value + i}
                               name={this.props.name}
                               onChange={this.onValueChange}
                               value={value}
                        />
                        <label htmlFor={value + i}>{value}</label>
                    </div>)
                )}
            </div>
        )
    }
}
export default RadioInput;