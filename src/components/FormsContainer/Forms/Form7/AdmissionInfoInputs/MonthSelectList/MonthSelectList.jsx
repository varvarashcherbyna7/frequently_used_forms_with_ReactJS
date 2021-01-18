import React from "react"
import "./MonthSelectList_main.sass"
import arrow from "./../../img/arrow.png"

class MothSelectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: '',
            displayMenu: false
        }
    }

    onChange = (e) => {
        const {items} = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v))
        }
        this.setState(() => ({suggestions, text: value}));
        this.props.onChange(value)
    };

    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }));
        this.props.onChange(value)
    }

    renderSuggestions() {
        const {suggestions} = this.state;
        if (suggestions.length === 0) {
            return null
        }

        return (
            <ul className="selectListForm7">
                {suggestions.map((item) => <li value={item} onClick={() => {
                    this.suggestionSelected(item)
                }}> {item} </li>)}
            </ul>
        );
    };

    showDropdownMenu = (event) => {
        event.preventDefault();
        this.setState({displayMenu: true}, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    };

    hideDropdownMenu = () => {
        this.setState({displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    };

    render() {
        const {text} = this.state;
        if (this.props.isSubmitting === true) {
            this.state.text = ""
        }
        return (
            <div className="selectListDivForm7">
                <div className="inputDivForm7">
                    <input type="text"
                           autoComplete={"off"}
                           placeholder="Month:"
                           value={text}
                           onChange={this.onChange}
                           name={this.props.name}
                           onBlur={this.props.handleBlur}
                           className={this.props.errors.month && this.props.touched.month
                               ? "errorsSelectListForm7" : null}
                    />
                    <img src={arrow} alt="arrow" onClick={this.showDropdownMenu}/>
                </div>
                {this.renderSuggestions()}
                {this.state.displayMenu && <ul className="selectListForm7">
                    {this.props.items.map((item) => <li value={item} onClick={() => {
                        this.suggestionSelected(item)
                    }}> {item} </li>)}
                </ul>}

                {this.props.errors.month && this.props.touched.month && (
                    <div className="inputFeedbackSelectListForm7">{this.props.errors.month}</div>
                )}
            </div>
        )
    }
}

export default MothSelectList;