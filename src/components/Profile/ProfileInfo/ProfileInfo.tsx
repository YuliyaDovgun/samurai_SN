import React from "react";
import s from "./ProfileInfo.module.css"

type ProfileInfoPropsType = {
    img: string
    profileName: string
    description: string
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return <div className={s.ProfileInfo}>
        <img alt={'avatar'} src={props.img}/>
        <h3 className={s.profileName}>{props.profileName}</h3>
        <div className={s.profileDescription}>{props.description}</div>
    </div>
}