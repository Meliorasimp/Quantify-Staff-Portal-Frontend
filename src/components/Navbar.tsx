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
    <aside className="navbar-bg w-[18vw] h-screen overflow-y-auto shrink-0">
      <nav className="flex flex-col">
        {/* Fixed header section */}
        <section className="flex items-center gap-x-2 w-full pt-4 px-4 pb-6 border-b border-gray-200/20 sticky top-0 navbar-bg z-10">
          <img src={atom} alt="Atom Icon" className="w-10 h-10" />
          <h1 className="text-center font-semibold text-2xl">Quantify</h1>
        </section>
        <section className="flex flex-col py-4">
          {MainSection.map((item, index) => (
            <Link
              key={index}
              className="flex items-center gap-x-2 px-6 w-full cursor-pointer py-3 hover:bg-lime-400 hover:text-white transition-all duration-100"
              to={item.link}
            >
              <img src={item.icon} alt={item.alticon} className="w-6 h-6" />
              <h1 className="text-lg">{item.name}</h1>
            </Link>
          ))}
        </section>
      </nav>
    </aside>
  );
};

export default Navbar;
