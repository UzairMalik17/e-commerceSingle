import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const BuyersPagination = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          color="primary"
          count={6}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          shape="rounded"
        />
      </Stack>
    </ThemeProvider>
  );
};

export default BuyersPagination;
