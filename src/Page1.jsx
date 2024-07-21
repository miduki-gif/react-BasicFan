import { Link,Outlet } from "react-router-dom";

export const Page1 = () => {
    const arr = [...Array(100).keys()];
    console.log(arr);
    return(
        <div>
            <h1>Page1ページです</h1>
            <nav>
                <Link to={{ pathname: "detailA", state: arr }}>DetailA</Link>
            <br/>
                <Link to="detailB">DetailB</Link>
            </nav>
            <Outlet />
        </div>
    );
};