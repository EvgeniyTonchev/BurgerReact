import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostID: null
    }

    componentDidMount () {
        axios.get('/posts').then(response => {
            if(response.status === 200){
                const posts = response.data.slice(0, 4);
                console.log(posts);
                const updatedPosts = posts.map(post =>{
                    return {
                        ...post,
                        author: "Evgeniy"
                    }
                })
                this.setState({posts: updatedPosts});
            }
        });
    }

    openPostHandler (id) {
        this.setState({selectedPostID: id});
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post postClick={() => {this.openPostHandler(post.id)}} key={post.id} title={post.title} author={post.author}/>;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;