import{Routes, Route} from "react-router-dom"
import MainPageComponent from '../components/mainPage/MainPageComponent'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPageComponent/>}>
      </Route>


    </Routes>
  );
};

export default Router;