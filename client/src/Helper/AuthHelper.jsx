import axios from "axios";
/** make api request */

export async function login(data) {
  try {
    return await axios.post("http://localhost:3000/api/login", data);
  } catch (error) {
    return { error: "Username doesn't exist" };
  }
}

/**get user details */
export async function getUser({ id }) {
  try {
    const { data } = await axios.get(`/api/user/${id}`);
    return { data };
  } catch (error) {
    return { error: "Password Doesn't match." };
  }
}

/**GET user with token */
export async function getUserToken() {
  try {
    const token = localStorage.getItem("token");
    const data = await axios.get("http://localhost:3000/api/token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return { error: "Token Doesn't match." };
  }
}

/**register user function */
export async function registerUser(credentials) {
  try {
    return await axios.post(`http://localhost:3000/api/register`, credentials);
  } catch (error) {
    return Promise.reject({ error });
  }
}

/**Login function */
export async function verifyPassword({ email, password }) {
  try {
    if (email) {
      const { data } = await axios.post(`/api/login`, { email, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password Doesnot match" });
  }
}

/**update user function */
export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.put("/api/updateuser", response, {
      headers: { Authorization: `${token}` },
    });
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldnot update user." });
  }
}
