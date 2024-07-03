import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Height } from "@mui/icons-material";
import { minHeight } from "@mui/system";

function CustomCard({ content, action }) {
    return (
      <React.Fragment>
        <Card variant="outlined" align='center' sx={{minHeight:1}}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" align='center' gutterBottom>
              {content}
            </Typography>
          </CardContent>
          { action ? 
          <CardActions>
            <Grid container alignItems='center' justifyContent='center'>
              <Grid item><Button size="small">{action}</Button></Grid>
            </Grid>
          </CardActions> : null
          }
        </Card>
      </React.Fragment>
    );
  }

  export default CustomCard;