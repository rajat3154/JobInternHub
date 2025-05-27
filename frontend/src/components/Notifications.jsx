import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import {
  Bell,
  CheckCircle,
  Zap,
  Briefcase,
  X,
  AlertCircle,
  UserPlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useSocket } from "../context/SocketContext";
import { toast } from "react-hot-toast";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const socket = useSocket();

  // Memoize the notification handler to prevent duplicate listeners
  const handleNewNotification = useCallback((notification) => {
    console.log("Received new notification:", notification);
    setNotifications((prev) => {
      // Check if notification already exists by ID
      const exists = prev.some(n => n._id === notification._id);
      if (exists) {
        console.log("Notification already exists, not adding");
        return prev;
      }
      console.log("Adding new notification to state");
      return [notification, ...prev];
    });
    toast.success("New notification received!");
  }, []);

  // Socket event handling
  useEffect(() => {
    if (!socket) return;

    console.log("Setting up socket listeners");
    
    // Remove any existing listeners
    socket.off("newNotification");
    
    // Add new notification listener
    socket.on("newNotification", handleNewNotification);

    // Cleanup
    return () => {
      console.log("Cleaning up socket listeners");
      socket.off("newNotification", handleNewNotification);
    };
  }, [socket, handleNewNotification]);

  // Initial data fetch
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      console.log("Fetching notifications...");
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`${API_BASE_URL}/api/notifications`, {
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      console.log("Fetched notifications response:", response);
      
      if (response.data && Array.isArray(response.data)) {
        // Remove any duplicate notifications by ID
        const uniqueNotifications = response.data.reduce((acc, current) => {
          const exists = acc.find(item => item._id === current._id);
          if (!exists) {
            acc.push(current);
          }
          return acc;
        }, []);
        
        console.log("Setting unique notifications:", uniqueNotifications);
        setNotifications(uniqueNotifications);
      } else {
        console.error("Invalid notifications data format:", response.data);
        setError("Invalid response format from server");
        toast.error("Failed to load notifications");
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        setError(error.response.data.message || "Failed to fetch notifications");
      } else {
        setError("Failed to connect to server");
      }
      toast.error("Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      await axios.patch(`${API_BASE_URL}/api/notifications/${id}/read`, {}, {
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setNotifications(
        notifications.map((n) => (n._id === id ? { ...n, read: true } : n))
      );
      toast.success("Marked as read");
    } catch (error) {
      console.error("Error marking notification as read:", error);
      toast.error("Failed to mark notification as read");
    }
  };

  const clearAll = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/api/notifications/clear-all`, {
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setNotifications([]);
      toast.success("All notifications cleared");
    } catch (error) {
      console.error("Error clearing notifications:", error);
      toast.error("Failed to clear notifications");
    }
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "job":
        return <Briefcase className="h-6 w-6 text-blue-400" />;
      case "application":
        return <Zap className="h-6 w-6 text-green-400" />;
      case "follow":
        return <UserPlus className="h-6 w-6 text-purple-400" />;
      default:
        return <AlertCircle className="h-6 w-6 text-yellow-400" />;
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading notifications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={fetchNotifications} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Layer */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <Bell className="h-8 w-8 text-purple-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Notifications
            </h1>
          </div>
          {notifications.length > 0 && (
            <Button
              onClick={clearAll}
              variant="ghost"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Clear All
            </Button>
          )}
        </motion.div>

        {/* Notifications List */}
        <AnimatePresence>
          {notifications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-400"
            >
              No new notifications
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {notifications.map((notification) => (
                <motion.div
                  key={notification._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`p-4 rounded-lg border ${
                    notification.read
                      ? "border-gray-700 bg-gray-800/50"
                      : "border-purple-500/50 bg-purple-900/20"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {getNotificationIcon(notification.type)}
                      <div>
                        <p className="font-medium text-white">
                          {notification.title}
                        </p>
                        <p className="text-gray-400 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                          {formatTimestamp(notification.createdAt)}
                        </p>
                      </div>
                    </div>
                    {!notification.read && (
                      <Button
                        onClick={() => markAsRead(notification._id)}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Notifications;
