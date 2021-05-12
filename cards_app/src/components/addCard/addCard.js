import React from 'react';
import axios from 'axios';

class AddCard extends React.Component
{
    //e.g to add a userName
    // state= {userName: ''};
    // handleSubmit = (event)=>{
    //     //event= the argument
    //     event.preventDefault();//prevent the default form submission behaviour
    //     console.log(this.state.userName);
    //     await axios.get('https://api/github.com/users/${this.state.userName}')
    // };
    // render()
    // {
    //     //ref -> used to get a reference to the input element
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <input type ="text" 
    //                     value={this.state.userName}
    //                     onChange={event=>this.setState({userName:event.target.value})}
    //                     placeholder="GitHub username" required/>
    //             <button>Save</button>
    //         </form>
    //     )
    // }

     //e.g to get a userName using axios library
    state= {userName: ''};
    handleSubmit = async (event)=>{
        event.preventDefault();
        const link='https://api.github.com/users/' + this.state.userName;
        const response = await 
             axios.get(link);
        this.props.onSubmit(response.data);
        this.setState({userName:''});
    };

    render()
    {
        //ref -> used to get a reference to the input element
        return (
            <form onSubmit={this.handleSubmit}>
                <input type ="text" 
                        value={this.state.userName}
                        onChange={event=>this.setState({userName:event.target.value})}
                        placeholder="GitHub username" required/>
                <button>Save</button>
            </form>
        )
    }
}

export default AddCard;