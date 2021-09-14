import React from "react";
import {Link} from "react-router-dom";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userName:'',
            email:'',
            password:'',
            success:''
        }
    }
    onChangeName = (e) =>{
        this.setState({userName:e.target.value})
    }

    onChangeEmail = (e) =>{
        this.setState({email:e.target.value})
    }

    onChangePassword = (e) =>{
        this.setState({password:e.target.value})
    }
    onSubmit = (e) =>{
        let { history } = this.props
        let ob = {
            userName: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        let olddata = localStorage.getItem('formdata');
        if(olddata==null){
            olddata = []
            olddata.push(ob)
            localStorage.setItem('formdata', JSON.stringify(olddata));
            this.setState({success: 'Signup completed.Please Login'})
            history.push({ pathname: "/", user: this.state.userName });
        }else{
            let oldArr = JSON.parse(olddata)
            oldArr.push(ob)
            localStorage.setItem("formdata", JSON.stringify(oldArr))
            this.setState({success: 'Signup completed.Please Login'})
            history.push({ pathname: "/", user: this.state.userName });
            console.log(oldArr,'hhg')
        }
    }


    render() {


        return (
            <div className={'login'}>
                <div className={'success'}>
                    <p>{this.state.success}</p>
                </div>
                <div className={'title'}>
                    <p>Sign up</p>
                </div>
                <form className={'fields'} onSubmit={this.onSubmit}>
                    <div className={'email'}><input className={'input'} value={this.state.userName} onChange={this.onChangeName} placeholder={'Enter Name'} type="text"
                                                    name={'name'} required/></div>
                    <div className={'email'}><input className={'input'} value={this.state.email} onChange={this.onChangeEmail } placeholder={'Enter Email'} type="text"
                                                    name={'email'} required  /></div>
                    <div className={'password'}><input className={'input'} value={this.state.password} onChange={this.onChangePassword} placeholder={'Enter Password'}
                                                       type="password" name={'password'} required/></div>
                    <div className={'submit'}>
                        <button type={'submit'} >Sign up</button>
                    </div>
                </form>
                <div className={'signlink'}>
                    Already have an account <Link to='/'>Log in</Link>
                </div>
            </div>
        )
    }
}

export default Signup;