import { createContext } from "react";

export const  LoginContext = createContext({});


// Create context API step by step

// 1) createConterxt => const  LoginContext = createContext({}) 
// 2) LoginContext.provider to be use in APP.js ( wrap it in HOC- Higher order component)
// 3) a) import the LoginContext  & useContext => Eg:- const {username, setShowProfile} = useContext(LoginContext)