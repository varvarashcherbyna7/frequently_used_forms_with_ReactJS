import React from "react"
import "./InputsRandomer_main.sass"
import RandomKey from "./Randomer/RandomKey"
import ArrowsImgForRandomKey from "./Randomer/ArrowsImgForRandomKey"

class Randomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    handleClick = () => {
        this.setState({loading: true});
        setTimeout(() => {
            let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
            let max_position = words.length - 1;
            let position;
            let result = "";
            for (let i = 0; i < 5; ++i) {
                position = Math.floor(Math.random() * max_position);
                result = result + words.substring(position, position + 1);
            }
            this.props.onChange(result);

            this.setState({loading: false});
        }, 1800)
    };

    render() {
        const {loading} = this.state;
        return (
            <div className="keyInputDiv">
                <RandomKey value={this.props.value} name={this.props.name} onChange={this.props.onChange}/>
                <ArrowsImgForRandomKey
                    type="button"
                    onClick={this.handleClick}
                    disabled={loading}
                    style={this.state.style}
                />
            </div>
        );
    }

}

export default Randomer;