
import Home from "./screens/Home";
import { CheckRtl } from "./context/CheckRtl";


export default function App() {
  return (
    <CheckRtl>
      <Home />
    </CheckRtl>
  );
}
