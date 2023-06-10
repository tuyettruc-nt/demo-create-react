import React from 'react'

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        //destructuring array/object
        const {listUsers} = this.props; //object
        //const listUsers = this.pros.listUsers
        //props => viết tắt properties
        console.log(listUsers);
        // console.table(listUsers)
        return(
            <div>
                <div>
                    <span onClick={() => {this.handleShowHide()}}>
                        {this.state.isShowListUser === true ? "Hide list users" : "Show list users"}
                        </span>
                </div>
               {this.state.isShowListUser &&  

            <div>
                {listUsers.map((user,index) => {

                return (
                <div key = {user.id} className={+user.age > 18 ? "blue" : "red  "}>
                    <div>My name's {user.name}</div>
                    <div>My age's {user.age}</div>
                    <hr />
                </div>
                )



                    // if (+user.age > 18) {
                    //     return (
                    //         <div key = {user.id} className="blue">
                    //             <div>My name's {user.name}</div>
                    //             <div>My age's {user.age}</div>
                    //             <hr />
                    //         </div>
                    //     )
                    // }else{
                    //     return (
                    //         <div key = {user.id} className="red">
                    //             <div>My name's {user.name}</div>
                    //             <div>My age's {user.age}</div>
                    //             <hr />
                    //         </div>
                    //     )
                    // }
                   
                })}
                {/* <div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr />
                <div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr />
                <div>My name's {name}</div>
                <div>My age's {age}</div> */}
            </div>
    }
            </div>
        )       
    }
}

export default DisplayInfor;