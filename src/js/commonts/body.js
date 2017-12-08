import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends React.Component {

    /**
     * 组件加载前
     */
    componentWillMount(){
        console.log("component-body pre=componentWillMount")
    }

    /**
     * 组件加载完毕
     */
    componentDidMount(){
        console.log("component-body after=componentDidMount")
    }

    render() {

        var userInfo = {
            userNick: "me",
            hasAuth: false
        }

        return (
            <div>
                <div>
                    <div>
                        <span>userNick:</span>
                        <span>{userInfo.userNick}</span>
                        <span>{userInfo.hasAuth}</span>
                    </div>

                    {/*JSX userInfo.hasAuth*/}
                    <input type="button" value="next step" disabled={userInfo.hasAuth}/>
                </div>
            </div>
        )
    }
}