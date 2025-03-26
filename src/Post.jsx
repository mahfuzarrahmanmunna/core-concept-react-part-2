export default function Post({ post }) {
    const { id, title, body } = post
    return (
        <div className="card">
            <h3>ID : {id}</h3>
            <h4>Title : {title}</h4>
            <p>Body <br /> {body}</p>
        </div>
    )
}