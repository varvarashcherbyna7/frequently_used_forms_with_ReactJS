import React from "react"
import "./RadioInput_main.sass"

class RadioInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ['Visa', 'MasterCard', 'PayPal']
        }
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.props.onChange(value);
    };

    render() {
        const {values} = this.state;
        if (this.props.isSubmitting === true) {
            this.state.values = ""
        }
        return (
            <div className="radioInputsContainerForm7">
                <div className="radioInputDivForm7">
                    <input type="radio"
                           id="radioBtn_1"
                           name={this.props.name}
                           onChange={this.onValueChange}
                           value={values[0]}
                           onBlur={this.props.handleBlur}
                           className={this.props.errors.radioBtn && this.props.touched.radioBtn ? "errorsRadioForm7" : null}
                    />
                    <label htmlFor="radioBtn_1">Visa</label>
                </div>
                <div className="radioInputDivForm7">
                    <input type="radio"
                           id="radioBtn_2"
                           name={this.props.name}
                           onChange={this.onValueChange}
                           value={values[1]}
                           onBlur={this.props.handleBlur}
                           className={this.props.errors.radioBtn && this.props.touched.radioBtn ? "errorsRadioForm7" : null}
                    />
                    <label htmlFor="radioBtn_2">MasterCard</label>
                </div>
                <div className="radioInputDivForm7">
                    <input type="radio"
                           id="radioBtn_3"
                           name={this.props.name}
                           onChange={this.onValueChange}
                           value={values[2]}
                           onBlur={this.props.handleBlur}
                           className={this.props.errors.radioBtn && this.props.touched.radioBtn ? "errorsRadioForm7" : null}
                    />
                    <label htmlFor="radioBtn_3">PayPal</label>
                </div>
                {this.props.errors.radioBtn && this.props.touched.radioBtn && (
                    <div className="inputFeedbackRadioForm7">{this.props.errors.radioBtn}</div>
                )}
            </div>
        )
    }
}
export default RadioInput;