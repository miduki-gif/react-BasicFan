import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            {/* 親ルートのPathを子ルートに配下として持たせるには*を末尾につける */}
            <Route path="/page1/*" element={
                 <Routes>
                    {page1Routes.map((route) => (
                       <Route key={route.path} path={route.path} element={route.children}/> 
                    ))}
                </Routes>
            } />
           <Route path="/page2/*" element={
                 <Routes>
                    {page2Routes.map((route) => (
                       <Route key={route.path} path={route.path} element={route.children}/> 
                    ))}
                </Routes>
            } />
            {/**はすべて一致*/}
            <Route path="*" element={<Page404 /> } />
      </Routes>
    );
};