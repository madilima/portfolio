import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { App as AntdApp, ConfigProvider, theme } from "antd";

import "./global.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      algorithm:theme.darkAlgorithm
    }}>
     <BrowserRouter basename="/portfolio">
     <AntdApp>
        <App />
      </AntdApp>
     </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
