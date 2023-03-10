import React from 'react'
import Chat from '../../../components/Chat';
import ChatInput from '../../../components/ChatInput';
//React firebase Hooks
//move down to cloud firestore hooks
//overflow hidden to make the sidebar visible while scrolling
type Props = {
  params : {
    chatId : string;
  }
}
function ChatPage({params : {id}:Props) {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
    <Chat chatId={id}/>
    <ChatInput chatId={id}/> 
    </div>
  )
}

export default ChatPage;

