import React from "react"
import "./MonthInput_main.sass"

class MonthInput extends React.Component {
    render() {
        return (
            <div className="selectListDivForm9">
                    <select  name={this.props.name}>
                        <option label="Month:" selected disabled/>
                        {this.props.items.map((item, i) =>
                            <>
                                <option
                                    key={i}
                                    value={item}
                                    label={item}
                                />
                            </>
                        )}
                    </select>
                    <i className="arrowForm9"/>
            </div>
        )
    }
}

export default MonthInput;