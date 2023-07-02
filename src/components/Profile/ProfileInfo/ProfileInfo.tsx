import React from "react";
import s from "./ProfileInfo.module.css"
import {profileInfoType} from "../../../redux/profilePageReducer";
import avatar from "./../../../media/avatar.jpg"

type ProfileInfoPropsType = {
    profileInfo: profileInfoType | null
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return <div className={s.ProfileInfo}>
        <img alt={'avatar'} src={props.profileInfo?.photos.large ? props.profileInfo.photos.large :avatar}/>
        <h3 className={s.profileName}>{props.profileInfo ? props.profileInfo.fullName : 'Yuliya Dovgun'}</h3>
        <div className={s.profileDescription}>{props.profileInfo ? props.profileInfo.aboutMe : 'Super'}</div>
    </div>
}