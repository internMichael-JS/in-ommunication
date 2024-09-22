import p from './Post.module.css';

const Post = (props) => {
  return (
    <div className={p.postDiv}>
      <div className={p.postProfile}>
        <div className={p.iconPostDiv}>
          <img src='https://cdn-icons-png.flaticon.com/512/4837/4837857.png' alt='icon' className={p.iconPost} />
        </div>
        <div className={p.profileInformation}>
          <p>{props.name}</p>
          <p>{props.date}</p>
        </div>
      </div>
      <div className={p.postText}>
        <h2>{props.content}</h2>
      </div>
      <div className={p.buttons}>
        <div className={p.buttonLine}>
          <button>Comment</button>
          <button>{props.like} Like</button>
        </div>
      </div>
    </div>
  );
};


export default Post;