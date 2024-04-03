import React, { Suspense } from "react";
import { ThemeProvider, CssBaseline, Typography, Stack } from "@mui/material";
import theme from "../theme/theme";

const AlertDialog = React.lazy(() => import("../components/AlertDialog"));
const DataGridDemo = React.lazy(() => import("../components/DataGridDemo"));
const MyCustomButton = React.lazy(() => import("../components/MyCustomButton"));
const MyForm = React.lazy(() => import("../components/MyForm"));
const MyStyledButton = React.lazy(() => import("../components/MyStyledButton"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <Stack spacing={2} sx={{ padding: "20px", width: "max-content" }}>
          <Typography variant="h4" gutterBottom>
            Customization Tips
          </Typography>
          <MyStyledButton />
          <MyCustomButton />

          <Typography variant="h4" gutterBottom>
            Commonly Used Components
          </Typography>
          <MyForm />

          <Typography variant="h4" gutterBottom>
            Component Tips - Dialogs
          </Typography>
          <AlertDialog />

          <Typography variant="h4" gutterBottom>
            Advanced Components - DataGrid
          </Typography>
          <DataGridDemo />
        </Stack>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
