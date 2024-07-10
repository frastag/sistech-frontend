import React from "react";
import Card from '@mui/material/Card';
import { CardMedia } from "@mui/material";

function CustomCardImage({ imageUrl }) {
  return (
    <React.Fragment>
      <Card align='center' sx={{ minHeight: 1, border:'none', boxShadow:'none' }}>
        <CardMedia
          component="img"
          height="393"
          image={imageUrl}
          sx={{objectFit:'contain'}}
        />
      </Card>
    </React.Fragment>
  );
}

export default CustomCardImage;