import React from 'react';
import { useRouter } from 'next/router';

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const response = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json();
  
    if (!response) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        contact: response
      }
    }
  }

const UserContact:React.FC = ({contact}) => {
    const {name, email} = contact;
  
  return (
        <div>
            <h1>{name}</h1>
            <h3>{email}</h3>
        </div>
    )
}

export default UserContact;
