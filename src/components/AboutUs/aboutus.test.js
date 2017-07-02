/**
 * Created by Counter on 7/2/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import ConnectedAboutUS ,{AboutUs} from './aboutus'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import {Provider} from 'react-redux'
import {Logout} from '../../actions/authActions'
import * as types from '../../common/actionTypes'

//Dumb component Test------ without store------
test('Load without crashing' ,()=>{
    const div = document.createElement('div');
    ReactDOM.render(<AboutUs />, div);
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
//         wrapper = mount( <Provider store={store}><ConnectedAboutUS /></Provider> )
//     })
//
//
//     test('+++ render the connected(SMART) component', () => {
//         expect(wrapper.find(ConnectedAboutUS).length).toEqual(1)
//     });
//
//
//
// });
