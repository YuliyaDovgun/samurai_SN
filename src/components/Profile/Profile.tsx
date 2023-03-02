import React from "react";
import s from "./Profile.module.css"
import avatar from "../../media/avatar.jpg"
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionType, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: actionType) => void
}
export function Profile(props: ProfilePropsType) {

    return <div className={s.Profile}>
        <ProfileInfo img={avatar} profileName={'Yulia Dovgun'} description={'Frontend developer'}/>
        <Posts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
}

