"use client";

// import { Button, Input, List } from "antd";
// import { SetStateAction, useState } from "react";
// import styles from "./AdminChatInterface.module.css";

// interface ApplicationReviewProps {
//   applicantId: string;
// }

// const initialMessages = [
//   {
//     from: "admin",
//     text: "Welcome to our service! How can we assist you today?",
//   },
// ];

// const adminResponses = [
//   "Thank you for reaching out. Can you provide more details?",
//   "Our team will look into this and get back to you shortly.",
//   "We have received your documents and are processing your application.",
//   "Your application has been approved. You will receive an email with further instructions.",
// ];

// const AdminChatInterface: React.FC<ApplicationReviewProps> = ({
//   applicantId,
// }) => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [userInput, setUserInput] = useState("");
//   const [responseIndex, setResponseIndex] = useState(0);

//   const handleUserInput = (e: {
//     target: { value: SetStateAction<string> };
//   }) => {
//     setUserInput(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (!userInput.trim()) return;

//     setMessages([...messages, { from: "user", text: userInput }]);
//     setUserInput("");

//     setTimeout(() => {
//       if (responseIndex < adminResponses.length) {
//         setMessages((m) => [
//           ...m,
//           { from: "admin", text: adminResponses[responseIndex] },
//         ]);
//         setResponseIndex(responseIndex + 1);
//       }
//     }, 1500);
//   };

//   return (
//     <div className={styles.chatcontainer}>
//       <div className={styles.chatmessages}>
//         <List
//           className={styles["chatmessage"]}
//           dataSource={messages}
//           renderItem={(item) => (
//             <List.Item className={`chat-message ${item.from}`}>
//               <span>{item.text}</span>
//             </List.Item>
//           )}
//         />
//       </div>
//       <Input.TextArea
//         rows={4}
//         value={userInput}
//         onChange={handleUserInput}
//         onPressEnter={handleSendMessage}
//         placeholder="Type your message here..."
//       />
//       <Button
//         onClick={handleSendMessage}
//         type="primary"
//         className="send-button"
//       >
//         Send
//       </Button>
//     </div>
//   );
// };

// export default AdminChatInterface;

// import React, { useState, useEffect, useRef } from "react";
// import { List, Avatar } from "antd";
// import { SendOutlined } from "@ant-design/icons";
// import dynamic from "next/dynamic";

// const Input = dynamic(() => import("antd").then((mod) => mod.Input), {
//   ssr: false,
// });
// const Button = dynamic(() => import("antd").then((mod) => mod.Button), {
//   ssr: false,
// });

// const initialMessages = [
//   { id: 1, sender: "admin", content: "Hi ! How can we assist you today?" },
// ];

// const adminResponses = ["Admin mess", "Admin-msg2", "Admin-msg3"];

// const AdminChatInterface = () => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [userInput, setUserInput] = useState("");
//   const [responseIndex, setResponseIndex] = useState(0);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const handleSendMessage = () => {
//     if (!userInput.trim()) return;

//     const newUserMessage = {
//       id: messages.length + 1,
//       sender: "user",
//       content: userInput,
//     };

//     setMessages([...messages, newUserMessage]);

//     if (responseIndex < adminResponses.length) {
//       const adminMessage = {
//         id: messages.length + 2,
//         sender: "admin",
//         content: adminResponses[responseIndex],
//       };

//       setTimeout(() => {
//         setMessages((prevMessages) => [...prevMessages, adminMessage]);
//         setResponseIndex(responseIndex + 1);
//       }, 1000);
//     }

//     setUserInput("");
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div style={{ height: "60vh", overflow: "auto", padding: "20px" }}>
//       <List
//         dataSource={messages}
//         renderItem={(item) => (
//           <List.Item key={item.id}>
//             <List.Item.Meta
//               avatar={
//                 <Avatar
//                   style={{
//                     backgroundColor:
//                       item.sender === "admin" ? "#f56a00" : "#87d068",
//                   }}
//                 />
//               }
//               title={item.sender.toUpperCase()}
//               description={item.content}
//             />
//           </List.Item>
//         )}
//       />
//       <div ref={messagesEndRef} />

//       <Input
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//         onPressEnter={handleSendMessage}
//         placeholder="Type your message here..."
//         suffix={
//           <Button
//             icon={<SendOutlined />}
//             onClick={handleSendMessage}
//             type="text"
//           />
//         }
//       />
//     </div>
//   );
// };

// export default AdminChatInterface;

import React, { useState, useEffect } from "react";
import { List, Input, Button, Avatar } from "antd";
import { SendOutlined } from "@ant-design/icons";

const initialMessages = [
  { id: 1, sender: "admin", content: "Hi! How can we assist you today?" },
];

const AdminChatInterface = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [userInput, setUserInput] = useState("");
  const [conversationIndex, setConversationIndex] = useState(0);

  const adminMessages = [
    "Thank you for your request. Can you please provide more details about your project?",
    "Could you specify the size and type of roofing materials you plan to use?",
    "Do you have the necessary documents ready for submission?",
    "Your application is complete. We will notify you once the review process is done.",
  ];

  const userMessages = [
    "I need assistance with my roofing permit application.",
    "The project is a 500 sq ft residential roofing with ceramic tiles.",
    "Yes, I have all the documents prepared.",
    "Thank you for the update!",
  ];

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      sender: "user",
      content: userInput,
    };
    setMessages([...messages, newUserMessage]);
    setUserInput("");

    if (conversationIndex < adminMessages.length) {
      setTimeout(() => {
        const newAdminMessage = {
          id: messages.length + 2,
          sender: "admin",
          content: adminMessages[conversationIndex],
        };
        setMessages((prevMessages) => [...prevMessages, newAdminMessage]);
        setConversationIndex(conversationIndex + 1);
      }, 1000);
    }
  };

  const handlePromptClick = (prompt: React.SetStateAction<string>) => {
    setUserInput(prompt);
    handleSendMessage();
  };

  return (
    <div className="chat-container">
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    backgroundColor:
                      item.sender === "admin" ? "#f56a00" : "#87d068",
                  }}
                />
              }
              description={item.content}
            />
          </List.Item>
        )}
      />
      <div className="chat-prompts">
        {userMessages.map((message, index) => (
          <p
            key={index}
            onClick={() => handlePromptClick(message)}
            style={{ color: "#1890ff", cursor: "pointer" }}
          >
            {message}
          </p>
        ))}
      </div>
      <Input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message here..."
        style={{ marginBottom: "10px" }}
        suffix={
          <Button
            onClick={handleSendMessage}
            type="primary"
            icon={<SendOutlined />}
            disabled={!userInput.trim()}
          />
        }
      />
    </div>
  );
};

export default AdminChatInterface;
