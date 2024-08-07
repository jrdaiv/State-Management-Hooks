import {useState, useEffect} from 'react'

const usePosts = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                if(!response.ok){
                    throw new Error('Failed to fetch posts')
                }
                const data = await response.json();
                setPosts(data)
            }catch(error){
                setError(error)
            }finally{
                setLoading(false)
            }
        }
        fetchPosts();
    }, [])


  return {posts, loading, error}
}
export default usePosts;