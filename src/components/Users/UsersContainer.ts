import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountUsersAC,
    setUsersAC,
    unFollowAC,
    userType
} from "../../redux/usersReducer";
export type mapStateToPropsUsersType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsUsersType = ReturnType<typeof mapDispatchToProps>
const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.users.users,
        page: state.users.page,
        totalCount: state.users.totalCount,
        countOnThePage: state.users.countOnThePage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number | string) => dispatch(followAC(userId)),
        unFollow: (userId: number | string) => dispatch(unFollowAC(userId)),
        setUsers: (users: userType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalCountUsersAC: (totalCount: number) => {dispatch(setTotalCountUsersAC(totalCount))}
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)