import { type RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import Landingpage from "../pages/Landingpage";
import Dashboard from "../pages/Dashboard";
const Inventory = lazy(() => import("../pages/Inventory"));
const StorageLocations = lazy(() => import("../pages/StorageLocations"));
const Warehouses = lazy(() => import("../pages/Warehouses"));

const Router: RouteObject[] = [
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/inventory",
    element: (
      <Suspense
        fallback={
          <div className="text-4xl flex justify-center items-center w-full h-screen">
            Loading Inventory...
          </div>
        }
      >
        <Inventory />
      </Suspense>
    ),
  },
  {
    path: "/storagelocations",
    element: (
      <Suspense
        fallback={
          <div className="text-4xl flex justify-center items-center w-full h-screen">
            Loading Storage Locations...
          </div>
        }
      >
        <StorageLocations />
      </Suspense>
    ),
  },
  {
    path: "/warehouses",
    element: (
      <Suspense
        fallback={
          <div className="text-4xl flex justify-center items-center w-full h-screen">
            Loading Warehouses...
          </div>
        }
      >
        <Warehouses />
      </Suspense>
    ),
  },
];

export default Router;
