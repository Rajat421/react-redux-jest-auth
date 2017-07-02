/**
 * Created by Counter on 7/2/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import ConnectedHome ,{Home} from './home'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import {Provider} from 'react-redux'
import {Logout} from '../../actions/authActions'
import * as types from '../../common/actionTypes'

//Dumb component Test------ without store------
test('Load without crashing' ,()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
});


//test for smart component
//
// describe("(Mount + wrapping in Provider)",()=>{
//     const initialState = {isAuthenticated:false};
//     const mockStore = configureStore()
//     let store,wrapper
//
//     beforeEach(()=>{
//         store = mockStore(initialState)
//         wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
//     })
//
//
//     test('+++ render the connected(SMART) component', () => {
//         expect(wrapper.find(ConnectedHome).length).toEqual(1)
//     });
//
//
//
// });
