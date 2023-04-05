import React from "react";
import {Profile} from "./Profile"
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/store";
import {setProfileInfo} from "../../redux/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type mathParamType = {
    userId?: string
}
type mapStatePropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = typeof mapDispatchToProps

type ProfileContainerPropsType = mapStatePropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<mathParamType> & ProfileContainerPropsType
const mapStateToProps = (state: AppStateType) => ({
    profileInfo: state.profilePage.profileInfo
})
const mapDispatchToProps = {
    setProfileInfo
}
class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.profileInfo?.userId.toString()
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setProfileInfo(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profileInfo={this.props.profileInfo}/>
    }
}

// @ts-ignore
const ProfileContainerWithRouter: ProfileContainerWithRouterType = withRouter(ProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithRouter)