import { Route } from "wouter";
import { ApodDetail } from "./pages/pod-detail/apod-detail.page";
import { Home } from "./pages/home/home.page";

function App() {
  return (
    <div className="app-bg">
      <Route component={Home} path="/" />
      <Route component={ApodDetail} path="/detail" />
    </div>
  );
}

export default App;
