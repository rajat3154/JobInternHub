import Notification from '../models/Notification.js';

// Create a new notification
export const createNotification = async (recipientId, senderId, type, title, message) => {
  try {
    console.log('Creating notification with data:', {
      recipientId,
      senderId,
      type,
      title,
      message
    });
    
    const notification = await Notification.create({
      recipient: recipientId,
      sender: senderId,
      type,
      title,
      message
    });
    
    console.log('Notification created successfully:', notification);
    return notification;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

// Get notifications for a user
export const getUserNotifications = async (req, res) => {
  try {
    console.log('User from request:', req.user);
    console.log('User ID:', req.user._id);
    console.log('User type:', req.user.constructor.modelName);
    
    const notifications = await Notification.find({ recipient: req.user._id })
      .sort({ createdAt: -1 })
      .populate('sender', 'username profilePicture');
    
    console.log('Found notifications:', notifications);
    console.log('Notification count:', notifications.length);
    
    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: error.message });
  }
};

// Mark notification as read
export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.notificationId,
      { read: true },
      { new: true }
    );
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Clear all notifications for a user
export const clearAllNotifications = async (req, res) => {
  try {
    await Notification.deleteMany({ recipient: req.user._id });
    res.status(200).json({ message: 'All notifications cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 