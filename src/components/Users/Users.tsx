import React from "react";
import {userType} from "../../redux/usersReducer";
import {User} from "./User";
import axios from "axios";

type UsersPropsType = {
    users: userType[]
    follow: (userId: number | string) => void
    unFollow: (userId: number | string) => void
    setUsers: (users: userType[]) => void
}
export const Users: React.FC<UsersPropsType> = ({users, follow, unFollow, setUsers}) => {
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
        setUsers(response.data.items))
    }
    return <div>
        {users.map(u => <User key={u.id} user={u} follow={follow} unFollow={unFollow}/>)}
    </div>
}
