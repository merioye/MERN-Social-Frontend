import React, { useState, useRef } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [profilePosts, setProfilePosts] = useState([]);
    const [newPostsAvailable, setNewPostsAvailable] = useState(false);

    const [user, setUser] = useState(undefined);

    const [selectedConversationId, setSelectedConversationId] = useState(null);
    const [selectedConversationInfo, setSelectedConversationInfo] =
        useState("");
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    // state that will contain a boolean to show either any user is typing or not to send message to anyone
    const [isTyping, setIsTyping] = useState([]);
    // state that will contain the conversationIds to whom the user is typing a message
    const [typingChatIds, setTypingChatIds] = useState({});
    const [isRecording, setIsRecording] = useState([]);
    const [recordingChatIds, setRecordingChatIds] = useState({});
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [chatHistoryFetched, setChatHistoryFetched] = useState(false);

    const [notifications, setNotifications] = useState([]);
    const [moreNotificationsToSkip, setMoreNotificationsToSkip] = useState(0);
    const [messagesNotifications, setMessagesNotifications] = useState([]);
    const [unreadNotificationsPresent, setUnreadNotificationsPresent] =
        useState(false);
    const [unreadMessagesPresent, setUnreadMessagesPresent] = useState(false);

    const socketRef = useRef(null);

    return (
        <Context.Provider
            value={{
                posts,
                setPosts,
                user,
                setUser,
                profilePosts,
                setProfilePosts,
                socketRef,
                onlineUsers,
                setOnlineUsers,
                isTyping,
                setIsTyping,
                typingChatIds,
                setTypingChatIds,
                selectedConversationId,
                setSelectedConversationId,
                selectedConversationInfo,
                setSelectedConversationInfo,
                chats,
                setChats,
                messages,
                setMessages,
                isRecording,
                setIsRecording,
                recordingChatIds,
                setRecordingChatIds,
                chatHistoryFetched,
                setChatHistoryFetched,
                notifications,
                setNotifications,
                moreNotificationsToSkip,
                setMoreNotificationsToSkip,
                unreadNotificationsPresent,
                setUnreadNotificationsPresent,
                unreadMessagesPresent,
                setUnreadMessagesPresent,
                messagesNotifications,
                setMessagesNotifications,
                newPostsAvailable,
                setNewPostsAvailable,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;
