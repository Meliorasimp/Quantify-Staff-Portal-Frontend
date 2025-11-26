import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setIsPurchaseOrderModalOpen } from "../store/InteractionSlice";
import type { RootState } from "../store";
import PurchaseOrderModal from "../components/PurchaseOrderModal";
const AllPurchaseOrder = () => {
  const dispatch = useDispatch();
  const isPurchaseModalOpen = useSelector(
    (state: RootState) => state.interaction.isPurchaseOrderModalOpen
  );
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="min-h-full p-6">
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="">
                  <h1 className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    All Purchase Orders
                  </h1>
                  <p className="text-gray-600 mt-2">
                    View and manage all your purchase orders in one place.
                  </p>
                </h1>
              </div>
            </div>
          </section>
          <section className="mt-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Search Purchase Orders..."
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 min-w-40">
                    <option value="">Type</option>
                    <option value="electronics">Inbound</option>
                    <option value="furniture">Outbound</option>
                    <option value="clothing">Transfer</option>
                  </select>

                  <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 min-w-40">
                    <option value="">All Warehouses</option>
                    <option value="pluto">Pluto Warehouse</option>
                    <option value="mars">Mars Warehouse</option>
                    <option value="earth">Earth Warehouse</option>
                    <option value="venus">Venus Warehouse</option>
                  </select>

                  <button className="flex items-center px-4 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-md hover:shadow-lg">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add Item
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6 mb-6 w-1/2">
              <div className="flex w-full justify-between border-b-2 border-gray-600 ">
                <h1 className="uppercase text-gray-600 pb-4">po #001</h1>
                <h1 className="uppercase text-orange-600 pb-4">pending</h1>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="mt-4 flex justify-between">
                  Client:{" "}
                  <span className="font-semibold">Example Company Ltd. 1</span>
                </div>
                <div className="mt-2 flex justify-between">
                  Date: <span className="font-semibold">October 28, 1999</span>
                </div>
                <div className="mt-2 flex justify-between">
                  Total Amount: <span className="font-semibold">$2,500.00</span>
                </div>
              </div>
              <button
                className="mx-auto w-4/5 flex justify-center py-2 mt-8 bg-blue-400 text-white rounded-full cursor-pointer hover:bg-blue-900"
                onClick={() => dispatch(setIsPurchaseOrderModalOpen(true))}
              >
                View Order Details
              </button>
            </div>
          </section>
        </div>
      </main>
      {isPurchaseModalOpen && (
        <PurchaseOrderModal
          onClose={() => dispatch(setIsPurchaseOrderModalOpen(false))}
        />
      )}
    </div>
  );
};

export default AllPurchaseOrder;
