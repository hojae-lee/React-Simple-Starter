import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import App from "./App";

const MainPage = lazy(() => import("./pages/main/index.jsx"));
const AboutPage = lazy(() => import("./pages/about/index.jsx"));
const DetailPage = lazy(() => import("./pages/detail/index.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound.jsx"));
const MemoPage = lazy(() => import("./pages/memo/index.jsx"));

const AboutReduxPage = lazy(() => import("./pages/about/ReduxPage.jsx"));
const AboutRecoilPage = lazy(() => import("./pages/about/RecoilPage.jsx"));

const Loading = lazy(() => import("@components/common/loading/Loading.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <AboutPage />
          </Suspense>
        ),
        loader: () => {
          const data = [
            {
              id: 1,
              content: "hello",
            },
            {
              id: 2,
              content: "world",
            },
          ];
          return data;
        },
        children: [
          {
            path: "redux",
            element: (
              <Suspense fallback={<Loading />}>
                <AboutReduxPage />
              </Suspense>
            ),
          },
          {
            path: "recoil",
            element: (
              <Suspense fallback={<Loading />}>
                <AboutRecoilPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "detail",
        element: (
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: ":id",
            element: (
              <Suspense fallback={<Loading />}>
                <DetailPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "memo",
        element: (
          <Suspense fallback={<Loading />}>
            <MemoPage />
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
