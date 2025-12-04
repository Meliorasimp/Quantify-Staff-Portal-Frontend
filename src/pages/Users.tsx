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
        </div>
      </main>
    </div>
  );
};

export default Users;
