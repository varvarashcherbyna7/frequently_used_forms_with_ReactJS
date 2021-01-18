import React from "react"
import "./SelectInputDepartment_main.sass"
import Select from 'react-select'

const departments = [
    {value: 'Engineering', label: 'Engineering'},
    {value: 'Technical', label: 'Technical'},
    {value: 'Sales and marketing', label: 'Sales and marketing'},
    {value: 'Other', label: 'Other'},
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        textAlign: 'left',
        color: state.isSelected ? 'rgb(212, 175, 55)' : 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgb(212, 175, 55)'
    }),
    input: (provided, state) => ({
        ...provided,
        border: "none",

    }),
    menu: (provided, state) => ({
        ...provided,
        border: state.isFocused ? '1px solid rgb(212, 175, 55)' : '1px solid rgba(0, 0, 0, 0.2)',

    }),
    control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? '0 solid rgba(0, 0, 0, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)',
        boxShadow: state.isFocused ? '0 0 5px rgb(212, 175, 55)' : '0',
        color: state.isSelected ? 'rgb(212, 175, 55)' : 'rgba(0, 0, 0, 0.2)',
    }),
};

class SelectInputDepartment extends React.Component {
    handleChangeSelectInput = selectedOption => {
        this.setState({selectedOption});
        this.props.onChange(selectedOption)
    };
    render() {
        return (
            <div className="selectInputDepartmentContainer">
                <Select
                    multi
                    dropdownPosition="auto"
                    onChange={this.handleChangeSelectInput}
                    options={departments}
                    value={this.props.value}
                    styles={customStyles}
                    placeholder='Select department:'
                    name={this.props.name}
                    onBlur={this.props.handleBlur}
                    className={this.props.errors.department && this.props.touched.department ? "errorsForm10" : null}
                />
                {this.props.errors.department && this.props.touched.department && (
                    <div className="inputFeedbackForm10">
                        {this.props.errors.department}
                    </div>
                )}
            </div>
        )
    }
}

export default SelectInputDepartment;