import React from "react"
import "./CountryInput_main.sass"

class CountryInput extends React.Component {
    render() {
        return (
            <div className="countrySelectListForm9">
                <select name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                >
                    <option selected disabled value="" label="Select country:"/>
                    {this.props.items.map((item, i) =>
                        <>
                            <option
                                key={i}
                                value={item}
                                label={item}
                            />
                        </>
                        )
                    }
                </select>
                {this.props.errors.country && this.props.touched.country && (
                    <div className="inputFeedbackCountryForm9">{this.props.errors.country}</div>
                )}
                <i className="arrowForm9"/>
            </div>
        )
    }
}

export default CountryInput;