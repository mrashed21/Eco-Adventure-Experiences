/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const CategoryContext = createContext();
const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
