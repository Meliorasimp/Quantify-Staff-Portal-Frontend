import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
const SalesOrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-8">
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sales Order {id} - <span className="font-bold">Pending</span>
                </h1>
              </div>
            </div>
          </section>
          <div className="flex gap-6">
            <div className="flex flex-col gap-y-6 w-1/3">
              <div className="rounded-2xl shadow-lg border-2 border-blue-300 bg-[rgba(200,220,255,0.6)] p-4">
                <div className="h-full flex flex-col gap-y-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                    <h1 className="text-xl font-bold p-2">Order Header</h1>
                  </div>
                  <div>
                    <h3 className="font-light">Sales Order ID/Number</h3>
                    <p className="font-semibold text-gray-700 text-lg">#{id}</p>
                  </div>
                  <div>
                    <h3 className="font-light">Order Date</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      30/11/2025
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Customer Name</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      Acme Corporation
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Order Status</h3>
                    <p className="font-semibold text-blue-600 text-lg">
                      Processing
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Staff Responsible</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      John Smith
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl shadow-lg border-2 border-purple-300 bg-[rgba(233,220,255,0.7)] p-4">
                <div className="h-full flex flex-col gap-y-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>

                    <h1 className="text-xl font-bold p-2">Logistics</h1>
                  </div>
                  <div>
                    <h3 className="font-light">Delivery Address</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      5678 Oak Avenue, Los Angeles, CA 90001
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Shipping Method</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      Express Delivery
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Expected Delivery Date</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      05/12/2025
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Shipping Status</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      Preparing for shipment...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl shadow-lg border-2 border-blue-300 bg-[rgba(200,230,255,0.6)] p-4 w-2/3">
              <div className="flex flex-col h-full gap-y-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>

                  <h1 className="text-xl font-bold p-2">Order List</h1>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-blue-100 sticky top-0">
                      <tr>
                        <th className="border border-blue-300 px-4 py-3 text-left font-semibold text-gray-700">
                          Item Name
                        </th>
                        <th className="border border-blue-300 px-4 py-3 text-left font-semibold text-gray-700">
                          SKU
                        </th>
                        <th className="border border-blue-300 px-4 py-3 text-center font-semibold text-gray-700">
                          Quantity
                        </th>
                        <th className="border border-blue-300 px-4 py-3 text-right font-semibold text-gray-700">
                          Unit Price
                        </th>
                        <th className="border border-blue-300 px-4 py-3 text-right font-semibold text-gray-700">
                          Total Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="even:bg-blue-50 hover:bg-blue-100 transition-colors">
                        <td className="border border-blue-200 px-4 py-2">
                          Gaming Laptop
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-gray-600">
                          GL-001
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-center">
                          10
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-right">
                          $1,200.00
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-right font-semibold">
                          $12,000.00
                        </td>
                      </tr>
                      <tr className="even:bg-blue-50 hover:bg-blue-100 transition-colors">
                        <td className="border border-blue-200 px-4 py-2">
                          Wireless Headset
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-gray-600">
                          WH-002
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-center">
                          25
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-right">
                          $80.00
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-right font-semibold">
                          $2,000.00
                        </td>
                      </tr>
                      <tr className="even:bg-blue-50 hover:bg-blue-100 transition-colors">
                        <td className="border border-blue-200 px-4 py-2">
                          Mechanical Keyboard
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-gray-600">
                          MK-003
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-center">
                          15
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-right">
                          $120.00
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-right font-semibold">
                          $1,800.00
                        </td>
                      </tr>
                      <tr className="even:bg-blue-50 hover:bg-blue-100 transition-colors">
                        <td className="border border-blue-200 px-4 py-2">
                          4K Monitor
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-gray-600">
                          4KM-004
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-center">
                          8
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-right">
                          $450.00
                        </td>
                        <td className="border border-blue-200 px-4 py-2 text-right font-semibold">
                          $3,600.00
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="bg-blue-200 font-bold">
                        <td
                          colSpan={4}
                          className="border border-blue-300 px-4 py-3 text-right text-gray-800"
                        >
                          Total Amount:
                        </td>
                        <td className="border border-blue-300 px-4 py-3 text-right text-blue-700 text-lg">
                          $19,400.00
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalesOrderDetails;
