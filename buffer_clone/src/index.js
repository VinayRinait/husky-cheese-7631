import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { Provider } from "react-redux";
import { store } from "./store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
=======
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>


>>>>>>> a7fd4489a1e59db3ffb9ce730d3d0a6b19006b72
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StyledEngineProvider injectFirst>
//     <CssVarsProvider>
//       <BrowserRouter>
//         <ChakraProvider>
//           <App />
//         </ChakraProvider>
//       </BrowserRouter>
//     </CssVarsProvider>
//   </StyledEngineProvider>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
