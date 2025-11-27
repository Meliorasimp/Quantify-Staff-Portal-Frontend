const SalesOrderModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl p-10 w-full max-w-6xl mx-4 h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition-colors text-2xl font-bold z-10"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">
            Sales Order #001
          </h1>
          <h1 className="text-2xl font-semibold text-primary-700">
            Order Details
          </h1>
        </div>
        <div className="flex flex-1 justify-between gap-x-6 overflow-y-auto">
          <div className="flex flex-col gap-y-6 w-2/5">
            <div className="bg-linear-to-br from-gray-50 to-gray-100 border rounded-2xl border-gray-200 p-6 flex flex-col gap-y-6 shadow-sm">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Sales Order ID</h1>
                  <p className="text-md text-gray-500">#010101</p>
                </div>
                <div className="text-right">
                  <h1 className="font-semibold">Order Date</h1>
                  <p className="text-md text-gray-500">2024-06-15</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Order Status</h1>
                  <p className="text-green-600 font-semibold">Pending</p>
                </div>
                <div className="text-right">
                  <h1 className="font-semibold">Vendor/Supplier Name</h1>
                  <p>Tech Innovations Ltd.</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Staff Responsible</h1>
                  <p>Jane Doe</p>
                </div>
                <div className="text-right">
                  <h1 className="font-semibold">Payment Status</h1>
                  <p className="text-green-600 font-semibold">Paid</p>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-gray-50 to-gray-100 border rounded-2xl border-gray-200 p-6 flex flex-col gap-y-6 shadow-sm">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Address</h1>
                  <p className="text-md text-gray-500">
                    Mars Street 123. Mars Road
                  </p>
                </div>
                <div className="text-right">
                  <h1 className="font-semibold">Created By</h1>
                  <p className="text-md text-gray-500">John Doe</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Expected Arrival Date</h1>
                  <p className="text-md text-gray-500">December 31, 2099</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Receiving Status</h1>
                  <p className="text-md text-gray-500">Still on the way...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 w-3/5">
            <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700 min-w-[150px]">
                      Item Name
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700 min-w-[150px]">
                      Quantity
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700 min-w-[150px]">
                      Unit Price
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700 min-w-[150px]">
                      Total Price
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700 min-w-[180px]">
                      Warehouse Location
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-primary-50 transition-colors even:bg-gray-50">
                    <td className="px-4 py-2">Widget A</td>
                    <td className="px-4 py-2">10</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$150.00</td>
                    <td className="px-4 py-2">Warehouse 1</td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors even:bg-gray-50">
                    <td className="px-4 py-2">Widget B</td>
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$75.00</td>
                    <td className="px-4 py-2">Warehouse 2</td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors even:bg-gray-50">
                    <td className="px-4 py-2">Widget C</td>
                    <td className="px-4 py-2">20</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$300.00</td>
                    <td className="px-4 py-2">Warehouse 3</td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors even:bg-gray-50">
                    <td className="px-4 py-2">Widget D</td>
                    <td className="px-4 py-2">50</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$750.00</td>
                    <td className="px-4 py-2">Warehouse 1</td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors even:bg-gray-50">
                    <td className="px-4 py-2">Widget D</td>
                    <td className="px-4 py-2">50</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$750.00</td>
                    <td className="px-4 py-2">Warehouse 2</td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors even:bg-gray-50">
                    <td className="px-4 py-2">Widget B</td>
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$75.00</td>
                    <td className="px-4 py-2">Warehouse 3</td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors even:bg-gray-50">
                    <td className="px-4 py-2">Widget B</td>
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$75.00</td>
                    <td className="px-4 py-2">Warehouse 1</td>
                  </tr>
                </tbody>
                {/* No table footer, total will be shown below */}
              </table>
            </div>
            {/* Total below the table */}
            <div className="flex flex-col gap-y-4 w-1/2 justify-end mt-4">
              <div className="flex items-center gap-x-4 bg-gray-100 rounded-xl px-6 py-3 shadow border border-green-200">
                <span className="text-lg font-bold text-gray-700">Total:</span>
                <span className="text-2xl font-extrabold text-green-600">
                  $2,175.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOrderModal;
