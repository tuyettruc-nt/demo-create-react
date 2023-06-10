import React from 'react';

class UserInfor extends React.Component {
    
    state = {
        name: 'Bamboo',
        address: 'Binh Thuan province',
        age: 21
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <div>My name is {this.state.name} and I'm from {this.state.age}
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <label>Your name: </label>
                <input 
                value = {this.state.name}
                type="text"
                onChange={(event) => this.handleOnChangeInput(event)}
                />
                <br/>
                <label>Your age: </label>
                <input 
                value = {this.state.age}
                type="text"
                onChange={(event) => this.handleOnChangeAge(event)}
                />
                <br/>
                <button>Submit</button>
            </form>
            </div>
        )
    }
    
}

export default UserInfor;