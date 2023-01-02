import { Link } from "react-router-dom";
import { StyledHome } from "./style";

export const Home = () => {
  return (
    <StyledHome>
      <h1>Finance</h1>
      <Link to="/Dashboard">Entrar</Link>
    </StyledHome>
  );
};
