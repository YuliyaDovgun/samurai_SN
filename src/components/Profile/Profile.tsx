import React from "react";
import s from "./Profile.module.css"
import avatar from "../../media/avatar.jpg"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";

export function Profile() {

    return <div className={s.Profile}>
        <ProfileInfo img={avatar} profileName={'Yulia Dovgun'} description={'Frontend developer'}/>
        <PostsContainer/>
    </div>
}

