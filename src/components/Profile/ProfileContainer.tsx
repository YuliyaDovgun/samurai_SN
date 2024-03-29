import React from "react";
import {Profile} from "./Profile"
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {fetchProfileInfoTC} from "../../redux/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.profileInfo?.userId.toString()
        }
        if (typeof userId === "string") {
            this.props.fetchProfileInfoTC(userId)
        }
    }

    render() {
        return <Profile {...this.props} profileInfo={this.props.profileInfo}/>
    }
}
const mapStateToProps = (state: AppStateType) => ({
    profileInfo: state.profilePage.profileInfo
})
const mapDispatchToProps = {
    fetchProfileInfoTC
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer)

export type mathParamType = {
    userId?: string
}
type mapStatePropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = typeof mapDispatchToProps

type ProfileContainerPropsType = RouteComponentProps<mathParamType> & mapStatePropsType & mapDispatchToPropsType
