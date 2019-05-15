import React from "react";
import { shallow } from "enzyme";
import Cell from "../Cell";  
import { shallowToJson } from "enzyme-to-json";


describe('Cell container' , ()=> {

    const props ={
        value: 'X', 
    }

    it('value should be a string' , ()=>{ 
        const myContainer = shallow(<Cell  {...props}/>); 
        expect(myContainer.text()).toEqual('X')
    });

    it('snapshot cell' , ()=>{ 
        const myContainer = shallow(<Cell  {...props}/>); 
        expect(shallowToJson(myContainer)).toMatchSnapshot()
    })
})