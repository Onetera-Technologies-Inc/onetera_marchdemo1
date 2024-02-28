"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Card, Typography } from "antd";
import { SendOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ResidentStatusTable from "./residentStatusTable";
import RequestDocumentUpload from "./requestDocumentUpload";

const { Title } = Typography;
const { TextArea } = Input;

type ChatMessage = {
  text: string | JSX.Element;
  sender: "user" | "bot";
};

const ResidentChatMainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userAgreededToUpload, setUserAgreededToUpload] = useState(false);
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  const handleFileUpload = (info: any) => {
    console.log(info);
    if (info.file.status === "error") {
      notification.success({
        message: "File Uploaded Successfully",
        description: `${info.file.name} file uploaded successfully.`,
      });

      // Add a thank you message to the chat
      const thankYouMessage: ChatMessage = {
        text: "Thank you for uploading the document.",
        sender: "bot",
      };

      // Update chat messages to include the thank you message
      setChatMessages((prevMessages) => [...prevMessages, thankYouMessage]);
    }
  };

  // Add an Upload button to the chat interface where users can click to upload documents
  const uploadProps = {
    name: "file",
    action: "/upload", // This should be the endpoint for handling uploads on your server
    headers: {
      authorization: "authorization-text",
    },
    onChange: handleFileUpload,
  };

  // Function to scroll to the last message
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  // Function to handle the click on chat prompts
  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  // Function to handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (text: string = inputValue) => {
    if (text.trim() !== "") {
      setChatMessages([...chatMessages, { text: text, sender: "user" }]);

      // Simulate the chatbot response
      setTimeout(() => {
        let botResponse: ChatMessage = {
          text: "I'm here to help! Can you provide the missing documents?",
          sender: "bot",
        };

        // If the user's last message was about documents, ask for upload
        if (text.toLowerCase().includes("documents")) {
          botResponse.text =
            "Please upload the necessary documents using the button below.";

          setChatMessages((prevMessages) => [
            ...prevMessages,
            botResponse,
            // Add a message component that allows document upload
            {
              text: (
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              ),
              sender: "bot",
            },
          ]);
        } else if (
          text ==
          "I want to check the status of my current affordable housing applications."
        ) {
          const statusMessage: ChatMessage = {
            text: <ResidentStatusTable />,
            sender: "bot",
          };
          setChatMessages((prevMessages) => [...prevMessages, statusMessage]);

          const requestUpload: ChatMessage = {
            text: (
              <RequestDocumentUpload
                setUserAgreedToUpload={setUserAgreededToUpload}
              />
            ),
            sender: "bot",
          };

          setChatMessages((prevMessages) => [...prevMessages, requestUpload]);
        } else {
          // Otherwise, choose a random response
          const botResponses = [
            "Could you provide more details about your request so I can assist you better?",
            "Sure, I can check that for you. Can I have your application ID, please?",
            "To start a new application, I'll need some basic information. What type of housing are you applying for?",
            "Thank you for providing the information. Your request has been updated successfully!",
          ];
          const randomResponse =
            botResponses[Math.floor(Math.random() * botResponses.length)];
          botResponse.text = randomResponse;

          setChatMessages((prevMessages) => [...prevMessages, botResponse]);
        }
      }, 500);

      setInputValue(""); // Clear the input after sending the message
    }
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Hi Jane, how can I help you?
      </Title>
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
          "I want to check the status of my current affordable housing applications.",
          "I want to apply for affordable housing.",
          "I want to apply for a permit.",
          "I want to check the current status of my permits.",
        ].map((prompt, index) => (
          <Card
            key={index}
            style={{ width: "23%", cursor: "pointer" }}
            onClick={() => handlePromptClick(prompt)}
          >
            {prompt}
          </Card>
        ))}
      </div>
      <div
        style={{
          marginBottom: "20px",
          overflowY: "auto",
          maxHeight: "300px", // Set a max-height for the chat area
        }}
      >
        {/* Display chat messages */}
        {chatMessages.map((message, index) => (
          <p
            key={index}
            style={{ textAlign: message.sender === "bot" ? "left" : "right" }}
          >
            {message.text}
          </p>
        ))}
        {/* Scroll to this element on new messages */}
        <div ref={endOfMessagesRef} />
      </div>
      {/* Chat prompts can be added here if you want them to scroll with the messages */}
      <TextArea
        rows={2}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type your request here"
        style={{
          borderRadius: "20px",
          padding: "10px 20px",
          marginBottom: "20px",
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
  );
};

export default ResidentChatMainPage;
