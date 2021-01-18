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
                               // onChange={this.onValueChange}
                               // checked={value}
                               value={value}
                               name={this.props.name}
                               onChange={this.props.handleChange}
                               onBlur={this.props.handleBlur}
                               className={this.props.errors.radioBtn && this.props.touched.radioBtn ? "errorsRadioForm9" : null}
                        />
                        <label htmlFor={value + i}>{value}</label>
                    {this.props.errors.radioBtn && this.props.touched.radioBtn && (
                        <div className="inputFeedbackRadioForm9">{this.props.errors.radioBtn}</div>
                    )}
                    </div>
                )}
            </div>
        )
    }
}

export default RadioInput;