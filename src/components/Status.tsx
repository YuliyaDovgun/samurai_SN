import React from "react";
import s from "../../src/components/Profile/ProfileInfo/ProfileInfo.module.css";
import {profileInfoType} from "../redux/profilePageReducer";

type StatusPropsType = {
    profileInfo: profileInfoType | null
}

export class Status extends React.Component<StatusPropsType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
                editMode: true
            }
        )
    }

    deActivateEditMode() {
        this.setState({
                editMode: false
            }
        )
    }

    render() {
        const status = this.props.profileInfo?.aboutMe ? this.props.profileInfo.aboutMe : 'Super'

        return <div>
            {!this.state.editMode
                ? <div onDoubleClick={this.activateEditMode.bind(this)} className={s.profileDescription}>{status}</div>
                : <input autoFocus onBlur={this.deActivateEditMode.bind(this)} value={status}/>
            }
        </div>
    }
}