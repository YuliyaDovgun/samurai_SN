import React from "react";
import {userType} from "../../redux/usersReducer";
import {v1} from "uuid";
import photo from "./../../media/avatar.jpg"
import {User} from "./User";

type UsersPropsType = {
    users: userType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: userType[]) => void
}
export const Users: React.FC<UsersPropsType> = ({users, follow, unFollow, setUsers}) => {
    if (users.length === 0) {
        setUsers([
            {
                id: v1(),
                photo: photo,
                followed: true,
                fullName: "Yuliya Dovgun",
                status: "I'm frontend developer",
                address: {country: "Belarus", city: "Minsk"}
            },
            {
                id: v1(),
                photo: photo,
                followed: false,
                fullName: "Super model",
                status: "I'm super-puper from Paris",
                address: {country: "Belarus", city: "Paris"}
            },
            {
                id: v1(),
                photo: photo,
                followed: true,
                fullName: "AKA_48",
                status: "777",
                address: {country: "Russia", city: "Moscow"}
            }])
    }
    return <div>
        {users.map(u => <User user={u} follow={follow} unFollow={unFollow}/>)}
    </div>
}
