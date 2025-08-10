// ChatWrapper.tsx

'use client'
import { useUser } from '@clerk/nextjs'
import ChatBot from './ChatShell'

export default function ChatWrapper() {
  const { isSignedIn, user } = useUser()

  if (!isSignedIn || !user) return null

  return <ChatBot userEmail={user.emailAddresses[0].emailAddress} />
}
