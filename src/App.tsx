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
import { AddPost } from "./components/AddPost";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignInForm />} />
        <Route path="sign-up" element={< SignUpForm />} />
        <Route path={'activate/:uid/:token'} element={<RegistartionActivation />} />
        <Route path = {'posts'}>
            <Route index element={<AllPost />} />
              <Route path="four-posts" element={<FourPosts />} />
              <Route path="new" element={<AddPost/>} />
              <Route path="select-post" element={<SelectPost />} />
              </Route>
          </Route>
          </Routes>
  </BrowserRouter>
  );
  }



export { App };
