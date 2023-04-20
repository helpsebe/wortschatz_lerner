import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";

const AppRouter = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<>asd</>}></Route>
          <Route path="/house" element={<>house</>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
