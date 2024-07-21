import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
    {
        path: "/",
        //実際にレンダリングしていくコンポーネント
        children: <Page1 />
    },
    {
        path: "detailA",
        children: <Page1DetailA />
    },
    {
        path: "detailB",
        children: <Page1DetailB />
    },
];
