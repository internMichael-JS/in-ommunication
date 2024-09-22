import clasessC from './Content.module.css';
import Post from './Post/Post.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import React from 'react';
const Content = (props) => {
  let posts=props.pageProfile.postData.map(posts=><Post name={posts.name} date={posts.date} content={posts.content} like = {posts.like}/>);
  let newPostEl=React.createRef();
  let createPost=()=>{
    console.log(newPostEl.current.value);
  };
  return (
    <div>
      <ProfileInfo srcIcon='https://cdn-icons-png.flaticon.com/512/4837/4837857.png'
      name='Ivanov Ivan' city='Gomel' sex='men' telNumber='+7515262562'/>
      <hr />


      <div className={clasessC.createPost}>
        <h3 className={clasessC.createP}>
          Create new post
        </h3>
        <textarea className={clasessC.textPost} ref={newPostEl} >

        </textarea>
        <div className={clasessC.button}>
          <button onClick={createPost}>
            Sent
          </button>
        </div>
      </div>
      <div>
        {posts}
      </div>

    </div>
  );
};


export default Content;