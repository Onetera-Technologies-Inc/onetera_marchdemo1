"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Card, Typography, Avatar, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import AdminNavbar from "../../navigation/adminNavbar/adminNavbar";

const { Title } = Typography;
const { TextArea } = Input;

const ResidentChatMainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "",
    },
  ]);

  // const handleFileUpload = (info: any) => {
  //   if (info.file.status === "error") {
  //     notification.success({
  //       message: "File Uploaded Successfully",
  //       description: `${info.file.name} file uploaded successfully.`,
  //     });

  //     const thankYouMessage: ChatMessage = {
  //       text: "Your documents have been successfully submitted and your application has been updated. We will alert you once the status of your application changes. You can also check your applications on your profile.  ",
  //       sender: "bot",
  //     };

  //     setChatMessages((prevMessages) => [...prevMessages, thankYouMessage]);

  //     const nextMessage: ChatMessage = {
  //       text: "Would you like help with anything else?",
  //       sender: "bot",
  //     };

  //     setChatMessages((prevMessages) => [...prevMessages, nextMessage]);
  //   }
  // };

  // const uploadProps = {
  //   name: "file",
  //   action: "/upload",
  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange: handleFileUpload,
  // };

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    fetch("");
  });

  // useEffect(() => {
  //   if (userAgreedToUpload) {
  //     const statusMessage: ChatMessage = {
  //       text: <DocumentUploadList />,
  //       sender: "bot",
  //     };
  //     setChatMessages((prevMessages) => [...prevMessages, statusMessage]);

  //     setChatMessages((prevMessages) => [
  //       ...prevMessages,
  //       {
  //         text: (
  //           <Upload {...uploadProps}>
  //             <Button icon={<UploadOutlined />}>
  //               Please click here to Upload
  //             </Button>
  //           </Upload>
  //         ),
  //         sender: "bot",
  //       },
  //     ]);
  //   }
  // }, [userAgreedToUpload]);

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  const handleSendMessage = async (text: string = inputValue) => {
    setIsLoading(true);
    let tempMessages = [...messages, { role: "user", content: text }];
    setMessages(tempMessages);
    setInputValue("");

    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: tempMessages }),
    });

    const data = await response.json();
    const { output } = data;

    setMessages((prevMessages) => [...prevMessages, output]);
    setIsLoading(false);
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
          <div
            style={{
              overflowY: "auto",
              flexGrow: 1,
              marginBottom: "10px",
            }}
          >
            <div style={{ overflowY: "auto", flexGrow: 1 }}>
              <Title
                level={2}
                style={{
                  textAlign: "center",
                  marginTop: "40px",
                }}
              >
                Hi Jane, how can Onetera help you?
              </Title>
            </div>
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
            {messages.map(
              (message, index) =>
                message.content && (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      flexDirection:
                        message.role === "assistant" ? "row" : "row-reverse",
                    }}
                  >
                    <Avatar
                      style={{
                        backgroundColor:
                          message.role === "assistant" ? "#87d068" : "#1890ff",
                        marginLeft: message.role === "assistant" ? "0" : "10px",
                        marginRight:
                          message.role === "assistant" ? "10px" : "0",
                      }}
                      icon={<UserOutlined />}
                    />
                    <div
                      style={{
                        backgroundColor:
                          message.role === "user" ? "#1890ff" : "#f0f0f0",
                        color: message.role === "user" ? "#fff" : "#000",
                        padding: "10px",
                        borderRadius: "10px",
                        maxWidth: "80%",
                      }}
                    >
                      <p style={{ margin: 0 }}>{message.content}</p>
                    </div>
                  </div>
                )
            )}
            <Spin spinning={isLoading}>
              <div style={{ overflowY: "auto", flexGrow: 1 }}>
                <div ref={endOfMessagesRef} />
              </div>
            </Spin>
          </div>
          <div style={{ borderTop: "1px solid #eaeaea", padding: "10px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <TextArea
                rows={2}
                showCount
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPressEnter={() => handleSendMessage(inputValue)}
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
