import React from "react";
import { Box } from '@mui/system';

function PageTitle() {
    return (
        <React.Fragment>
            <Box
                sx={{
                    width: 1,
                    height: 150,
                    bgcolor: '#5b5b5b',
                    textAlign: 'center',
                }}>
                <Box
                    sx={{
                        width: 1,
                        bgcolor: '#5b5b5b',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: '#ffffff'
                    }}
                >Our Mission</Box>
                <Box
                    sx={{
                        width: 1,
                        bgcolor: 'gray',
                        textAlign: 'center',
                        fontSize: 18,
                        color: 'black'
                    }}
                >Non-Profit Organization</Box>
            </Box>
        </React.Fragment>
    );
}

export default PageTitle;