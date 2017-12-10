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


    constructor(){
       super();
       this.state = {
            userNick:"you",
            hasAuth:true
       }
    }

    render() {

        var userInfo = {
            userNick: "me",
            hasAuth: false
        }

        setTimeout(()=>{
            this.setState(userInfo);
        },3000)

        return (
            <div>
                <div>
                    <div>
                        <span>userNick: </span>
                        <span>{this.state.userNick}</span>
                        <span>{this.state.hasAuth}</span>
                    </div>

                    {/*JSX userInfo.hasAuth*/}
                    <input type="button" value="next step" disabled={this.state.hasAuth}/>
                </div>
            </div>
        )
    }
}