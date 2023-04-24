import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FullscreenLoader } from "./components/Loader/FullscreenLoader";
const MainLayout = lazy(() => import("./layouts/MainLayout"));

export const routes = [
  {
    path: "/",
    element: lazy(() => import("./pages/VocabularyTrainer")),
    index: true,
  },
  { path: "/profile", element: lazy(() => import("./pages/EditProfile")) },
  { path: "*", element: lazy(() => import("./pages/ErrorPage")) },
];

const AppRouter = () => {
  return (
    <Suspense fallback={<FullscreenLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              index={route.index ? true : undefined}
              element={<route.element />}></Route>
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
