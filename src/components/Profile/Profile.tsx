import React from "react";
import s from "./Profile.module.css"
import avatar from "../../media/avatar.jpg"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionType, profilePageType} from "../../redux/state";
import {PostsContainer} from "./Posts/PostsContainer";

type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: actionType) => void
}
export function Profile(props: ProfilePropsType) {

    return <div className={s.Profile}>
        <ProfileInfo img={avatar} profileName={'Yulia Dovgun'} description={'Frontend developer'}/>
        <PostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
}

