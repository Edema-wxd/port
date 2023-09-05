import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Skills from '../../../components/landing/Skills.jsx';

export default createBoard({
    name: 'Skills',
    Board: () => <Skills />,
    isSnippet: true,
});
