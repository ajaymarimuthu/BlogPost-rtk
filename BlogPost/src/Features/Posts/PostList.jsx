import {useSelector} from "react-redux"
import { selectAllPosts } from "./postSlice"
import PostAuthor from "./PostAuthor";
import Time from "./Time";

import React from 'react'

function PostList() {

    const posts=useSelector(selectAllPosts);

    const orderedPosts=posts.slice().
                       sort((a,b)=> b.date.localeCompare(a.date))


    // console.log(posts);

    const renderedPosts = orderedPosts.map(post=> (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            {/* <p>{post.userId}</p> */}

            <p>
              
              <PostAuthor userId={post.userId}/>
              <Time timestamp={post.date}/>
            </p>



            <p>---------------</p>
        </article>
    ))


  return (
    <section>
        <h2>---Posts---</h2>
        {renderedPosts}
    </section>
  )
}

export default PostList