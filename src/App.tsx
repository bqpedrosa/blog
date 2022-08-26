import React from "react";
import { useRoutes } from "react-router-dom";

import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { PostPage } from "./components/PostPage/PostPage";

const About: React.FC = () => {
  return (
    <div style={{ padding: "16px", color: "#fff" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui eros,
      feugiat vitae mauris sed, sodales gravida augue. Morbi eu efficitur massa.
      Maecenas tincidunt pulvinar libero, pellentesque mollis elit tincidunt a.
      Vivamus a arcu vel neque scelerisque luctus rhoncus id nunc. Etiam eu
      accumsan diam. Vivamus ultricies ex tempus, condimentum odio non, placerat
      augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Nulla non egestas magna. Aenean et consectetur
      ligula. Aenean sit amet nisi interdum nibh faucibus ornare vitae eget
      libero. Aenean justo libero, laoreet eget elit eget, convallis scelerisque
      nisi. Nam euismod, tellus vitae aliquet pretium, nibh ex sodales mi, et
      molestie nisl augue nec orci. Aliquam nibh dolor, porttitor quis erat sit
      amet, porta lobortis magna.
    </div>
  );
};

const ContactUs: React.FC = () => {
  return (
    <div style={{ padding: "16px", color: "#fff" }}>
      <h1>Contact us</h1>
    </div>
  );
};

const App: React.FC = () => {
  const routes = useRoutes([
    { path: "/", element: <PostPage /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <ContactUs /> },
  ]);

  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
};

export default App;
