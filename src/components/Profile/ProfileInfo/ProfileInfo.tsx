import React from "react";
import s from "./ProfileInfo.module.css"
import {profileInfoType} from "../../../redux/profilePageReducer";
import avatar from "../../media/avatar.jpg";

type ProfileInfoPropsType = {
    profileInfo: profileInfoType | null
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    debugger
    return <div className={s.ProfileInfo}>
        <img alt={'avatar'} src={props.profileInfo ? props.profileInfo.photos.small : 'https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg'}/>
        <h3 className={s.profileName}>{props.profileInfo ? props.profileInfo.fullName : 'Yuliya Dovgun'}</h3>
        <div className={s.profileDescription}>{props.profileInfo ? props.profileInfo.aboutMe : 'Super'}</div>
    </div>
}