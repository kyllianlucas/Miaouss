

export default function ChatList({user, messages}) {
  return (
        <>
         {messages.map((message) =>
            message.users.$id !== user.$id ? (
              <div key={message.$id}
                id="RECEIVE"
                className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 mb-4 text-sm bg-muted break-words text-left"
              >
                {message.content}
              </div>
            ) : (
              <div
                key={message.$id}
                id="SEND"
                className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 mb-4 text-sm ml-auto bg-primary text-primary-foreground break-words text-left"
              >
                {message.content}
              </div>
            )
          )}
        </>
  );
}
