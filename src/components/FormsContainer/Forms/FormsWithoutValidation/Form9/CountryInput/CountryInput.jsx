import React from "react"
import "./CountryInput_main.sass"

class CountryInput extends React.Component {
    render() {
        return (
            <div className="countrySelectListForm9">
                <select name={this.props.name}>
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
                <i className="arrowForm9"/>
            </div>
        )
    }
}

export default CountryInput;