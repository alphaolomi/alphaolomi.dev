import { SimpleLayout } from "@/components/SimpleLayout";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'GuestBook',
}

interface Message
{
    id: string
    authorName: string
    content: string
}

async function getAllMessages(){
    return [{id: 'qweqwe', authorName: "Ally Dish", content: "Hello there."}] as Message[]
}

  
  export default async function GuestBook() {
    let messages = await getAllMessages()
  
    return (
      <SimpleLayout
        title="Messages from guest book"
        intro="Walk by and sign my guestbook."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex flex-col max-w-3xl space-y-16">
            {messages.map((message) => (
              <li key={message.id}><span className="text-gray-800"> {message.authorName}</span> : {message.content}</li>
            ))}
          </div>
        </div>
      </SimpleLayout>
    )
  }
  