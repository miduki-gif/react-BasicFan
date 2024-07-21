import { useParams, useLocation} from "react-router-dom";

export const UrlPrameter = () => {
    //idはPathのパラメーター名
    const { id } = useParams();
    //queryパラメータを扱う
    const { search } = useLocation();
    //useLocationのオブジェクトの中のプロパティとしてsearchがある
    //URLSearchParamsというjsのメソッドの引数にsearchを持たせている
    const query = new  URLSearchParams(search);
    console.log(query);
    return(
        <div>
            <h1>UrlPrameterページです</h1>
            <p>パラメーターは{id}です</p>
            <p>クエリパラメーターは{query.get("name")}です</p>
        </div>
    );
};