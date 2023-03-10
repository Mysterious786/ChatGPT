'use client'

import { PlusIcon } from '@heroicons/react/24/solid'
import { addDoc, collection,serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { db } from '../firebase';

function NewChat() {
    const router = useRouter();
//It will be a asynchronous function..
//First of all we need the users information...
// pulling it from session
//import router from next/navigation not from next router
const {data:session} = useSession();
//after information we alspo uiis router to direct then up...

    const createNewChat = async() => {
        //first argument is the path-database-db
// first argument of the collection route 
//pushing something into the firebase database

        const doc = await addDoc(
            collection(db,"users",session?.user?.email!,"chats"),
        {
          // pushing into firebase databse
           
            userId: session?.user?.email!,
            // message time stamp
            createdAt : serverTimestamp()
        }
        
        );
        //redirecting the user to the chat screen
        router.push(`/chat/${doc.id}`);
    };
  return (
    // chat row is a custom style
    <div onClick={createNewChat} className='border-gray-700 border chatRow'>
      {/* In this simply we will be having a plus icon and a p tag. */}
      <PlusIcon className='h-4 w-4'/>
      <p>New Chat</p>
    </div>
  )
}

export default NewChat
//nextjs 13 and firebse 9
