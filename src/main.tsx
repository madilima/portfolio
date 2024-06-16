import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { App as AntdApp, ConfigProvider, theme } from "antd";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      algorithm:theme.darkAlgorithm
    }}>
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>
  </React.StrictMode>
);
