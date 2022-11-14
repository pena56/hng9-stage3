import { useState, useContext, createContext } from "react";

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export default function LayoutProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = {
    isSidebarOpen,
    isModalOpen,
    toggleSideBar: () => {
      setIsSidebarOpen((prev) => !prev);
    },
    toggleModal: () => {
      setIsModalOpen((prev) => !prev);
    },
  };

  return (
    <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>
  );
}
