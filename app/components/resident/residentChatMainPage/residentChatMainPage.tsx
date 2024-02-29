"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Card, Typography, Avatar } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Upload, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ResidentStatusTable from "./residentStatusTable";
import RequestDocumentUpload from "./requestDocumentUpload";
import DocumentUploadList from "./documentUploadList";
import AdminNavbar from "../../navigation/adminNavbar/adminNavbar";

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

  useEffect(() => {
    if (userAgreedToUpload) {
      const statusMessage: ChatMessage = {
        text: <DocumentUploadList />,
        sender: "bot",
      };
      setChatMessages((prevMessages) => [...prevMessages, statusMessage]);

      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          text: (
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>
                Please click here to Upload
              </Button>
            </Upload>
          ),
          sender: "bot",
        },
      ]);
    }
  }, [userAgreedToUpload]);

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

      //handle spanish
      setTimeout(() => {
        let responseText = "";
        if (text.includes("solicitudes de vivienda")) {
          responseText =
            "Estoy verificando tus solicitudes. ¿Puedes confirmar tu fecha de nacimiento?";
        } else if (text.includes("ID 12345")) {
          responseText =
            "Gracias. Hemos actualizado tu solicitud con el ID 12345.";
        } else {
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
                  setUserAgreedToUpload={setUserAgreedToUpload}
                />
              ),
              sender: "bot",
            };

            setChatMessages((prevMessages) => [...prevMessages, requestUpload]);
          } else {
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
        }

        const botResponse: ChatMessage = {
          text: responseText,
          sender: "bot",
        };

        setChatMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 500);

      setInputValue(""); // Clear the input after sending the message
    }
  };

  return (
    <>
      <AdminNavbar />
      <Card style={{ margin: "30px 60px auto 60px", borderRadius: "25px" }}>
        <div
          style={{
            maxWidth: "1111px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            height: "75vh",
          }}
        >
          <div style={{ overflowY: "auto", flexGrow: 1 }}>
            <Title level={2} style={{ textAlign: "center", marginTop: "40px" }}>
              Hi Jane, how can Onetera help you?
            </Title>
          </div>

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
                showCount
                value={inputValue}
                autoSize={false}
                onChange={handleInputChange}
                maxLength={100}
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
