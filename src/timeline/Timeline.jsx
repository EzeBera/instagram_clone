import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './posts/Post'
import { Avatar } from '@mui/material'


function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Clio",
      postImage: "https://hips.hearstapps.com/hmg-prod/images/bojnice-castle-1603142898.jpg",
      likes: 70,
      timespamp: "15min",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad nihil commodi, quaerat quod labore provident impedit accusamus debitis fugit aliquid aliquam iure ipsum consectetur, vero, sed ipsam eveniet distinctio!"
    },
    {
      user: "Hummer",
      postImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg",
      likes: 52,
      timespamp: "5hr",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad nihil commodi, quaerat quod labore provident impedit accusamus debitis fugit aliquid aliquam iure ipsum consectetur, vero, sed ipsam eveniet distinctio!"
    },
    {
      user: "Misha",
      postImage: "https://global-uploads.webflow.com/59dbe1c3542805000192616b/63178a7970d1b57a4c6a7a05_golden-retriever.png",
      likes: 45,
      timespamp: "38min",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad nihil commodi, quaerat quod labore provident impedit accusamus debitis fugit aliquid aliquam iure ipsum consectetur, vero, sed ipsam eveniet distinctio!"
    },
    {
      user: "Kali",
      postImage: "https://wallpapers.com/images/hd/nissan-r35-gtr-pictures-itl92aaovqpbva4d.jpg",
      likes: 32,
      timespamp: "15d",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad nihil commodi, quaerat quod labore provident impedit accusamus debitis fugit aliquid aliquam iure ipsum consectetur, vero, sed ipsam eveniet distinctio!"
    },
    {
      user: "Batman",
      postImage: "https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2021-02/Rialto-Bridge.jpg",
      likes: 25,
      timespamp: "12hr",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad nihil commodi, quaerat quod labore provident impedit accusamus debitis fugit aliquid aliquam iure ipsum consectetur, vero, sed ipsam eveniet distinctio!"
    },
    {
      user: "Goku",
      postImage: "https://c4.wallpaperflare.com/wallpaper/768/533/264/philadelphia-rocky-balboa-rocky-the-movie-3000x1991-entertainment-movies-hd-art-wallpaper-preview.jpg",
      likes: 87,
      timespamp: "2d",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad nihil commodi, quaerat quod labore provident impedit accusamus debitis fugit aliquid aliquam iure ipsum consectetur, vero, sed ipsam eveniet distinctio!"
    }
  ]);
  return (
    <div className='timeline'>
      <div className="timeline__left">
        <div className="timeline__posts">
        <Avatar>D</Avatar>
          {posts.map((post) => {
            return (
              <Post
                user={post.user}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timespamp}
                comment={post.comment}
              />
            );
          })}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline