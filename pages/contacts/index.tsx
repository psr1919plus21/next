import Head from 'next/head';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';

export const getStaticProps = async () => {
  try {
    const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

    if (!response) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        contacts: response
      }
    }
  } catch {
    return {
      props: {
        contacts: []
      }
    }
  }

  
}

const Contacts:React.FC = ({ contacts }) => {
  return (
  <>
    <Head>
      <title>Contacts</title>
    </Head>
    <h1>Contacts list</h1>
    <ul>
      {contacts.map(({name, id}) => <li key={id}>
        <Link href={`/contacts/${id}`} >{name}</Link>
      </li>)}
    </ul>
  </>
  )
}

export default Contacts;
