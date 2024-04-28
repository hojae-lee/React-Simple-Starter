import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { RecoilRoot } from "recoil";
import { store } from "./store/index.js";
import { Provider } from "react-redux";

import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </Provider>
  </React.StrictMode>
);
