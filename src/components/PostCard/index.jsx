import './styles.css';

export const PostCard = ({post}) =>
    // const {post} = props;
    (
        <div className="post" > {/* key deve estar setado no elemento root e não nos filhos */}
            <img src={post.cover} alt={post.title}/>
            <div className="post-content"> 
                <h2>{post.title} {post.id}</h2>
                <p>{post.body}</p>
            </div>
        </div>

    );