import React from "react";
import {Link} from 'react-router-dom';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super();

        this.state={
            userName:'',
            email:'',
            password:'',
            error:''
        }
    }
    onChangeEmail = (e) =>{
        this.setState({email:e.target.value})
    }

    onSubmit = (e) =>{
        let { history } = this.props

        e.preventDefault()
        let olddata = localStorage.getItem('formdata')
        let oldArr = JSON.parse(olddata)
        oldArr.map(arr =>
            {
                if(this.state.email.length > 0 && this.state.password.length > 0){
                    if (arr.email === this.state.email && (arr.password === this.state.password)) {
                        let user = this.state.userName;
                        history.push({ pathname: "/home", user: this.state.userName });
                    }else{
                        this.setState({error:'Please check your email or password'})
                    }
                }
            }
        )
    }


    onChangePassword = (e) =>{
        this.setState({password:e.target.value})
    }
    render() {
        return (
            <div className={'login'}>
                <alert className="error">
                    {this.state.error}
                </alert>
                <div className={'title'}>
                    <p>Log in!</p>
                </div>
                <form className={'fields'} onSubmit={this.onSubmit}>
                    <div className={'email'}><input onChange={this.onChangeEmail} value={this.state.email} className={'input'} placeholder={'Enter Email'} type="text"
                                                    name={'email'}/></div>
                    <div className={'password'}><input className={'input'} value={this.state.password} onChange={this.onChangePassword} placeholder={'Enter Password'}
                                                       type="password" name={'password'}/></div>
                    <div className={'submit'}>
                        <button type={'submit'}>Log in</button>
                    </div>
                </form>
                <div className={'signlink'}>

                    Don't have an account <Link to='/signup'>Sign up</Link>
                </div>


            </div>

        )
    }
}

export default Login;