import React from "react"
import "./MonthInput_main.sass"

class MonthInput extends React.Component {
    render() {
        return (
            <div className="selectListDivForm9">
                    <select  name={this.props.name}
                             value={this.props.value}
                             onChange={this.props.handleChange}
                             onBlur={this.props.handleBlur}>
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
                {this.props.errors.month && this.props.touched.month && (
                    <div className="inputFeedbackSelectListForm9">{this.props.errors.month}</div>
                )}
                    <i className="arrowForm9"/>
            </div>
        )
    }
}

export default MonthInput;