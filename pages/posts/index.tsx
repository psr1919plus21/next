import Head from 'next/head';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';

export const getStaticProps = async () => {
  const response = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

  if (!response) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: response
    }
  }
}

const Posts:React.FC = ({ posts }) => {
  return (
  <>
    <Head>
      <title>Contacts</title>
    </Head>
    <h1>Contacts list</h1>
    <ul>
      {posts.map(({title, id}) => <li key={id}>
        <Link href={`/posts/${id}`} >{title}</Link>
      </li>)}
    </ul>
  </>
  )
}

export default Posts;
