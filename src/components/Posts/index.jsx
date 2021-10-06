import './styles.css';

import { PostCard } from "../PostCard";

export const Posts =({posts}) => 
    (
        <div className="posts">
        {posts.map(post => (
          <PostCard 
            // id={post.title}
            // title={post.title}
            // body={post.body}
            post={post}
            key={post.id}
          />
        )   // parênteses indica que posso retornar mais de um elemento
        )}
      </div>

    )
