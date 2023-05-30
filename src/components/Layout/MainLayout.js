import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import Footer from "./Footer";
const MainLayout = ({ children }) => {
  return (
    <div className="font-raleway">
      <TopNav />
      <BottomNav />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
