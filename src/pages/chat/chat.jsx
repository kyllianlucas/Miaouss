import { useAuth } from "@/authProvider";
import ChatList from "@/components/chats/chatList";
import InputChat from "@/components/chats/inputChat";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { messagesServices } from "@/services/messagesServices";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";


export default function Chat() {

  const [messages , setMessages] = useState([]);
  const { user } = useAuth();

   useEffect(() => {
      messagesServices.getAll().then((res) => setMessages(res.documents));
      const unsub = messagesServices.listen(setMessages);
  
      return () => {
        unsub();
      };
    }, []);
  

    const inintials = (firstName, lastName) => {
      const fullName = firstName + " " + lastName;
      fullName ? fullName : "AA";
  
      return fullName
        .split(" ") // Diviser le nom en mots
        .map((word) => word.charAt(0).toUpperCase()) // Récupérer la première lettre de chaque mot en majuscule
        .join(""); // Combiner les initiales en une chaîne
    };


  return (
    <div className="flex justify-center">
          <Card className="w-[850px]">
            <CardHeader className="justify-start flex-row items-center gap-2">
              <Avatar>
                <AvatarFallback>{inintials("Axel", "Godart")}</AvatarFallback>
              </Avatar>
              <CardDescription className="flex flex-col items-start">
                <span className=" font-bold">Axel Godart</span>
                <span className="text-sm">godartaxel@gmail.com</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChatList messages={messages} user={user}/>
            </CardContent>
            <CardFooter className="gap-3">
              <InputChat user={user}/>
            </CardFooter>
          </Card>
    </div>
  )
}
