// api.js
const API_URL = "http://localhost:8000/api/friends/";
let token = JSON.parse(localStorage.getItem("authTokens"));

export async function fetchData() {
  try {
    let res = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token.access), // Added a space after "Bearer"
      },
    });
    let data = await res.json();
    if (res.status === 200) {
      return data;
    }else{
      throw new Error(`Error fetching data: ${res.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
