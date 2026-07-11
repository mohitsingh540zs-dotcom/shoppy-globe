import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import router from "./routes/router";
import './index.css'
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);