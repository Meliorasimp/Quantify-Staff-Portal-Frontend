import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "../../store";
import FetchPurchaseOrderById from "../../gql/query/purchaseOrderQuery/purchaseOrderById.gql";
import type { PurchaseOrderByIdResponseType } from "../../types/purchaseorder";
import { useMutation, useQuery } from "@apollo/client/react";
import { setIsMarkAsDeliveredPopupOpen } from "../../store/InteractionSlice";
import ChangeOrderStatus from "../../gql/mutations/PurchaseOrderMutation/changeOrderStatus.gql";
import FetchAllPurchaseOrder from "../../gql/query/purchaseOrderQuery/allPurchaseOrderQuery.gql";
import { lazy, Suspense } from "react";
import { toast } from "sonner";
const MarkAsDeliveredPopup = lazy(
  () => import("../../popup/MarkAsDeliveredConfirmation")
);
const PurchaseOrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchaseId = useSelector(
    (state: RootState) => state.interaction.purchaseOrderId
  );

  const isMarkAsDeliveredPopupOpen = useSelector(
    (state: RootState) => state.interaction.isMarkAsDeliveredPopupOpen
  );
  const actualId = purchaseId || (id ? parseInt(id, 10) : undefined);

  const { data: purchaseOrderDetailsData, loading } =
    useQuery<PurchaseOrderByIdResponseType>(FetchPurchaseOrderById, {
      variables: { id: actualId },
      fetchPolicy: "network-only",
      skip: !actualId, // Skip query if no ID is available
    });

  const [ChangePOStatus, { loading: changeStatusLoading }] = useMutation(
    ChangeOrderStatus,
    {
      refetchQueries: [FetchAllPurchaseOrder],
    }
  );
  console.log("Loading status:", changeStatusLoading);
  const HandleChangeStatus = async (id: number) => {
    try {
      const response = await ChangePOStatus({
        variables: {
          id,
        },
      });
      if (response && response.data) {
        toast.success("Purchase order marked as delivered.");
        navigate("/purchaseorders/all");
      }
    } catch (e) {
      console.error("Error changing order status:", e);
    }
  };
  if (loading) {
    return (
      <div className="flex h-screen overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
          <div className="min-h-full p-8">
            <div className="text-center flex justify-between items-center py-8">
              <p className="text-lg text-gray-600">
                Loading purchase order details...
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-8">
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-extrabold text-green-600">
                  Purchase Order {id} -{" "}
                  <span
                    className={`font-bold ${
                      purchaseOrderDetailsData?.purchaseOrderById.status ===
                      "Pending"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {purchaseOrderDetailsData?.purchaseOrderById.status ||
                      "Status"}
                  </span>
                </h1>
              </div>
            </div>
          </section>
          <div className="flex gap-6">
            <div className="flex flex-col gap-y-6 w-1/3">
              <div className="rounded-2xl shadow-lg border-2 border-green-300 bg-[rgba(200,255,200,0.6)] p-4">
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
                    <h3 className="font-light">Purchase Order ID/Number</h3>
                    <p className="font-semibold text-gray-700 text-lg">#{id}</p>
                  </div>
                  <div>
                    <h3 className="font-light">Order Date</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      {purchaseOrderDetailsData?.purchaseOrderById.orderDate ||
                        "01/11/2025"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Supplier/Vendor Name</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      {purchaseOrderDetailsData?.purchaseOrderById
                        .supplierName || "Unknown Supplier"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Order Status</h3>
                    <p className="font-semibold text-green-600 text-lg">Paid</p>
                  </div>
                  <div>
                    <h3 className="font-light">Staff Responsible</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      {purchaseOrderDetailsData?.purchaseOrderById
                        .staffResponsible || "John Doe"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl shadow-lg border-2 border-blue-300 bg-[rgba(233,233,255,0.7)] p-4">
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
                    <h3 className="font-light">Warehouse Destination</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      {purchaseOrderDetailsData?.purchaseOrderById
                        .deliveryWarehouse || "Main Warehouse"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Shipping Method</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      Standard Ground
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Expected Arrival Date</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      {purchaseOrderDetailsData?.purchaseOrderById
                        .expectedDeliveryDate || "01/25/2025"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-light">Receiving Status</h3>
                    <p
                      className={`font-bold ${
                        purchaseOrderDetailsData?.purchaseOrderById.status ===
                        "Pending"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      {purchaseOrderDetailsData?.purchaseOrderById.status ||
                        "Pending"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl shadow-lg border-2 border-green-300 bg-[rgba(200,255,235,0.6)] p-4 w-2/3">
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
                  <div className="flex items-center justify-between w-full">
                    <h1 className="text-xl font-bold p-2">Order List</h1>
                    {purchaseOrderDetailsData?.purchaseOrderById.status ===
                    "Pending" ? (
                      <div
                        className="flex items-center gap-x-2 text-green-600 hover:underline cursor-pointer"
                        onClick={() =>
                          dispatch(setIsMarkAsDeliveredPopupOpen(true))
                        }
                      >
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
                            d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                          />
                        </svg>
                        <h1 className="text-green-600">Mark as Delivered</h1>
                      </div>
                    ) : (
                      <div className="flex items-center gap-x-2 text-green-600">
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <h1 className="text-green-600">Delivered</h1>
                      </div>
                    )}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-green-100 sticky top-0">
                      <tr>
                        <th className="border border-green-300 px-4 py-3 text-left font-semibold text-gray-700">
                          Item Name
                        </th>
                        <th className="border border-green-300 px-4 py-3 text-left font-semibold text-gray-700">
                          SKU
                        </th>
                        <th className="border border-green-300 px-4 py-3 text-center font-semibold text-gray-700">
                          Quantity
                        </th>
                        <th className="border border-green-300 px-4 py-3 text-right font-semibold text-gray-700">
                          Unit Price
                        </th>
                        <th className="border border-green-300 px-4 py-3 text-right font-semibold text-gray-700">
                          Total Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchaseOrderDetailsData?.purchaseOrderById.items.map(
                        (item) => (
                          <tr
                            key={item.id}
                            className="even:bg-green-50 hover:bg-green-100 transition-colors"
                          >
                            <td className="border border-green-200 px-4 py-2">
                              <p>{item.productName}</p>
                            </td>
                            <td className="border border-green-200 px-4 py-2 text-gray-600">
                              <p>SKU-{item.id}</p>
                            </td>
                            <td className="border border-green-200 px-4 py-2 text-right">
                              <p>{item.quantity}</p>
                            </td>
                            <td className="border border-green-200 px-4 py-2 text-right">
                              <p>&#8369;{item.price}</p>
                            </td>
                            <td className="border border-green-200 px-4 py-2 text-right">
                              <p>
                                &#8369;{(item.quantity * item.price).toFixed(2)}
                              </p>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                    <tfoot>
                      <tr className="bg-green-50">
                        <td
                          colSpan={4}
                          className="border border-green-300 px-4 py-3 text-right text-gray-700"
                        >
                          Tax (10%):
                        </td>
                        <td className="border border-green-300 px-4 py-3 text-right text-gray-700">
                          &#8369;{" "}
                          {(
                            (purchaseOrderDetailsData?.purchaseOrderById.items.reduce(
                              (total, item) =>
                                total + item.quantity * item.price,
                              0
                            ) || 0) * 0.1
                          ).toFixed(2)}
                        </td>
                      </tr>
                      <tr className="bg-green-200 font-bold">
                        <td
                          colSpan={4}
                          className="border border-green-300 px-4 py-3 text-right text-gray-800"
                        >
                          Total Amount:
                        </td>
                        <td className="border border-green-300 px-4 py-3 text-right text-green-700 text-lg">
                          &#8369;{" "}
                          {(
                            (purchaseOrderDetailsData?.purchaseOrderById.items.reduce(
                              (total, item) =>
                                total + item.quantity * item.price,
                              0
                            ) || 0) * 1.1
                          ).toFixed(2)}
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
      {isMarkAsDeliveredPopupOpen && (
        <Suspense
          fallback={<div className="absolute inset-0 z-10">Loading...</div>}
        >
          <MarkAsDeliveredPopup
            onClose={() => {
              dispatch(setIsMarkAsDeliveredPopupOpen(false));
            }}
            onConfirm={() => HandleChangeStatus(Number(actualId!))}
            onLoading={changeStatusLoading}
          />
        </Suspense>
      )}
    </div>
  );
};

export default PurchaseOrderDetails;
