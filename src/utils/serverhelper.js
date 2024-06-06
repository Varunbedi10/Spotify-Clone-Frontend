import { backendUrl } from "./config";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  try {
    const response = await fetch(backendUrl + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const formattedResponse = await response.json();
    return formattedResponse;
  } catch (error) {
    console.error("Error in makeUnauthenticatedPOSTRequest:", error);
    throw error;
  }
};
