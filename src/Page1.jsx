import { Link, useNavigate, Outlet } from "react-router-dom";

export const Page1 = () => {
    const arr = [...Array(100).keys()];
    console.log(arr);

    const navigate = useNavigate();

    const onClickDetailA = () =>{
        navigate("detailA");
    }

    return(
        <div>
            <h1>Page1ページです</h1>
            <nav>
                 {/* stateでルーティング時に情報の受け渡しができる */}
                <Link to="detailA" state={{arry: arr}}>DetailA</Link>
            <br/>
                <Link to="detailB">DetailB</Link>
                <br />
                <button onClick={onClickDetailA}>DetailA</button>
            </nav>
            <Outlet />
        </div>
    );
};