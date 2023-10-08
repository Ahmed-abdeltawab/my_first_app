import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return (
    <div
      style={{ backgroundColor: "white", width: "70%", margin: "50px auto" }}
    >
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
          <div
            key={post.id}
            style={{
              padding: "5px 10px",
              borderRadius: "8px",
              marginBottom: "15px",
              backgroundColor: "#222",
            }}
          >
            <h4 style={{ color: "#939" }}>{post.title}</h4>
            <p style={{ color: "white" }}>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
