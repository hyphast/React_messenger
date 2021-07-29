import React from "react";
import ProfileInfoStyles from "../ProfileInfo.module.scss";
import Button from "../../../Common/Button/Button";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {savePhoto, saveProfile, setUserFollow, setUserUnfollow} from "../../../../redux/profileReducer";
import {EditPhotoModal} from "./EditPhotoModal";
import EditInfoModal from "./EditInfoModal";

class ProfileActions extends React.Component {
  state = {
    isOpenEditPhoto: false,
    isOpenEditInfo: false
  }

  toggleEditPhoto = () => {
    debugger
    this.setState({
      isOpenEditPhoto: !this.state.isOpenEditPhoto
    })
  }

  toggleEditInfo = () => {
    this.setState({
      isOpenEditInfo: !this.state.isOpenEditInfo
    })
  }

  render() {
    return (
      <>
        {!this.props.isOwner
          ?
            <div className={ProfileInfoStyles.btn}>
              {this.props.isFollowing
                ? <Button onClick={() => this.props.setUserUnfollow(this.props.profile.userId)}>Unfollow</Button>
                : <Button onClick={() => this.props.setUserFollow(this.props.profile.userId)}>Follow</Button>
              }
            </div>
          :
          <div>
              <EditPhotoModal
                text='Edit profile photo' onClick={this.toggleEditPhoto} iconName={faEdit}
                modalTitle='Edit profile photo' isOpen={this.state.isOpenEditPhoto} onCancel={this.toggleEditPhoto}
                savePhoto={ this.props.savePhoto }
              />
              <EditInfoModal
                text='Edit profile info' onClick={this.toggleEditInfo} iconName={faEdit}
                modalTitle='Edit profile info' isOpen={this.state.isOpenEditInfo} onCancel={this.toggleEditInfo}
                profile={this.props.profile} saveProfile={this.props.saveProfile}
              />
          </div>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFollowing: state.ProfilePage.isFollowing,
    profile: state.ProfilePage.profile,
  }
}

export default connect(mapStateToProps, { setUserFollow, setUserUnfollow, savePhoto, saveProfile })(ProfileActions);