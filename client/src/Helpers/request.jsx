class Request {
  async get(url) {
    const result = await fetch(url);
    return result.json();
  }

  async patch(url, payload) {
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data:", errorData);
      }

      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default Request;
