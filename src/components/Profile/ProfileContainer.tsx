import React from "react";
import {Profile} from "./Profile"
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/store";
import {setProfileInfo} from "../../redux/profilePageReducer";

type mapStatePropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = typeof mapDispatchToProps
type ProfileContainerPropsType = mapStatePropsType & mapDispatchToProps
const mapStateToProps = (state: AppStateType) => ({
    profileInfo: state.profilePage.profileInfo
})
const mapDispatchToProps = {
    setProfileInfo
}
class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setProfileInfo(response.data)
                console.log(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profileInfo={this.props.profileInfo}/>
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)