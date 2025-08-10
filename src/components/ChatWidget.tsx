// 'use client'
// import { useState, useEffect, useRef } from 'react'

// type Msg = { role: 'user' | 'assistant'; content: string }

// export default function ChatWidget() {
//   const [msgs, setMsgs] = useState<Msg[]>([])
//   const [inp, setInp] = useState('')
//   const endRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: 'smooth' })
//   }, [msgs])

//   const send = async () => {
//     if (!inp.trim()) return

//     const userMsg: Msg = { role: 'user', content: inp }
//     setMsgs(prev => [...prev, userMsg])

//     try {
//       const res = await fetch('http://localhost:8000/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ user_input: inp }),
//       })

//       if (!res.ok) throw new Error("Bad response")

//       const j = await res.json()
//       console.log("API response:", j)

//       const botReply = `
// 🧠 Action: ${j.action}
// 📝 Items: ${j.items?.join(", ") || "N/A"}
// ⏱️ ETA: ${j.estimated_time || "N/A"}
// 📦 Status: ${j.status || "N/A"}
// 📄 Order ID: ${j.order_id || "N/A"}
//       `.trim()

//       const assistantMsg: Msg = { role: 'assistant', content: botReply }
//       setMsgs(prev => [...prev, assistantMsg])
//     } catch (e) {
//       console.error("Error in chat:", e)
//       const errMsg: Msg = { role: 'assistant', content: '🚨 Internal Server Error or Network Issue' }
//       setMsgs(prev => [...prev, errMsg])
//     }

//     setInp('')
//   }

//   return (
//     <div className="flex flex-col h-full border rounded-lg shadow-md max-w-2xl mx-auto mt-10 bg-white">
//       <div className="flex-1 overflow-y-auto p-4">
//         {msgs.map((m, i) => (
//           <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
//             <div
//               className={`whitespace-pre-line px-4 py-2 rounded-lg max-w-xs sm:max-w-sm md:max-w-md ${
//                 m.role === 'user'
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-100 text-gray-800 border'
//               }`}
//             >
//               {m.content}
//             </div>
//           </div>
//         ))}
//         <div ref={endRef} />
//       </div>

//       <div className="flex items-center border-t p-3 bg-gray-50">
//         <input
//           className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400 text-black"
//           placeholder="Ask something..."
//           value={inp}
//           onChange={e => setInp(e.target.value)}
//           onKeyDown={e => e.key === 'Enter' && send()}
//         />
//         <button
//           onClick={send}
//           className="ml-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   )
// }
