import CommonHeader from "./commonHeader"
import { Outlet } from "react-router-dom"

export default function SecondaryHome(){

    return(
        <>
        <CommonHeader></CommonHeader>
        <Outlet></Outlet>
        </>
    )
}