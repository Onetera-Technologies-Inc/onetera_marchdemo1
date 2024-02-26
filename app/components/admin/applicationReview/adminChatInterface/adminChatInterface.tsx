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
import { SendOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./adminChatInterface.module.css";

const initialMessages = [{ id: 1, sender: "", content: "" }];

const AdminChatInterface = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [userInput, setUserInput] = useState("");
  const [conversationIndex, setConversationIndex] = useState(0);

  const adminMessages = [
    "Thank you for your request. Can you please provide more details about your project?",
  ];

  const userMessages = [
    `Hi Christine, 
    I am a government administrative official reviewing your standard roofing permit submitted on 02-03-2024. Your roofing permit application is in process! To move forward, we need:
    Roofing materials specs.
    Roof slope/pitch details.
    Please either reply with the documents listed above in the chat or upload them in your application hub.`,
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
    <div className={styles.chatcontainer}>
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(item) =>
          item.sender === "admin" ? (
            <List.Item key={item.content} className={styles.adminmessage}>
              {item.content}
            </List.Item>
          ) : (
            item.content && (
              <List.Item key={item.content} className={styles.usermessage}>
                {item.content}
              </List.Item>
            )
          )
        }
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
      <div className="chat-interface-container">
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your request here"
          prefix={
            <Button
              icon={<PlusOutlined />}
              style={{
                border: "none",
                background: "transparent",
                color: "#1890ff",
              }}
            />
          }
          suffix={
            <Button
              onClick={handleSendMessage}
              type="primary"
              icon={<SendOutlined />}
              style={{
                border: "none",
                background: "transparent",
                color: "#1890ff",
              }}
              disabled={!userInput.trim()}
            />
          }
          style={{
            borderRadius: "16px",
            padding: "4px 16px",
            border: "1px solid #d9d9d9",
            boxShadow: "none",
            height: "100px",
          }}
        />
      </div>
    </div>
  );
};

export default AdminChatInterface;
