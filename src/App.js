import './Stylesheets/App.css';
import React from 'react'

class App extends React.Component {

    renderPetals = () => {
        let flower = document.createElement("div")

        //
        // let i = 0;
        // while (i < 10) {
        //     let petal = document.createElement("div")
        //     petal.className = "petal"
        //     petal.id = String(i)
        //     flower.appendChild(petal)
        //     i++
        // }
        let petal = document.createElement("div")
        flower.appendChild(petal)
        return flower[0]


    }

    render() {
        return (
            <div className="App">
                {this.renderPetals()}
            </div>
        );
    }
}

export default App;
