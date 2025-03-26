export default function Friend({ friend }) {
    // console.log(friend)
    const { name, email, username } = friend;
    return (
        <div className="card">
            <h4>Name : {name}</h4>
            <h5>Email : {email}</h5>
            <h5>User Name : {username}</h5>
        </div>
    )
}