import React from 'react'
import './App.css'
import HeadContainer from "./components/Header/HeadContainer/HeadContainer"
import DescriptionContainer from "./components/DescriptionContainer/DescriptionContainer"
import FormsContainer from "./components/FormsContainer/FormsContainer"
import Footer from "./components/Footer/Footer"

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <HeadContainer/>
                <DescriptionContainer/>
                <FormsContainer/>
                <Footer/>
            </div>
        );
    }
}

export default App;