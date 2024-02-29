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

// import React, { useState, useEffect } from "react";
// import { List, Input, Button, Avatar } from "antd";
// import { SendOutlined, PlusOutlined } from "@ant-design/icons";
// import styles from "./adminChatInterface.module.css";

// const initialMessages = [{ id: 1, sender: "", content: "" }];

// const AdminChatInterface = () => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [userInput, setUserInput] = useState("");
//   const [conversationIndex, setConversationIndex] = useState(0);

//   const adminMessages = [
//     "Thank you for your request. Can you please provide more details about your project?",
//   ];

//   const userMessages = [
//     `Hi Christine,
//     I am a government administrative official reviewing your standard roofing permit submitted on 02-03-2024. Your roofing permit application is in process! To move forward, we need:
//     Roofing materials specs.
//     Roof slope/pitch details.
//     Please either reply with the documents listed above in the chat or upload them in your application hub.`,
//   ];

//   const handleSendMessage = () => {
//     if (!userInput.trim()) return;

//     const newUserMessage = {
//       id: messages.length + 1,
//       sender: "user",
//       content: userInput,
//     };
//     setMessages([...messages, newUserMessage]);
//     setUserInput("");

//     if (conversationIndex < adminMessages.length) {
//       setTimeout(() => {
//         const newAdminMessage = {
//           id: messages.length + 2,
//           sender: "admin",
//           content: adminMessages[conversationIndex],
//         };
//         setMessages((prevMessages) => [...prevMessages, newAdminMessage]);
//         setConversationIndex(conversationIndex + 1);
//       }, 1000);
//     }
//   };

//   const handlePromptClick = (prompt: React.SetStateAction<string>) => {
//     setUserInput(prompt);
//     handleSendMessage();
//   };

//   return (
//     <div className={styles.chatcontainer}>
//       <List
//         itemLayout="horizontal"
//         dataSource={messages}
//         renderItem={(item) =>
//           item.sender === "admin" ? (
//             <List.Item key={item.content} className={styles.adminmessage}>
//               {item.content}
//             </List.Item>
//           ) : (
//             item.content && (
//               <List.Item key={item.content} className={styles.usermessage}>
//                 {item.content}
//               </List.Item>
//             )
//           )
//         }
//       />

//       <div className="chat-prompts">
//         {userMessages.map((message, index) => (
//           <p
//             key={index}
//             onClick={() => handlePromptClick(message)}
//             style={{ color: "#1890ff", cursor: "pointer" }}
//           >
//             {message}
//           </p>
//         ))}
//       </div>
//       <div className="chat-interface-container">
//         <Input
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           placeholder="Type your request here"
//           prefix={
//             <Button
//               icon={<PlusOutlined />}
//               style={{
//                 border: "none",
//                 background: "transparent",
//                 color: "#1890ff",
//               }}
//             />
//           }
//           suffix={
//             <Button
//               onClick={handleSendMessage}
//               type="primary"
//               icon={<SendOutlined />}
//               style={{
//                 border: "none",
//                 background: "transparent",
//                 color: "#1890ff",
//               }}
//               disabled={!userInput.trim()}
//             />
//           }
//           style={{
//             borderRadius: "16px",
//             padding: "4px 16px",
//             border: "1px solid #d9d9d9",
//             boxShadow: "none",
//             height: "100px",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default AdminChatInterface;

"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Card, Typography, Avatar } from "antd";
import { SendOutlined, PlusOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Upload, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

type ChatMessage = {
  text: string | JSX.Element;
  sender: "user" | "bot";
};

const ResidentChatMainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userAgreedToUpload, setUserAgreedToUpload] = useState(false);
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  const handleFileUpload = (info: any) => {
    if (info.file.status === "error") {
      notification.success({
        message: "File Uploaded Successfully",
        description: `${info.file.name} file uploaded successfully.`,
      });

      const thankYouMessage: ChatMessage = {
        text: "Your documents have been successfully submitted and your application has been updated. We will alert you once the status of your application changes. You can also check your applications on your profile.  ",
        sender: "bot",
      };

      setChatMessages((prevMessages) => [...prevMessages, thankYouMessage]);

      const nextMessage: ChatMessage = {
        text: "Would you like help with anything else?",
        sender: "bot",
      };

      setChatMessages((prevMessages) => [...prevMessages, nextMessage]);
    }
  };

  const uploadProps = {
    name: "file",
    action: "/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange: handleFileUpload,
  };

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  // Function to handle the click on chat prompts
  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (text: string = inputValue) => {
    if (text.trim() !== "") {
      setChatMessages([...chatMessages, { text: text, sender: "user" }]);

      setTimeout(() => {
        let responseText = "Admin response";

        const botResponse: ChatMessage = {
          text: responseText,
          sender: "bot",
        };

        setChatMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 500);

      setInputValue("");
      endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Card style={{ borderRadius: "25px" }}>
        <div
          style={{
            maxWidth: "1111px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            height: "68vh",
          }}
        >
          <div
            style={{
              overflowY: "auto",
              flexGrow: 1, // This allows the chat area to take up all available space
              marginBottom: "10px", // Add some space before the text input area
            }}
          >
            <Title level={5} style={{ marginTop: "20px" }}>
              Here are some recommended chat prompts to help you get started
            </Title>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "20px",
              }}
            >
              {[
                `
                Hi Christine,
                I am a government administrative official reviewing your standard roofing permit submitted on 02-03-2024. Your roofing permit application is in process! To move forward, we need:
                1. Roofing materials specs.
                2. Roof slope/pitch details.
                Please either reply with the documents listed above in the chat or upload them in your application hub.
              `,
              ].map((prompt, index) => (
                <Card
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePromptClick(prompt)}
                >
                  {prompt}
                </Card>
              ))}
            </div>
            {chatMessages.map(
              (message, index) =>
                message.text && (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      flexDirection:
                        message.sender === "bot" ? "row" : "row-reverse",
                    }}
                  >
                    <Avatar
                      style={{
                        backgroundColor:
                          message.sender === "bot" ? "#87d068" : "#1890ff",
                        marginLeft: message.sender === "bot" ? "0" : "10px",
                        marginRight: message.sender === "bot" ? "10px" : "0",
                      }}
                      icon={<UserOutlined />}
                    />
                    <div
                      style={{
                        backgroundColor:
                          message.sender === "user" ? "#1890ff" : "#f0f0f0",
                        color: message.sender === "user" ? "#fff" : "#000",
                        padding: "10px",
                        borderRadius: "10px",
                        maxWidth: "80%",
                      }}
                    >
                      <p style={{ margin: 0 }}>{message.text}</p>
                    </div>
                  </div>
                )
            )}
            <div ref={endOfMessagesRef} />
          </div>
          <div style={{ borderTop: "1px solid #eaeaea", padding: "10px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <TextArea
                rows={2}
                value={inputValue}
                autoSize={false}
                onChange={handleInputChange}
                placeholder="Type your request here"
                style={{
                  borderRadius: "20px",
                  padding: "10px 20px",
                  height: "120px",
                  backgroundColor: "#F6F6F6",
                  resize: "none",
                }}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<SendOutlined />}
                onClick={() => handleSendMessage()}
                style={{ float: "right", marginRight: "5px" }}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ResidentChatMainPage;
