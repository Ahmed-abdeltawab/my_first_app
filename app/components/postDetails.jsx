export default async function PostDetails({ postId }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await response.json();
  return (
    <div
      key={post.id}
      style={{
        padding: "5px 10px",
        borderRadius: "8px",
        marginBottom: "15px",
        backgroundColor: "#23ffff",
      }}
    >
      <h3>{post.title}</h3>
      <p style={{ color: "white" }}>{post.body}</p>
    </div>
  );
}
