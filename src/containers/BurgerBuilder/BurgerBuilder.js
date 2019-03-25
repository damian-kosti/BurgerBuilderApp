import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Wrapper from '../../hoc/Wrapper';

class BurgerBuilder extends Component {
    render() {
        return (
            <Wrapper>
                <Burger />
                <div>Build Controls</div>
            </Wrapper>
        );
    }
}

export default BurgerBuilder;