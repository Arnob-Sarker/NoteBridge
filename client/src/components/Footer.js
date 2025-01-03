import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


const Footer = () => {
  return (
    <Box pb={3}>
      <Card>
        <Typography variant="subtitle1">
          Post and share notes on NoteBridge
        </Typography>
      </Card>
    </Box>
  );
};

export default Footer;
