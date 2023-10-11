import { Input, RegistartionActivation } from "./components";
import { Menu } from "./components/BurgerMenu";
import { SignInForm } from "./components/SignIn";
import { Username } from "./components/Username";
import { HOCUsage } from "./components/HOC";
import { Tabs } from "./components/Tabs";
import { Success } from "./components/Success";
import { NewSign } from "./components/NewSign"
import { SelectPost } from "./components/SelectPost"
import { AllPost } from "./components/AllPost";
import { BurgerMenu } from "./components/Hamburger";
import { HomePage } from "./components/HomePage";
import { FourPosts } from "./components/FourPosts";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThreePosts } from "./components/ThreePosts";
import { SignUpForm } from "./components/SignUp"
import { Provider } from "react-redux";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'}>
        <Route index element={<HomePage />} />
        <Route path="all-post" element={<AllPost />} />
        <Route path="four-posts" element={<FourPosts />} />
        <Route path="sign-in" element={<SignInForm />} />
        <Route path="sign-up" element={<SignUpForm />} />
        <Route path="menu" element={<Menu />} />
        <Route path="success" element={<Success />} />
        <Route path="new-sign-in" element={<NewSign  title="Email" placeholder="Email" />} />
        <Route path="tab" element={<Tabs />} />
        <Route path="select-post" element={<SelectPost />} />
        <Route path={'activate/:uid/:token'} element={<RegistartionActivation />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
  }



export { App };
