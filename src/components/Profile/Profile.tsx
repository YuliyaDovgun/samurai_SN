import React from "react";
import s from "./Profile.module.css"
import avatar from "../../media/avatar.jpg"
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../index";

type ProfilePropsType = {
    posts: postsType[]
}
export function Profile(props: ProfilePropsType) {

    return <div className={s.Profile}>
        <ProfileInfo img={avatar} profileName={'Yulia Dovgun'} description={'Frontend developer'}/>
        <Posts posts={props.posts}/>
    </div>
}

