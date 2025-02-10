import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "../components/MessageInput";
import MessageSkeleton from "../components/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStor";
import userImage from "../public/image/userimage.jpg";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    unSubscribeFromMessage,
    subscribeToMessage,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef();

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessage();
    return () => unSubscribeFromMessage();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessage,
    unSubscribeFromMessage,
  ]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isMessagesLoading)
    return (
      <div className="flex flex-1 overflow-auto flex-col">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          return (
            <div
              key={message._id}
              className={`chat ${
                message.senderId === authUser._id ? "chat-end" : "chat-start"
              }`}
              ref={messageEndRef}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounder-full border">
                  <img
                    src={
                      message.senderId === authUser._id
                        ? authUser.profilePic || userImage
                        : selectedUser.profilePic || userImage
                    }
                  />
                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>
              <div className="chat-bubble flex flex-col">
                {message.image && (
                  <img
                    src={message.image}
                    className="sm:max-w-[200px] rounder-md mb-2"
                  />
                )}
                {message.text && <p>{message.text}</p>}
              </div>
            </div>
          );
        })}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
