import React, { Component } from 'react';
import axios from '../../axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    componentDidUpdate(){
        if(this.props.id) {
            if(!this.state.post  || (this.state.post && this.state.post.id !== this.props.id)){
                axios.get("/posts/" + this.props.id).then(response => {
                    this.setState({post:response.data});
                }).catch(error =>{
                    console.log(error)
                });
            }
        }
    }

    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        let postPrint = this.state.post;
        if(this.props.id){
            post = <p style={{textAlign:'center'}}>Loading!</p>;
        }
        if(postPrint){
            post = (
                <div className="FullPost">
                    <h1>{postPrint.title}</h1>
                    <p>{postPrint.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;