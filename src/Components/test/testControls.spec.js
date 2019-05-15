import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Controls from '../Controls';

describe('Controls component.History actions and show current', ()=>{

const props = {
    winner: '', 
    length:1, 
    snapshot:1,
    switchSnap: ()=>{}
}

it('should show current status (move or winner)', ()=>{
    const nextProps ={
        ...props,
        winner: "Win Player-1"
    }
    const controlsComponent = shallow(<Controls {...nextProps} />); 
    expect(controlsComponent.find('span').text()).toEqual(nextProps.winner); 
});

it('snapshot. winner', ()=> {
    const nextProps = {
        ...props, 
        winner: "Win Player-1"
    }
    const controlsComponent = shallow(<Controls {...nextProps} />);  
    expect(shallowToJson(controlsComponent)).toMatchSnapshot();
})



})