import React, {FC} from "react";
import {userDomainType} from "../../redux/usersReducer";
import s from "./User.module.css"
import avatar from "../../media/avatar.jpg"
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: userDomainType
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

export const User: FC<UserPropsType> = ({user, follow, unFollow}) => {
    const followBtnHandler = (userId: string) => {
        follow(userId)
    }
    const unFollowBtnHandler = (userId: string) => {
       unFollow(userId)
    }
    return <div className={s.userContainer}>
        <div className={s.imgBtnContainer}>
            <NavLink to={'/profile/' + user.id}><img src={user.photos.small ? user.photos.small : avatar} alt={'avatar'}/></NavLink>
            {user.followed
                ? <button onClick={() => unFollowBtnHandler(user.id)} disabled={user.userEntityStatus === 'loading'}>unFollow</button>
                : <button onClick={() => followBtnHandler(user.id)} disabled={user.userEntityStatus === 'loading'}>follow</button>}
        </div>
        <div className={s.infoContainer}>
            <div>
                <span>{user.name}</span>
                <span>{" user.address.country" + ", " + "user.address.city"}</span>
            </div>
            <div>
                {user.status}
            </div>
        </div>
    </div>
}