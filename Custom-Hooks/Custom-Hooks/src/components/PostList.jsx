import React from 'react'
import { Container} from 'react-bootstrap'
import usePosts from '../hooks/usePosts'

const PostList = () => {
    const { posts, loading, error } = usePosts();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Posts</h1>
        {posts.map(post => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.userId}</p>
                <p>{post.body}</p>
            </div>
            ))}
        </div>
    </Container>
  )
}

export default PostList