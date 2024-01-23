import { GitHubProvider } from "./contexts/userData";
import Search from "./pages";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <GitHubProvider>
      <Search />
      <GlobalStyles />
    </GitHubProvider>
  );
}

export default App;
