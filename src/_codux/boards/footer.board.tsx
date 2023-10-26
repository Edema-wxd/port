import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'footer',
    Board: () => <footer>
        <div>
            <img />
        </div>
        <div />
        <div />
        <div />
    </footer>,
    isSnippet: true,
});
