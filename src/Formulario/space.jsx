import React from 'react'
import Box from '@mui/material/Box';

function Space(props) {
    return <Box style={{ height: props.size, width: props.size }} />;
}

export default Space;