import "../styles/index.css";
import atom from "../assets/atom.png";
import Dashboard from "../assets/dashboard.png";
import Inventory from "../assets/inventory.png";
import Storage from "../assets/storagelocation.png";
import Warehouse from "../assets/warehouse.png";
import Stockmovement from "../assets/organization.png";
import PurchaseOrder from "../assets/order.png";
import SalesOrder from "../assets/shopping-list.png";
import Transfer from "../assets/exchange.png";
import Alert from "../assets/warning.png";
import Supplier from "../assets/supplier.png";
import Client from "../assets/client.png";
import Shipment from "../assets/shipment.png";
import Schedule from "../assets/schedule.png";
import Report from "../assets/report.png";
import Analytics from "../assets/analytics.png";
import Users from "../assets/user.png";
import Settings from "../assets/setting.png";
import Audit from "../assets/audit.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const MainSection = [
    {
      name: "Dashboard",
      icon: Dashboard,
      link: "/dashboard",
      alticon: "Dashboard Icon",
    },
    {
      name: "Inventory",
      icon: Inventory,
      link: "/inventory",
      alticon: "Inventory Icon",
    },
    {
      name: "Storage Locations",
      icon: Storage,
      link: "/storagelocations",
      alticon: "Storage Locations Icon",
    },
    {
      name: "Warehouses",
      icon: Warehouse,
      link: "/warehouses",
      alticon: "Warehouses Icon",
    },
    {
      name: "Stock Movements",
      icon: Stockmovement,
      link: "/stockmovements",
      alticon: "Stock Movements Icon",
    },
    {
      name: "Purchase Orders",
      icon: PurchaseOrder,
      link: "/purchaseorders",
      alticon: "Purchase Orders Icon",
    },
    {
      name: "Sales Orders",
      icon: SalesOrder,
      link: "/salesorders",
      alticon: "Sales Orders Icon",
    },
    {
      name: "Transfers",
      icon: Transfer,
      link: "/transfers",
      alticon: "Transfers Icon",
    },
    {
      name: "Alerts",
      icon: Alert,
      link: "/alerts",
      alticon: "Alerts Icon",
    },
    {
      name: "Suppliers",
      icon: Supplier,
      link: "/suppliers",
      alticon: "Suppliers Icon",
    },
    {
      name: "Clients",
      icon: Client,
      link: "/clients",
      alticon: "Clients Icon",
    },
    {
      name: "Shipments",
      icon: Shipment,
      link: "/shipments",
      alticon: "Shipments Icon",
    },
    {
      name: "Schedules",
      icon: Schedule,
      link: "/schedules",
      alticon: "Schedules Icon",
    },
    {
      name: "Reports",
      icon: Report,
      link: "/reports",
      alticon: "Reports Icon",
    },
    {
      name: "Analytics",
      icon: Analytics,
      link: "/analytics",
      alticon: "Analytics Icon",
    },
    {
      name: "Users",
      icon: Users,
      link: "/users",
      alticon: "Users Icon",
    },
    {
      name: "Settings",
      icon: Settings,
      link: "/settings",
      alticon: "Settings Icon",
    },
    {
      name: "Audit Logs",
      icon: Audit,
      link: "/auditlogs",
      alticon: "Audit Logs Icon",
    },
  ];
  return (
    <aside className="navbar-bg w-[18vw] h-screen overflow-y-auto shrink-0 shadow-xl border-r border-gray-200/30">
      <nav className="flex flex-col h-full">
        {/* Fixed header section */}
        <section className="flex items-center gap-x-3 w-full pt-6 px-6 pb-6 border-b border-gray-200/20 sticky top-0 navbar-bg z-10">
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <img
              src={atom}
              alt="Atom Icon"
              className="w-7 h-7 brightness-0 invert"
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quantify
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Inventory Management
            </p>
          </div>
        </section>

        {/* Navigation Items */}
        <section className="flex flex-col py-3 px-3 space-y-1">
          {MainSection.map((item, index) => (
            <Link
              key={index}
              className="group flex items-center gap-x-3 px-4 w-full cursor-pointer py-3 rounded-xl hover:bg-linear-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-md transition-all duration-200 relative overflow-hidden"
              to={item.link}
            >
              <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white/90 transition-all duration-200 shrink-0">
                <img
                  src={item.icon}
                  alt={item.alticon}
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
                />
              </div>
              <h1 className="relative z-10 text-base font-medium text-gray-700 group-hover:text-white transition-colors duration-200">
                {item.name}
              </h1>
              <div className="relative z-10 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </section>

        {/* Footer Section */}
        <section className="mt-auto p-4 border-t border-gray-200/20">
          <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                A
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800">
                  Admin User
                </p>
                <p className="text-xs text-gray-500">admin@quantify.com</p>
              </div>
            </div>
            <button className="w-full py-2 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
              Logout
            </button>
          </div>
        </section>
      </nav>
    </aside>
  );
};

export default Navbar;
