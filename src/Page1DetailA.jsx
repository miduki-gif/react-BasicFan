import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
    //useLocationでStateの値を取得することができる
    const state = useLocation();
    console.log(state);

    const navigate = useNavigate();
    //遷移元に戻る
    const onClickBack = () => navigate(-1);
    
    return(
        <div>
            <h1>Page1DetailAページです</h1>
            <button onClick={onClickBack}>戻る</button>
        </div>
    );
};