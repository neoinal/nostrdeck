import { lazy, LazyExoticComponent } from "react";
import { Routes, Route } from "react-router-dom";

type RouteProps = {
  path: string;
  element: LazyExoticComponent<() => JSX.Element> | any | null;
  children?: RouteProps[];
};

const routes: RouteProps[] = [
  {
    path: "/",
    element: lazy(() =>
      import("@/layouts/HomeLayout").then(({ HomeLayout }) => ({
        default: HomeLayout,
      })),
    ),
    children: [
      {
        path: "",
        element: lazy(() =>
          import("@/pages/Index").then(({ IndexPage }) => ({
            default: IndexPage,
          })),
        ),
      },
    ],
  },
];

const createRoute = ({ element, children, ...route }: RouteProps) => {
  const Component = element;
  return (
    <Route key={route.path} {...route} element={<Component />}>
      {children && children.map(createRoute)}
    </Route>
  );
};

export const createRoutes = (): JSX.Element => {
  return <Routes>{routes.map(createRoute)}</Routes>;
};
