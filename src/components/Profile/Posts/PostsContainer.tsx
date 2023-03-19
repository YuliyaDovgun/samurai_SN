import {addPostAC, setPostTextAC} from "../../../redux/profilePageReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType) => {
   return {
      posts: state.profilePage.posts,
      postText: state.profilePage.postText
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      onAddPostHandler: (postText: string) => dispatch(addPostAC(postText)),
      onChangePostTextHandler: (postText: string) => dispatch(setPostTextAC(postText))
   }
}
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)