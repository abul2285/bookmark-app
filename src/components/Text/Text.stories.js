import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components'

import Text from './';

const Div = styled.div`
    margin: 10px;
`

storiesOf('Text', module)
    .add('Message', () => <div>
        <Div><Text type="success">Replace the default icon with customized text.</Text></Div>
        <Div><Text type="error">Replace the default icon with customized text.</Text></Div>
    </div>)
    .add('Paragraph', () => <Div>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus fugiat reprehenderit, ab laborum accusantium iste quos earum cupiditate aperiam! Sed quisquam ipsam accusantium totam aspernatur sapiente minus deserunt modi eos.</Text>
    </Div>)