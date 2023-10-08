import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default function PostDetailsPage({ params }) {
  const postId = params.postId;
  const loadingJsx = <div>🕰️🕰️🕰️</div>;
  return (
    <div>
      <h2>Post Details🔽</h2>
      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
