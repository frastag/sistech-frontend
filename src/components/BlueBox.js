import React from "react";
import { Box } from '@mui/system';

function BlueBox({content}) {
    return (
        <React.Fragment>
            <Box
                sx={{
                    width: 1,
                    height: 150,
                    bgcolor: '#1976D2',
                    textAlign: 'center',
                    alignItems:'center',
                    justifyContent:'center',
                    display:'flex'
                }}>
                <Box
                    sx={{
                        width: 1,
                        bgcolor: '#1976D2',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: '#ffffff',
                        margin: 'auto'
                    }}
                >{content}</Box>
            </Box>
        </React.Fragment>
    );
}

export default BlueBox;