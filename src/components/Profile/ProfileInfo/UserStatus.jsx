import React from 'react';

export class UserStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: this.props.status,
            editMode: false
        }
        this.activateEditMode = this.activateEditMode.bind(this);
        this.deactivateEditMode = this.deactivateEditMode.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        debugger;
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'Статуса нет'}</span> }
            {this.state.editMode && <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} value={this.state.status}/>}
        </div>
    }
}