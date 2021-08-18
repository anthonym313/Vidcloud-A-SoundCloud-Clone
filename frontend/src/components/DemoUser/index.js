import React from 'react';
import {useDispatch} from 'reatct-redux';
import {login} from '../../store/session';
import {useHistory} from 'react-router-dom';

export default function DemoUser(){
    const dispatch = useDispatch();
    const history = useHistory();
    const demoUser = {
        creditial: 'Demo-lition',
        password: 'password'
    }
    const demoLogin = async (e) =>{
        e.preventDefault();
        await dispatch(login(demoUser));
        history.push('/users')
        return
    }
    return(
        <div>
            <button onClick={(e)=>demoLogin(e)}>Demo</button>
        </div>
    )
}
