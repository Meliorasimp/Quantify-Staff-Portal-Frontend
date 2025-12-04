import Navbar from "../components/Navbar";
const Settings = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Settings
                </h1>
                <p className="text-lg text-gray-600">
                  Configure your application preferences and account settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
