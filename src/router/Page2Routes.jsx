import { Page2 } from "../Page2";
import { UrlPrameter } from "../UrlPrameter";

export const page2Routes = [
    {
        path: "/",
        //実際にレンダリングしていくコンポーネント
        children: <Page2 />
    },
    {
        //UrlprameterでPathを設定している。
        path: "/:id",
        children: <UrlPrameter />
    },
];
