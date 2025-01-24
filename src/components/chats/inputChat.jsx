import { Send } from 'lucide-react';

import { messagesServices } from '@/services/messagesServices';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function InputChat({user}) {
console.log(user)
  const [message , setMessage] = useState("");
  const sendMessage = ()=> {
    messagesServices.post({
      content : message,
      users : user.$id
    }).then(()=> setMessage(""))
  }

  

  return (
    <>
       <Input type="text"  onChange={(e)=>setMessage(e.target.value)}  value={message} placeholder="Type your message..." />
          <Button onClick={sendMessage} variant="outline" size="icon">
            <Send />
          </Button>
    </>
  )
}
