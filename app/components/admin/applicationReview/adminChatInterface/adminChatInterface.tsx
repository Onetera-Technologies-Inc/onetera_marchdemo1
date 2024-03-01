"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Card, Typography, Avatar } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { notification } from "antd";

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
                onPressEnter={() => handleSendMessage(inputValue)}
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
