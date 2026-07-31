import React, { useRef, useEffect } from "react";
import { DeepChat } from "deep-chat-react";

const AGENT_ENDPOINT = "https://virtualalvarolorentedev.me-e7e.workers.dev";
const SITE_ORIGIN = "https://alvarolorente.dev";
const MAX_MESSAGES = 15;

const getResponseText = (response: any): string => {
  if (typeof response?.reply === "string") return response.reply;

  return "I couldn't parse the response from Virtual Me.";
};

const Chat: React.FC = () => {
  const deepChatRef = useRef<any>(null);
  const checkMessagesToDisable = () => {
    if (deepChatRef.current) {
      let messages = [];
      try {
        const stored = window.localStorage.getItem("deepchat-messages");
        if (stored) {
          messages = JSON.parse(stored);
        }
      } catch (e) {}
      if (Array.isArray(messages) && messages.length >= MAX_MESSAGES) {
        deepChatRef.current.disableSubmitButton(true);
        deepChatRef.current.textInput.disabled = true;
        deepChatRef.current.textInput.placeholder.text =
          "Message Limit Reached. Please contact the real Alvaro Lorente for further assistance.";
      } else {
        deepChatRef.current.disableSubmitButton(false);
      }
    }
  };
  useEffect(() => {
    checkMessagesToDisable();
  }, [deepChatRef]);

  return (
    <DeepChat
      ref={deepChatRef}
      style={{
        display: "block",
        borderRadius: "10px",
        width: "100%",
        height: "calc(100vh - 50vh)",
      }}
      browserStorage={{
        key: "deepchat-messages",
        maxMessages: 15,
      }}
      introMessage={{
        text: "Welcome to the chat with the virtual Alvaro Lorente! How can I assist you today?",
      }}
      onInput={checkMessagesToDisable}
      messageStyles={{
        default: {
          shared: {
            bubble: {
              maxWidth: "100%",
              backgroundColor: "unset",
              marginTop: "10px",
              marginBottom: "10px",
            },
          },
          user: {
            bubble: {
              marginLeft: "0px",
              color: "#243139",
            },
          },
          ai: {
            outerContainer: {
              backgroundColor: "#e6ebe7",
              color: "#243139",
              borderTop: "1px solid #cbd2ce",
              borderBottom: "1px solid #cbd2ce",
            },
          },
        },
      }}
      textInput={{
        styles: {
          container: {
            width: "100%",
            margin: "0",
            border: "unset",
            borderTop: "1px solid #cbd2ce",
            borderRadius: "0px",
            boxShadow: "unset",
          },
          text: {
            fontSize: "1.05em",
            paddingTop: "11px",
            paddingBottom: "13px",
            paddingLeft: "12px",
            paddingRight: "2.4em",
          },
        },
        placeholder: {
          text: "Send a message",
          style: { color: "#66756f" },
        },
      }}
      submitButtonStyles={{
        submit: {
          container: {
            default: {
              transform: "scale(1.21)",
              marginBottom: "-3px",
              marginRight: "0.4em",
            },
          },
        },
      }}
      avatars={{
        default: { styles: { position: "left" } },
      }}
      connect={{
        url: AGENT_ENDPOINT,
        headers: {
          "Content-Type": "application/json",
          Origin: SITE_ORIGIN,
        },
      }}
      requestInterceptor={(details: any) => {
        const messages = Array.isArray(details.body?.messages)
          ? details.body.messages
          : [];
        const latestUserMessage = [...messages]
          .reverse()
          .find(
            (message: any) =>
              typeof message?.text === "string" &&
              message.text.trim().length > 0,
          );

        return {
          ...details,
          body: {
            message: latestUserMessage?.text ?? "",
          },
        };
      }}
      responseInterceptor={(response: any) => {
        return { text: getResponseText(response) };
      }}
      demo
    />
  );
};

export default Chat;
