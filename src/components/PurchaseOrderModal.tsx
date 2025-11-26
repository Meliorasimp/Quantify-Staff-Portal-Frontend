const PurchaseOrderModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl shadow-2xl p-10 w-full max-w-5xl mx-4 h-[80vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition-colors text-2xl font-bold z-10"
          aria-label="Close"
        >
          &times;
        </button>
        {/* Header Row: Purchase Order # and Order Details aligned */}
        <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">
            Purchase Order #001
          </h1>
          <h1 className="text-2xl font-semibold text-primary-700">
            Order Details
          </h1>
        </div>
        <div className="flex flex-1 justify-between gap-x-6 overflow-y-auto">
          <div className="flex flex-col gap-y-6 w-1/2">
            <div className="bg-linear-to-br from-gray-50 to-gray-100 border rounded-2xl border-gray-200 p-6 flex flex-col gap-y-6 shadow-sm">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold">Purchase Order ID</h1>
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
                  <p className="text-green-600 font-semibold">Approved</p>
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
          <div className="flex flex-col gap-y-6 w-1/2">
            <div className="bg-white border border-gray-200 rounded-2xl shadow p-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700">
                      Item Name
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700">
                      Quantity
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700">
                      Unit Price
                    </th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-primary-50 transition-colors">
                    <td className="px-4 py-2">Widget A</td>
                    <td className="px-4 py-2">10</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$150.00</td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors">
                    <td className="px-4 py-2">Widget B</td>
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$75.00</td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors">
                    <td className="px-4 py-2">Widget C</td>
                    <td className="px-4 py-2">20</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$300.00</td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors">
                    <td className="px-4 py-2">Widget D</td>
                    <td className="px-4 py-2">50</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$750.00</td>
                  </tr>

                  <tr className="hover:bg-primary-50 transition-colors">
                    <td className="px-4 py-2">Widget D</td>
                    <td className="px-4 py-2">50</td>
                    <td className="px-4 py-2">$15.00</td>
                    <td className="px-4 py-2">$750.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td
                      colSpan={3}
                      className="px-4 py-3 text-right font-bold text-lg text-gray-800 bg-gray-50 rounded-bl-2xl"
                    >
                      Total
                    </td>
                    <td className="px-4 py-3 font-extrabold text-lg text-green-600 bg-gray-50 rounded-br-2xl border-l-4 border-green-400 shadow-inner">
                      $1,275.00
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderModal;
