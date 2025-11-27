import { type RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import Landingpage from "../pages/Landingpage";
import Dashboard from "../pages/Dashboard";
const Inventory = lazy(() => import("../pages/Inventory"));
const StorageLocations = lazy(() => import("../pages/StorageLocations"));
const Warehouses = lazy(() => import("../pages/Warehouses"));
const StockMovement = lazy(() => import("../pages/StockMovement"));
const PurchaseOrder = lazy(
  () => import("../pages/PurchaseOrder/PurchaseOrder")
);
const SalesOrder = lazy(() => import("../pages/SalesOrder/SalesOrder"));
const AllSalesOrder = lazy(() => import("../pages/SalesOrder/AllSalesOrder"));
const AllPurchaseOrders = lazy(
  () => import("../pages/PurchaseOrder/AllPurchaseOrder")
);
const Transfers = lazy(() => import("../pages/Transfers"));
const TransferDetails = lazy(() => import("../pages/TransferDetailsExample"));
const PurchaseOrderDetails = lazy(
  () => import("../pages/PurchaseOrder/PurchaseOrderDetails")
);
import { FidgetSpinner } from "react-loader-spinner";

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
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
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
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
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
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <Warehouses />
      </Suspense>
    ),
  },
  {
    path: "/stockmovements",
    element: (
      <Suspense
        fallback={
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <StockMovement />
      </Suspense>
    ),
  },
  {
    path: "/purchaseorders",
    element: (
      <Suspense
        fallback={
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <PurchaseOrder />
      </Suspense>
    ),
  },
  {
    path: "/purchaseorders/all",
    element: (
      <Suspense
        fallback={
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <AllPurchaseOrders />
      </Suspense>
    ),
  },
  {
    path: "/purchaseorders/:id",
    element: (
      <Suspense
        fallback={
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <PurchaseOrderDetails />
      </Suspense>
    ),
  },
  {
    path: "/salesorders",
    element: (
      <Suspense
        fallback={
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <SalesOrder />
      </Suspense>
    ),
  },
  {
    path: "/salesorders/all",
    element: (
      <Suspense
        fallback={
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <AllSalesOrder />
      </Suspense>
    ),
  },
  {
    path: "/transfers",
    element: (
      <Suspense
        fallback={
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <Transfers />
      </Suspense>
    ),
  },
  {
    path: "/transfersexample",
    element: (
      <Suspense
        fallback={
          <div className="inset-0 absolute flex flex-col items-center justify-center w-full h-screen bg-white gap-4">
            <FidgetSpinner
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
            <h1 className="text-3xl">Loading...</h1>
          </div>
        }
      >
        <TransferDetails />
      </Suspense>
    ),
  },
];

export default Router;
