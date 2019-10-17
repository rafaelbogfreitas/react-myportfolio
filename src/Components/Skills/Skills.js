import React from 'react';

import '../About/About.scss';
import './Skills.scss';

import SkillsContents from '../../util/SkillsContents';
import SkillsBox from './SkillsBox/SkillsBox';
// import SkillsExpandBtn from '../SkillsExpandBtn/SkillsExpandBtn';

class Skills extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            clicked: false,
            state: SkillsContents
        }


        this.handleClick = this.handleClick.bind(this);
        this.closeLayer = this.closeLayer.bind(this);
        this.openLayer = this.openLayer.bind(this);
        this.openAccordeon = this.openAccordeon.bind(this);
        
    }

    handleClick(e){
        this.setState({ clicked: !this.state.clicked });
    }
    
    closeLayer(e){
        const state = this.state.state;
        const newState = state.map((a, i) => a.open = false);
    
    
        this.setState({ open: newState  }); 
        if(this.state.clicked) this.handleClick();
    }
    
    openLayer(e){
        if(!this.state.clicked) this.handleClick();
    }

    openAccordeon(e){
        this.openLayer();
        const state = this.state.state;
        const newState = state.map((a, i) => {
            if(a.title === e.target.id && !a.open) a.open = true;
            else a.open = false;
        });

        this.setState({ open: newState  }); 
    }


    render() {
        return(
            <aside className={this.state.clicked ? 'skills on-focus' : 'skills'}>
                <div className={this.state.clicked ? 'layer-closer' : 'hidden'} onClick={this.closeLayer}>X</div>
                <SkillsBox state={this.state.state} openAccordeon={this.openAccordeon}/>
            </aside>
        );

    }
}
 
export default Skills;