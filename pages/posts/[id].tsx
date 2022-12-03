import React from 'react';
import { useRouter } from 'next/router';


export const getStaticPaths = async () => {
  const response = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

  const paths = response.map(({id}) => {
    return {
      params: {id: id.toString()},
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    console.log('context.params: ', context.params);
    const response = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
  
    if (!response) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        post: response
      }
    }
  }

const Post:React.FC = ({post}) => {
    const {title, body} = post;
  
  return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Post;
