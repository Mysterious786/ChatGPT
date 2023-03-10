import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';

import { collection,deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { } from 'firebase/firestore';

type Props = {
    id : string;
}
function ChatRow({id}:Props) {
    const pathname = usePathname();
    const router = useRouter();
    const { data:session } = useSession();
    const [active,setActive] = useState(false);

    const [messages] = useCollection(
      
        collection(db,'users',session?.user?.email!,'chats',id,
        'messages')
    );
    //use effect to determine we active 
    //[pathname] depenedency array
    useEffect(()=>{
if(!pathname) return ;
setActive(pathname.includes(id));
    },[pathname]);

    //delete chat
    const removeChat = async()=>{
      await deleteDoc(doc(db,"users",session?.user?.email!,"chats",id));
      router.replace("/");
    }

  return(<Link
  href={`/chat/${id}`} className={`chatRow justify-center ${active && "bg-gray-700/50"}`}>
    <ChatBubbleLeftIcon className='h-5 w-5'/>
    <p className='flex-1 hidden md:inline-flex truncate '>
      {/* pull the last pair of chats or shoe new chat */}
 {messages?.docs[messages?.docs.length-1]?.data().text || "New Chat" }
    </p>
    <TrashIcon onClick={removeChat}
     className='h-5 w-5 text-gray-700 hover:text-red-700'/>

  </Link>
)}

export default ChatRow;
