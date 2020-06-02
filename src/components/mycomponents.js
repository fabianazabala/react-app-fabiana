import React, {Component} from 'react';

class MyComponents extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    {this.props.title}
                </a>
            </nav>


        )


    }


}
export default MyComponents;
