import TextField from "@mui/material/TextField";

function MyForm() {
  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}

export default MyForm;
