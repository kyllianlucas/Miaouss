import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"



export default function ChatList({ userId ,firstName, lastName, email, chats}) {

const inintials = (firstName , lastName)=>{
  const fullName = firstName + " " +  lastName;
  fullName  ? fullName : "AA";

  return fullName
    .split(" ") // Diviser le nom en mots
    .map(word => word.charAt(0).toUpperCase()) // Récupérer la première lettre de chaque mot en majuscule
    .join(""); // Combiner les initiales en une chaîne
}


  return (
    <div className="flex justify-center">
      <Card className="w-[850px]">
        <CardHeader className="justify-start flex-row items-center gap-2">
          <Avatar>
            <AvatarFallback>{inintials("Axel", "Godart")}</AvatarFallback>
        </Avatar>
          <CardDescription className="flex flex-col items-start">
            <span className=" font-bold">Axel Godart</span>
            <span className="text-sm" >godartaxel@gmail.com</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div id="RECEIVE" className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 mb-4 text-sm bg-muted break-words text-left" >My first message Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam facilis quaerat ab inventore natus quibusdam doloribus odit repellat maxime hic, nesciunt dignissimos doloremque, sequi magnam consectetur voluptates sit a! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, modi animi! Nobis officia culpa doloremque suscipit quisquam consequatur reiciendis, voluptatibus repellendus. Aut temporibus similique adipisci vero, reiciendis voluptas reprehenderit beatae!</div>
          <div id="SEND" className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 mb-4 text-sm ml-auto bg-primary text-primary-foreground break-words text-left" >My second message Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus, provident fuga voluptas explicabo temporibus odio dolorem eaque iste veniam fugiat velit eos, amet, dolore in voluptatibus a aut aliquam.</div>
          {/* {chats.map((chat)=>{
            chat.id != userId ? 
            <div className="flex justify-start"><ChatItem status="RECEIVE">{chat.content}</ChatItem></div> :
            <div className="flex justify-end"><ChatItem status="SEND">{chat.content}</ChatItem></div>
          })} */}
        </CardContent>
        <CardFooter className="gap-3">
          <Input type="text" placeholder="Type your message..." />
          <Button  variant="outline" size="icon">
            <Send/>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
