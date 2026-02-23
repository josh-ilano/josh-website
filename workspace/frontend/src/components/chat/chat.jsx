import { useState, useEffect } from 'react'
import ReactMarkdown from "react-markdown";

import './chat.css'

const apiUrl = import.meta.env.VITE_API_URL


// https://josh-website-r3mj.onrender.com
function Chat() {
    const [messages, setMessages] = useState([])
    const [userInput, setUserInput] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    async function getResponse() {
        try {
            if (!userInput) return
            const response = await fetch(`${apiUrl}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userInput })
            })
            if (!response.ok) {
                console.log('Error:', response.statusText)
                throw new Error('Oops, something went wrong!')
            }
            const { message } = await response.json()
            fetch(`${apiUrl}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ input: userInput, response: message })
            })
            setMessages([...messages, userInput, message])
        } catch (error) {
            console.error(error)
            return 'Oops, something went wrong!'
        }
    }

    function deleteChatbox(index) {
        let newMessages = [...messages]
        newMessages.splice(index, 2)
        fetch(`${apiUrl}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: messages[index], response: messages[index+1] })
        })
        setMessages(newMessages)
    }

    useEffect(() => {
        fetch(`${apiUrl}/logs`)
            .then(res => res.json())
            .then(data => {
                let newMessages = []
                for (let i = 0; i < data.length; i++) {
                    newMessages.push(data[i].input)
                    newMessages.push(data[i].response)
                }
                setMessages(newMessages)
            })
    }, [])

    return (
    <div id='chatComponent'>

         <button id="toggle-chatbot-button" onClick={() => setIsOpen(!isOpen)}>
                <img   
                    src="https://cdn-icons-png.flaticon.com/512/685/685887.png" 
                    alt="Toggle modal"
                    style={{ width: "24px", height: "24px" }}>
                </img>
        </button>


        {isOpen && (
            <div className = "glass glass-chat" id="chat">
                <div className="innerContainer">
                    <div id = "chat-wrapper">
                        <h2>Ask Me A Question</h2>
                
                        <div id="chat-log">
                            {
                                messages.map((text, index) => (
                                    <div key={index} className='chatbox'>
                                        {index % 2 == 0 && <button className="x" onClick={() => deleteChatbox(index)}>X</button>}
                                        <p className={index % 2 == 0 ? 'user-message' : 'chatbot-response'}>
                                             <ReactMarkdown>
                                                    {text}
                                             </ReactMarkdown>
                                              
                                            </p>
                                    </div>
                                ))
                            }
                        </div>

                
                        <div id="chat-input">
                            <form id="submit-form" onSubmit={(e) => e.preventDefault()}>  
                                    <input
                                        type='text'
                                        name='user-input'
                                        id='questionInput'
                                        placeholder='What would you like to ask?'
                                        onChange={e => setUserInput(e.target.value)}
                                    />
                            </form>
                                <button id="submit-button" type='submit' onClick={getResponse}>

                                        <img id="submit-image" src="https://static.thenounproject.com/png/105496-200.png"></img>
                                </button>
                        </div>
                            
                        </div>
                        
                    </div>
    
                        
                    
                    
    
                </div>
                
        
        )}
    
    
    </div>)
    
    
   
}

export default Chat


