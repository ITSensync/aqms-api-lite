/* eslint-disable node/no-process-env */
/* eslint-disable no-console */
import { WebSocketServer } from "ws";
import { particulateService } from "../services/particulate.service.js";

function initWebSocket(server) {
  const wss = new WebSocketServer(server);

  wss.on("connection", (ws) => {
    console.info("New Client Connected");

    let interval = null;

    /* SEND DATA */
    const sendLatestData = async () => {
      try {
        /* GET LATEST DATA */
        const latestSensorData = await particulateService.getLast();
        const result = latestSensorData.data;

        ws.send(JSON.stringify(result));
      }
      catch (error) {
        ws.send(JSON.stringify({
          message: "Error Fetching latest particulate data:",
          error,
        }));
      }
    };

    ws.on("message", () => {
      try {
        clearInterval(interval);
        sendLatestData();
        interval = setInterval(sendLatestData, 2 * 60 * 1000);
      }
      // eslint-disable-next-line unused-imports/no-unused-vars
      catch (error) {
        ws.send(JSON.stringify({ type: "error", message: "Invalid message format" }));
      }
    });

    ws.on("close", () => {
      console.info("Client Disconnectd");
      clearInterval(interval);
    });
  });

  console.log(`WebSocket server initialize on ws://localhost:${process.env.WS_PORT}`);
};

export const particulateGateway = {
  initWebSocket,
};
