import React, {useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

class FriendList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getFriendsData();
    };

    getFriendsData = e => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                this.setState({
                    friends: []
                })
                this.setState({
                    friends: [
                        ...this.state.friends,
                        ...res.data
                    ]
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <div>
                    <AddFriend state={this.state} setState={this.setState} update={this.getFriendsData} />
                </div>
                <div className='friendList'>
                    <h1>FRIENDS LIST:</h1>
                    {this.state.friends.map(x => (
                        <div className='friend'>
                            <span>Name: {x.name}</span><br />
                            <span>Age: {x.age}</span><br />
                            <span>Email: {x.email}</span><br /><br />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FriendList;