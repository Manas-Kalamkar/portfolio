import { Children, useEffect } from "react";
import { createContext, useContext, useState } from "react";

const DarkLightThemeContext = createContext();

const DarkLightThemeProvider = ({ children }) => {
    const [isDark, setisDark] = useState(true);

    useEffect(()=>{
        if(isDark){
            document.body.classList.add("dark");
            document.body.classList.remove("light")
        }else{
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    },[isDark])
    
    return(
    <DarkLightThemeContext.Provider value={{isDark,setisDark}}>
        {children}
    </DarkLightThemeContext.Provider>
)
}

export const useDarkLightThemeContext = () => useContext(DarkLightThemeContext);

export default DarkLightThemeProvider;