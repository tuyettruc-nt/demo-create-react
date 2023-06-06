// class component
//function component

import React from 'react';

class MyComponent extends React.Component {
    
    state = {
        name: 'Bamboo',
        address: 'Binh Thuan province',
        age: 21
    };

    handleClick(event) {
        console.log('>> click my by button')
        // console.log(" Random ", Math.floor(Math.random() * 100) + 1)     
        
        
        //merge State => react class
        this.setState({
            name: 'Tuyet Truc',
            age: Math.floor((Math.random() * 100) + 1)
        })

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }

    handleOnMouseOver(event){
        // console.log(event)
    }

    //JSX 
    render() {
        return(

            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick = {(event) => {this.handleClick(event)} }>Click me</button>
            </div>
            
        );
    }
}

export default MyComponent;