import { createContext} from "react";
import useFetchData from "../hooks/useFetchData";
import useFilter from "../hooks/useFilter";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = useFetchData(); // Using a custom hook (useFetchData) to     fetch data only once when the app first runs

  const { movies, series, mixed } = useFilter(data); // Using another custom hook (useFilter) which accepts an array "data" and returns 3 filtered arrays out of "data" array: movies, series, and the first 21 entries using the array.slice() method (check useFilter.js)

  return (
    // Passing movies, series, and mixed arrays to provider, so we can consume data inside all nested components including "Main.js" "Movies.js" and "Series.js"
    <DataContext.Provider value={{ movies, series, mixed }}>
      {children}
    </DataContext.Provider>
  );
};