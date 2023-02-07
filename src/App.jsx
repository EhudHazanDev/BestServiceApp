import { useEffect } from "react";
import { dataService } from "./services/generalService/dataService";
import { AppHeader } from "./cmps/layout/AppHeader";
import { AppFooter } from "./cmps/layout/AppFooter";
import { Tasks } from "./pages/Tasks";
import { AddTask } from "./pages/AddTask";

export const App = () => {
  useEffect(() => {
    dataService.removeData();
    dataService.initData();
  }, []);

  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <div>
        <Tasks />
        {/* <AddTask /> */}
      </div>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
};

export default App;
