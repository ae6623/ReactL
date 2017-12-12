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
       console.log(this.props)
       this.state = {
            userNick:"you",
            hasAuth:true
       }
    }

    changeUserInfo(){
        this.setState({age:50});
    }

    render() {

        var userInfo = {
            userNick: "me",
            age:20,
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
                        <span>{this.state.age}</span>
                        <span> -> userId : {this.props.userId}</span>
                    </div>

                    {/*JSX userInfo.hasAuth*/}
                    <input type="button" value="next step" disabled={this.state.hasAuth} onClick={this.changeUserInfo.bind(this)}/>
                </div>
            </div>
        )
    }
}