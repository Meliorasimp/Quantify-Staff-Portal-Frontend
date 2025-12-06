import Navbar from "../components/Navbar";
const Users = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Users Management
                </h1>
                <p className="text-lg text-gray-600">
                  Manage user accounts and permissions within the system.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-5">
            <input
              type="text"
              className="border border-gray-400 py-2 px-4 w-60 rounded-sm"
              placeholder="Search usernames..."
            />
            <select
              name="role"
              id="role"
              className="border border-gray-400 py-2 px-4 rounded-sm w-40"
              style={{ marginLeft: "10px" }}
            >
              <option value="">All Roles</option>
              <option value="pending">Pending</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
              <option value="viewer">Viewer</option>
            </select>
            <select
              name="status"
              id="status"
              className="border border-gray-400 py-2 px-4 rounded-sm w-40"
              style={{ marginLeft: "10px" }}
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden mt-10">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="flex text-md">
                        <th className="px-6 py-4 text-left font-medium text-black tracking-wider min-w-40 flex gap-x-4 items-center">
                          <input
                            type="checkbox"
                            className="mr-2 scale-120 w-4 h-4 border border-gray-500 rounded-md"
                          />
                          <h1>Profile</h1>
                        </th>
                        <th className="px-6 py-4 text-left font-medium text-black tracking-wider min-w-54 flex gap-x-4 items-center">
                          <h1>Last name</h1>
                        </th>
                        <th className="px-6 py-4 text-left font-medium text-black tracking-wider min-w-54 flex gap-x-4 items-center">
                          <h1>First name</h1>
                        </th>
                        <th className="px-6 py-4 text-left font-medium text-black tracking-wider min-w-94 flex gap-x-4 items-center">
                          <h1>Email</h1>
                        </th>
                        <th className="px-6 py-4 text-left font-medium text-black tracking-wider min-w-40 flex gap-x-4 items-center">
                          <h1>Role</h1>
                        </th>
                        <th className="px-6 py-4 text-left font-medium text-black tracking-wider min-w-40 flex gap-x-4 items-center">
                          <h1>Status</h1>
                        </th>
                        <th className="px-6 py-4 text-left font-medium text-black tracking-wider min-w-30 flex gap-x-4 items-center">
                          <h1>Actions</h1>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="flex">
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-40 flex gap-x-4 items-center">
                          <input
                            type="checkbox"
                            className="mr-2 scale-120 w-4 h-4 border border-gray-500 rounded-md"
                          />
                          <div>
                            <img
                              src="https://i.pravatar.cc/150?img=3"
                              alt="Profile"
                              className="w-8 h-8 rounded-full"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-54 flex gap-x-4 items-center">
                          <h1>Limlengco</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-54 flex gap-x-4 items-center">
                          <h1>Meinard Legashki</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-94 flex gap-x-4 items-center">
                          <h1>limlengcomeinard@gmail.com</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-40 flex gap-x-4 items-center">
                          <h1>Admin</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-40 flex gap-x-3 items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <h1>Active</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-30 flex gap-x-3 items-center">
                          <div className="cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                              color="blue"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                              color="red"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="flex">
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-40 flex gap-x-4 items-center">
                          <input
                            type="checkbox"
                            className="mr-2 scale-120 w-4 h-4 border border-gray-500 rounded-md"
                          />
                          <div>
                            <img
                              src="https://i.pravatar.cc/150?img=3"
                              alt="Profile"
                              className="w-8 h-8 rounded-full"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-54 flex gap-x-4 items-center">
                          <h1>Tenggara</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-54 flex gap-x-4 items-center">
                          <h1>Meliora</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-94 flex gap-x-4 items-center">
                          <h1>meliora.tenggara@gmail.com</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-40 flex gap-x-4 items-center">
                          <h1>Staff</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-40 flex gap-x-3 items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <h1>Active</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-30 flex gap-x-3 items-center">
                          <div className="cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                              color="blue"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </div>
                          <div className="cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                              color="red"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="flex">
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-40 flex gap-x-4 items-center">
                          <input
                            type="checkbox"
                            className="mr-2 scale-120 w-4 h-4 border border-gray-500 rounded-md"
                          />
                          <div>
                            <img
                              src="https://i.pravatar.cc/150?img=3"
                              alt="Profile"
                              className="w-8 h-8 rounded-full"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-54 flex gap-x-4 items-center">
                          <h1>Dangca</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-54 flex gap-x-4 items-center">
                          <h1>Gehlee</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-94 flex gap-x-4 items-center">
                          <h1>gehlee.dangca@gmail.com</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-40 flex gap-x-4 items-center">
                          <h1>Viewer</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-40 flex gap-x-3 items-center">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <h1>Inactive</h1>
                        </td>
                        <td className="px-6 py-4 text-left text-black tracking-wider min-w-30 flex gap-x-3 items-center">
                          <div className="cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                              color="blue"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </div>
                          <div className="cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                              color="red"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    </tbody>
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

export default Users;
