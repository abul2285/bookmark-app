import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components'

import Button from './index';

const Div = styled.div`
    margin: 10px;
    display: inline-block;
`

storiesOf('Button', module)
    .add('all', () => <div>
        <div>
            <Div><Button type="link">Cancel</Button></Div>
            <Div><Button type="primary-alt">Downlaod Now</Button></Div>
            <Div><Button>Downlaod Now</Button></Div>
            <Div><Button type="danger-alt">Delete</Button></Div>
            <Div><Button type="danger">Delete Site</Button></Div>
        </div>
        <div>
        <Div><Button size="2x" type="link">Cancel</Button></Div>
            <Div><Button size="2x"type="primary-alt">Downlaod Now</Button></Div>
            <Div><Button size="2x">Downlaod Now</Button></Div>
            <Div><Button size="2x" type="danger-alt">Delete</Button></Div>
            <Div><Button size="2x"type="danger">Delete Site</Button></Div>
        </div>
        <div>
            <Button size="3x" fullWidth>Downlaod Now</Button>
        </div>
    </div>)