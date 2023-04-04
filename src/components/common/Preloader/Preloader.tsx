import style from "./Preloader.module.css";
import preloader from "../../../media/preloader.webp";
import React from "react";

export const Preloader = () => {
    return <>
        <img className={style.Preloader} src={preloader} alt={'preloader'}/>
    </>
}