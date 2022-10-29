import { createContext, useState } from "react";

const SearchVisibilityContext = createContext();

export function SearchVisibilityProvider({ children }) {
  const [visible, setVisible] = useState(false);
  return (
    <SearchVisibilityContext.Provider value={{ visible, setVisible }}>
      {children}
    </SearchVisibilityContext.Provider>
  );
}

export default SearchVisibilityContext;
