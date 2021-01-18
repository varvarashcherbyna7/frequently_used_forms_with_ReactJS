import React from "react"
import "./CountryInput_main.sass"

class CountryInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: '',
            placeholderText: 'Country'
        };
    }

    onTextChange = (e) => {
        const {items} = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v))
        }
        this.setState(() => ({suggestions, text: value}));
    };

    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }));
    }

    renderSuggestions() {
        const {suggestions} = this.state;
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul className="selectListForm7">
                {suggestions.map((item) =>
                    <li key={item}
                        style={{fontWeight: 'bold'}}
                        onChange={this.props.onChange}
                        onClick={() => {
                        this.suggestionSelected(item)
                    }}> {item} </li>)}
            </ul>
        );
    };

    render() {
        const {text, placeholderText} = this.state;
        return (
            <div className="countryListForm7">
                <input type="text"
                       autoComplete="off"
                       placeholder={placeholderText}
                       value={text}
                       onChange={this.onTextChange}
                       name={this.props.name}
                />
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default CountryInput;