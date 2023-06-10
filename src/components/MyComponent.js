// class component
//function component

import React from 'react';
import UserInfor from './UserInfo';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    
    state ={
        listUsers: [
            {id:1, name: "Bamboo", age: "21"},
            {id:2, name: "Elephant", age: "22"},
            {id:3, name: "Tiger", age: "16"},
            {id:4, name: "Bird", age: "35"}
        ]
    }

    //JSX 
    render() {
        //DRY: don't repeat yourself
        return(

            <div>
                <UserInfor/>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers}/>
                
                
            </div>
            
        );
    }
}

export default MyComponent;