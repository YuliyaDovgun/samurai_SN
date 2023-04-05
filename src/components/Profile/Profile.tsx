import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {profileInfoType} from "../../redux/profilePageReducer";
type ProfilePropsType = {
    profileInfo: profileInfoType | null
}
export function Profile(props: ProfilePropsType) {

    return <div className={s.Profile}>
        <ProfileInfo profileInfo={props.profileInfo}/>
        <PostsContainer/>
    </div>
}

