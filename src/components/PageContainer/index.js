import React, { useState } from "react";
import NavBar from "../NavBar";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function PageContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default PageContainer;
