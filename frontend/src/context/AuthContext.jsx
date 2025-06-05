import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="));

        // ✅ If no token, or user is already admin (from login), skip
        if (!token || user?.role === "admin") {
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "http://localhost:8000/api/v1/check-auth",
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          setUser(response.data.data);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [user?.role]); // ⬅ make sure useEffect triggers only once and respects user.role

  const login = async (email, password, role) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login response:", response.data);
      if (response.data.success) {
        setUser(response.data.user);
        return { success: true };
      }
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = async () => {
    try {
      await axios.get("http://localhost:8000/api/v1/logout", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Logout failed",
      };
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
