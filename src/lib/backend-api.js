// services/api.js
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://dev.quantumsenses.com:8000";

export const authService = {
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(credentials),
      });

      // Handle non-JSON responses gracefully
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(
          "Expected JSON response, received HTML or other format."
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || data.message || "Login failed");
      }

      if (data.access) {
        localStorage.setItem("authToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
      }

      if (data.username) {
        const userData = {
          username: data.username,
          email: data.email,
          firstName: data.first_name,
          lastName: data.last_name,
          deployed: data.deployed,
          undeployed: data.undeployed,
        };
        localStorage.setItem("user", JSON.stringify(userData));
      }

      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  logout: async () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  },

  refreshToken: async () => {
    const refresh = localStorage.getItem("refreshToken");
    const response = await fetch(`${API_URL}/auth/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Token refresh failed");
    localStorage.setItem("authToken", data.access);
    return data.access;
  },

  fetchWithAuth: async (endpoint, options = {}) => {
    let token = authService.getToken();
    let headers = {
      ...options.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });
    if (response.status === 401) {
      token = await authService.refreshToken();
      headers["Authorization"] = `Bearer ${token}`;
      return fetch(`${API_URL}${endpoint}`, { ...options, headers });
    }
    return response;
  },

  getCurrentUser: () => JSON.parse(localStorage.getItem("user") || "null"),
  getToken: () => localStorage.getItem("authToken"),
  isAuthenticated: () => !!localStorage.getItem("authToken"),
};

export default authService;
