{/*
import React from 'react';
import {Link} from 'react-router';
require('./login.css');

class Login extends React.Component {
        Link() {
     $(document).ready(function () {

     $("#land").click(function () {
     $.ajax({
     type: "POST",
     url: "http://localhost:3000/login",
     async: true,
     data: {
     Id: $('#inputStuID').val(),
     Password: $('#inputPassword').val()
     },
     success: function (result) {
     $("#div1").html(result);
     },
     error: function (xhr) {
     alert("An error occured: " + xhr.status + " " + xhr.statusText);
     }
     })
     })
     })
     }

    render() {
        return <div className="container">
            <form className=" col-md-4 col-md-offset-4 form-horizontal">
                <h3 className="title">登录校园Runner</h3>
                <div className="form-group">
                    <label htmlFor="inputStuID" className="col-md-2 control-label">学号</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="inputStuID" placeholder="Student ID"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="col-md-2 control-label">密码</label>
                    <div className="col-md-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="button-center">
                        <button type="submit" className="btn btn-primary" id="land">登录</button>
                        <button type="reset" className="btn btn-primary">重置</button>
                    </div>
                </div>
            </form>


            }
            }
            class Logo extends React.Component{
            render(){
                return<div className="logo"> runner logo</div>}
        }


            class LoginPage extends React.Component{
            render(){
            return <div className="loginPage">
            <Logo />,
            <Login />
            </div>
        }
        }
            export default LoginPage;*/}
import React from 'react';
import {Link} from 'react-router';
require('../css/login.css');

class Login extends React.Component{
    render(){
        return <div className="container">
            <form className=" col-md-4 col-md-offset-4 form-horizontal" action="localhost:3000/home" method="get">
                <h3 className="title">登录校园Runner</h3>
                <div className="form-group">
                    <label htmlFor="inputStuID" className="col-md-2 control-label">学号</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="inputStuID" placeholder="Student ID"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="col-md-2 control-label">密码</label>
                    <div className="col-md-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="button-center">
                        <button type="submit" className="btn btn-primary"><Link to="/home">登录</Link></button>
                        <button type="reset" className="btn btn-primary">重置</button>
                    </div>
                </div>
            </form>
        </div>
    }
}

class Logo extends React.Component{
    render(){ return <div className="logo"> runner logo</div>}
}


class LoginPage extends React.Component{
    render(){
        return <div className="loginPage">
            <Logo />,
            <Login />
        </div>
    }
}
export default LoginPage;