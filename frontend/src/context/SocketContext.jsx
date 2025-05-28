import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-hot-toast';
import { useAuth } from './AuthContext';
import axios from 'axios';

const SocketContext = createContext(null);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    console.log('SocketProvider: Initializing socket connection...');
    console.log('Current user:', user);

    if (!user) {
      console.log('No user found, skipping socket connection');
      return;
    }

    const initializeSocket = async () => {
      try {
        // First, verify the auth status to ensure we have a valid session
        const response = await axios.get('http://localhost:8000/api/v1/check-auth', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.data.success) {
          console.log('Auth check failed, skipping socket connection');
          return;
        }

        // Get token from the auth check response
        const token = response.data.data.token;
        if (!token) {
          console.log('No token found in auth response, skipping socket connection');
          return;
        }

        console.log('Auth check successful, connecting to socket...');
        const newSocket = io('http://localhost:8000', {
          auth: {
            token: token
          },
          withCredentials: true,
          reconnection: true,
          reconnectionAttempts: 5,
          reconnectionDelay: 1000,
          transports: ['websocket', 'polling']
        });

        newSocket.on('connect', () => {
          console.log('Socket connected successfully!');
          console.log('Socket ID:', newSocket.id);
          toast.success('Connected to real-time notifications');
        });

        newSocket.on('connect_error', (error) => {
          console.error('Socket connection error:', error);
          toast.error('Failed to connect to real-time notifications');
        });

        newSocket.on('error', (error) => {
          console.error('Socket error:', error);
          toast.error('Real-time notification error');
        });

        newSocket.on('disconnect', (reason) => {
          console.log('Socket disconnected:', reason);
          if (reason === 'io server disconnect') {
            // Server initiated disconnect, try to reconnect
            newSocket.connect();
          }
        });

        // Listen for new notifications
        newSocket.on('newNotification', (notification) => {
          console.log('Received new notification:', notification);
          toast.success('New notification received!');
        });

        setSocket(newSocket);

        return () => {
          console.log('Cleaning up socket connection...');
          if (newSocket) {
            newSocket.close();
          }
        };
      } catch (error) {
        console.error('Error initializing socket:', error);
        toast.error('Failed to initialize real-time notifications');
      }
    };

    initializeSocket();
  }, [user]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}; 