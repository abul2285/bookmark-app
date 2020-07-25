import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components'

import Input from './index';

const Div = styled.div`
    margin: 10px;
    width: 40%;
`

storiesOf('Input', module)
    .add('primary', () => <div>
        <Div><Input /></Div>
        <Div><Input placeholder="Recipient email address" /></Div>
    </div>)
    .add('with icon', () => <div>
        <Div><Input icon={['far', 'envelope']} /></Div>
        <Div><Input icon={['far', 'lock-alt']} /></Div>
    </div>)