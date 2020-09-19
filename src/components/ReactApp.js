import React from 'react'
import axios from 'axios'

export default class ReactApp extends React.Component{
    state = {
        posts: []
    }
    handleSubmit =(e) => {
        e.preventDefault()
        const lat = e.target.lat.value
        const long = e.target.long.value

        axios('http://localhost:3002/api/posts').then((res) => {
            console.log(res)
            this.setState({posts: res.data})
        })
           
    }
    render(){
        let posts = this.state.posts
        posts = posts.map((post) => {
            return(
                <li>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </li>
            )
        })
        return(
            <div>
                <div id="post-container">
                    <form id="search" onSubmit={this.handleSubmit} >
                        <label>Enter your latitude</label>
                        <input type="text" name="lat" placeholder="latitude"></input>
                        <label>Enter your longitude</label>
                        <input type="text" name="long" placeholder="longitude"></input>
                        <input type="submit" value="Find Ninjas"></input>

                    </form>
                    <ul>{posts}</ul>

                </div>
            </div>
        )
    }

}