import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, userType} from "../../redux/usersReducer";
const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number | string) => dispatch(followAC(userId)),
        unFollow: (userId: number | string) => dispatch(unFollowAC(userId)),
        setUsers: (users: userType[]) => dispatch(setUsersAC(users))
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)