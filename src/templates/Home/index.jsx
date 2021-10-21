import { useEffect, useState, useCallback } from 'react';

import './style.css';

import { Posts } from '../../components/Posts';
import { loadingPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');


  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ? 
  allPosts.filter(post => {
    return post.title.toLowerCase().includes(
      searchValue.toLowerCase()
    );
  })
  : posts;

    const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);

    console.log(page, postsPerPage, nextPage, nextPage + postsPerPage)
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value)

  }
  const loadPosts = useCallback(async(page, postsPerPage) => {
    const postsAndPhotos = await loadingPosts();

    setPosts(postsAndPhotos.slice(page,postsPerPage))
    setAllPosts(postsAndPhotos)
  },[])

  useEffect(() => {
    loadPosts(0, postsPerPage);
  },[loadPosts, postsPerPage]);

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && (
          <h1>Search value: {searchValue}</h1>
        )}
        <TextInput 
          inputValue={searchValue}
          actionFn={handleChange}
        />
      </div>
      {filteredPosts.length > 0 ? (
        <Posts posts={filteredPosts} />
      ) : (
        <p>Não existe posts</p>
      )}
      <div className="button-container">
        {!searchValue && (
          <Button 
            text="Load more posts"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />

        )}
      </div>
    </section>
  );
}
