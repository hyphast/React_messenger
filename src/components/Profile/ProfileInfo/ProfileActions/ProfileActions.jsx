import React from "react";
import ProfileInfoStyles from "../ProfileInfo.module.scss";
import Button from "../../../Common/Button/Button";
import Icon from "../../../Common/Icon/Icon";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {savePhoto, setUserFollow, setUserUnfollow} from "../../../../redux/profileReducer";
import Modal from "../../../Common/Modal/Modal";

class ProfileActions extends React.Component {
  state = {
    isOpen: false
  }

  toggleEdit = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onPhotoSelected = (e) => {
    debugger
    if (e.target.files.length) {
      this.props.savePhoto(e.target.files[0])
    }
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
          <div className={ProfileInfoStyles.btn}>
            <Button onClick={this.toggleEdit}>
              Edit profile photo
              <Icon className={ProfileInfoStyles.editIcon} name={faEdit}/>
            </Button>
            <Modal title='Edit profile photo' isOpen={this.state.isOpen} onCancel={this.toggleEdit} onSubmit={this.toggleEdit}>
              <input type='file' onChange={this.onPhotoSelected}/>
            </Modal>
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

export default connect(mapStateToProps, { setUserFollow, setUserUnfollow, savePhoto })(ProfileActions);