import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MyCustomButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

export default function App() {
  return <MyCustomButton>Styled Button</MyCustomButton>;
}
