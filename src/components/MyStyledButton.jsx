import Button from "@mui/material/Button";

const MyStyledButton = () => (
  <Button
    sx={{
      bgcolor: "primary.main",
      "&:hover": {
        bgcolor: "primary.dark",
      },
      borderRadius: 2,
      padding: "6px 24px",
    }}
  >
    Click Me
  </Button>
);

export default MyStyledButton;
