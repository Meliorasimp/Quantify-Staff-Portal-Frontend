import Navbar from "../components/Navbar";
const AuditLogs = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Audit Logs
                </h1>
                <p className="text-lg text-gray-600">
                  View and manage audit logs for system activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuditLogs;
