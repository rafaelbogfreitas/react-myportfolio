import React, { useState } from 'react';

import '../About/About.scss';
import './Skills.scss';

import SkillsContents from '../../util/SkillsContents';
import SkillsBox from './SkillsBox/SkillsBox';
// import SkillsExpandBtn from '../SkillsExpandBtn/SkillsExpandBtn';

// class Skills extends React.Component {
const Skills = () => {

    const [ clicked, setClicked ] = useState(false);
    const [ accordeon, setAccordeon ] = useState(SkillsContents);
    const [ open , setOpen ] = useState([]);
    console.log(accordeon);
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         clicked: false,
    //         state: SkillsContents
    //     }


    //     this.handleClick = this.handleClick.bind(this);
    //     this.closeLayer = this.closeLayer.bind(this);
    //     this.openLayer = this.openLayer.bind(this);
    //     this.openAccordeon = this.openAccordeon.bind(this);
        
    // }

    const handleClick = (e) => {
        // this.setState({ clicked: !this.state.clicked });
        setClicked(!clicked);
    }
    
    const closeLayer = (e) => {
        // const state = this.state.state;
        const state = accordeon;

        const newState = state.map((a, i) => a.open = false);
    
    
        // this.setState({ open: newState  }); 
        // if(this.state.clicked) this.handleClick();
        setOpen(newState);
        if(clicked) handleClick();
    }
    
    const openLayer = (e) => {
        // if(!this.state.clicked) this.handleClick();
        if(!clicked) handleClick();
    }

    const openAccordeon = (e) => {
        openLayer();
        // const state = this.state.state;
        const state = accordeon;
        console.log(state)
        // const newState = state.map((a, i) => {
        const newState = state.map((a, i) => {
            if(a.title === e.target.id && !a.open) return a.open = true;
            else return a.open = false;
        });

        // this.setState({ open: newState  }); 
        setOpen(newState);
    }


    // render() {
        return(
            // <aside className={this.state.clicked ? 'skills on-focus' : 'skills'}>
            <aside className={clicked ? 'skills on-focus' : 'skills'}>
                {/* <div className={this.state.clicked ? 'layer-closer' : 'hidden'} onClick={this.closeLayer}>X</div> */}
                <div className={clicked ? 'layer-closer' : 'hidden'} onClick={closeLayer}>X</div>
                {/* <SkillsBox state={this.state.state} openAccordeon={this.openAccordeon}/> */}
                <SkillsBox state={accordeon} openAccordeon={openAccordeon}/>
            </aside>
        );

    // }
}
 
export default Skills;