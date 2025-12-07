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
const Transfers = lazy(() => import("../pages/Transfer/Transfers"));
const TransferDetails = lazy(
  () => import("../pages/Transfer/TransferDetailsExample")
);
const PurchaseOrderDetails = lazy(
  () => import("../pages/PurchaseOrder/PurchaseOrderDetails")
);
const SalesOrderDetails = lazy(
  () => import("../pages/SalesOrder/SalesOrderDetails")
);
const Suppliers = lazy(() => import("../pages/Supplier"));
const Alert = lazy(() => import("../pages/Alert"));
const Client = lazy(() => import("../pages/Client"));
const Shipment = lazy(() => import("../pages/Shipment"));
const Schedule = lazy(() => import("../pages/Schedule"));
const Analytics = lazy(() => import("../pages/Analytics/Analytics"));
const InboundMetrics = lazy(() => import("../pages/Analytics/InboundMetrics"));
const OutboundMetrics = lazy(
  () => import("../pages/Analytics/OutboundMetrics")
);
const StorageMetrics = lazy(() => import("../pages/Analytics/StorageMetrics"));
const FinancialAnalytics = lazy(
  () => import("../pages/Analytics/FinancialAnalytics")
);
const Users = lazy(() => import("../pages/Users"));
const Settings = lazy(() => import("../pages/Settings/Settings"));
const UserSettings = lazy(() => import("../pages/Settings/UserSettings"));
const NotificationSettings = lazy(
  () => import("../pages/Settings/NotificationSettings")
);
const UISettings = lazy(() => import("../pages/Settings/UISettings"));
const AuditLogs = lazy(() => import("../pages/AuditLogs"));
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
    path: "/salesorders/:id",
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
        <SalesOrderDetails />
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
    path: "/transfers/:id",
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
  {
    path: "/alerts",
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
          </div>
        }
      >
        <Alert />
      </Suspense>
    ),
  },
  {
    path: "/suppliers",
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
          </div>
        }
      >
        <Suppliers />
      </Suspense>
    ),
  },
  {
    path: "/clients",
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
          </div>
        }
      >
        <Client />
      </Suspense>
    ),
  },
  {
    path: "/shipments",
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
          </div>
        }
      >
        <Shipment />
      </Suspense>
    ),
  },
  {
    path: "/schedules",
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
          </div>
        }
      >
        <Schedule />
      </Suspense>
    ),
  },
  {
    path: "/analytics",
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
          </div>
        }
      >
        <Analytics />
      </Suspense>
    ),
  },
  {
    path: "/analytics/inbound-metrics",
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
          </div>
        }
      >
        <InboundMetrics />
      </Suspense>
    ),
  },
  {
    path: "/analytics/outbound-metrics",
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
          </div>
        }
      >
        <OutboundMetrics />
      </Suspense>
    ),
  },
  {
    path: "/analytics/storage-metrics",
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
          </div>
        }
      >
        <StorageMetrics />
      </Suspense>
    ),
  },
  {
    path: "/analytics/financial-analytics",
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
          </div>
        }
      >
        <FinancialAnalytics />
      </Suspense>
    ),
  },
  {
    path: "/users",
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
          </div>
        }
      >
        <Users />
      </Suspense>
    ),
  },
  {
    path: "/settings",
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
          </div>
        }
      >
        <Settings />
      </Suspense>
    ),
  },
  {
    path: "/settings/users",
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
          </div>
        }
      >
        <UserSettings />
      </Suspense>
    ),
  },
  {
    path: "/settings/notifications",
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
          </div>
        }
      >
        <NotificationSettings />
      </Suspense>
    ),
  },
  {
    path: "/settings/ui-configuration",
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
          </div>
        }
      >
        <UISettings />
      </Suspense>
    ),
  },
  {
    path: "/auditlogs",
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
          </div>
        }
      >
        <AuditLogs />
      </Suspense>
    ),
  },
];

export default Router;
