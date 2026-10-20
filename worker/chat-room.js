export class ChatRoom {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.sessions = new Map();
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/ws") {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);
      
      this.state.acceptWebSocket(server);
      
      const userId = url.searchParams.get("userId") || "unknown";
      this.sessions.set(server, { userId, lastSeen: Date.now() });

      return new Response(null, { status: 101, webSocket: client });
    }

    if (url.pathname === "/broadcast" && request.method === "POST") {
      const data = await request.json();
      this.broadcast(data);
      return new Response("OK", { status: 200 });
    }

    return new Response("Not Found", { status: 404 });
  }

  broadcast(message) {
    const msgStr = JSON.stringify(message);
    for (const ws of this.state.getWebSockets()) {
      try {
        ws.send(msgStr);
      } catch (err) {}
    }
  }

  async webSocketMessage(ws, message) {
    try {
      const data = JSON.parse(message);
      if (data.type === "typing") {
        this.broadcast({ type: "typing", userId: data.userId });
      }
      if (data.type === "read") {
        this.broadcast({ type: "read", messageId: data.messageId, userId: data.userId });
      }
    } catch (err) {}
  }

  async webSocketClose(ws, code, reason, wasClean) {
    this.sessions.delete(ws);
    try { ws.close(code, "Closed"); } catch (e) {}
  }

  async webSocketError(ws, error) {
    this.sessions.delete(ws);
  }
}
