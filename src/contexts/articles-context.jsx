// import { createContext, useEffect, useState } from "react";
// import { fetchAllArticles } from "../utils/api-calls";

// export const ArticlesContext = createContext();

// export const ArticlesProvider = ({ children }) => {
    // const [articles, setArticles] = useState([]);
    
  // useEffect(() => {
  //   console.log("test")
  //   fetchAllArticles()
  //     .then((articles) => {
  //       setArticles(articles);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
//   return (
//     <ArticlesContext.Provider value={{ articles, setArticles }}>
//       {children}
//     </ArticlesContext.Provider>
//   );
// };
