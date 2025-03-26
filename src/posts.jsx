import { use } from "react"
import Post from "./Post"

export default function Posts({ postPromise }) {
    const posts = use(postPromise)
    return (
        <div className="card">
            <h3>Posts : {posts.length} </h3>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}