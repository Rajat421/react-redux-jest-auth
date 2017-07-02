import React from 'react'
import ReactDOM from 'react-dom';
import ConnectedLogin ,{Login} from './login'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import {Provider} from 'react-redux'
import Reducer from '../../reducers/index'
import {login} from '../../actions/authActions'
import * as types from '../../common/actionTypes'
import logger from "redux-logger";
import thunk from "redux-thunk";
//Dumb component Test------ without store------
test('Load without crashing' ,()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
});


//test for smart component

// describe("(Mount + wrapping in Provider)",()=>{
//     const initialState = {};
//     const mockStore = configureStore();
//     const middlewares=[thunk,logger];
//     let store,wrapper;
//
//     beforeEach(()=>{
//         store = mockStore(Reducer,initialState,middlewares);
//         wrapper = mount( <Provider store={store}><ConnectedLogin /></Provider> )
//         console.log(wrapper,'--ewr')
//     })
//
//
//     test('+++ render the connected(SMART) component', () => {
//         expect(1).toEqual(1)
//     });
//
//
//
// });
