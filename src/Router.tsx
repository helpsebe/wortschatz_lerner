import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import Home from "./pages/Home";
import EditPofile from "./pages/EditProfile";
import ErrorPage from "./pages/ErrorPage";

const AppRouter = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/profile/edit" element={<EditPofile />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
