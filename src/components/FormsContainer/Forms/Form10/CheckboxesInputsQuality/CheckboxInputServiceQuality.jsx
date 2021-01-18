import React from "react"
import "./CheckboxesInputsQuality_main.sass"

const items = [
    {type:"radio", id: "ServiceQuality-5", value: "5", htmlFor: "ServiceQuality-5", title: "Rating «5»"},
    {type:"radio", id: "ServiceQuality-4", value: "4", htmlFor: "ServiceQuality-4", title: "Rating «4»"},
    {type:"radio", id: "ServiceQuality-3", value: "3", htmlFor: "ServiceQuality-3", title: "Rating «3»"},
    {type:"radio", id: "ServiceQuality-2", value: "2", htmlFor: "ServiceQuality-2", title: "Rating «2»"},
    {type:"radio", id: "ServiceQuality-1", value: "1", htmlFor: "ServiceQuality-1", title: "Rating «1»"}
];

class CheckboxInputServiceQuality extends React.Component {
    handleChangeSelectInput = e => {
        const v = e.target.value;
        this.setState({v});
        this.props.onChange(v);
    };
    render() {
        return (
            <div className='containerInputQuality'>
                <div className='containerTextInputQuality'>Service quality</div>
                <div className="inputQualityForm10">
                    {items.map((item) => (
                        <>
                            <input type={item.type}
                                   id={item.id}
                                   value={'Rating ' + item.value}
                                   name={this.props.name}
                                   onChange={this.handleChangeSelectInput}
                                   onBlur={this.props.handleBlur}
                            />
                            <label htmlFor={item.htmlFor} title={item.title}/>
                        </>
                    ))}
                </div>
            </div>
        )
    }
}
export default CheckboxInputServiceQuality;