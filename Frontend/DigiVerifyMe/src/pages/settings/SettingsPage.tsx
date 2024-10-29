// Frontend\DigiVerifyMe\src\pages\settings\SettingsPage.tsx
import React, { useState, useMemo, useCallback, Suspense } from "react";
import Button from "../../components/common/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Tabs";

// Lazy load the content components
const ProfileContent = React.lazy(() => import('./ProfileContent'));
const SecurityContent = React.lazy(() => import('./SecurityContent'));
const PrivacyContent = React.lazy(() => import('./PrivacyContent'));
const NotificationsContent = React.lazy(() => import('./NotificationsContent'));
const ZKPContent = React.lazy(() => import('./ZKPContent'));

function SettingsPage() {
  const [tabIndex, setTabIndex] = useState<number>(0); // Use numeric index for tabs

  // Define tabs with string values for triggers
  const tabs = useMemo(
    () => [
      { value: "profile", label: "Profile" },
      { value: "security", label: "Security" },
      { value: "privacy", label: "Privacy" },
      { value: "notifications", label: "Notifications" },
      { value: "Zkp", label: "ZKP" },
    ],
    []
  );

  // Handle tab change
  const handleTabChange = useCallback((value: string) => {
    const index = tabs.findIndex(tab => tab.value === value);
    if (index !== -1) {
      setTabIndex(index);
      console.log(`Active tab changed to: ${value}`);
    }
  }, [tabs]);

  // Render tab content based on selected tab index
  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return <ProfileContent />;
      case 1:
        return <SecurityContent />;
      case 2:
        return <PrivacyContent />;
      case 3:
        return <NotificationsContent />;
      case 4:
        return <ZKPContent />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button>Save Changes</Button>
      </div>

      <Tabs defaultValue={tabIndex} onValueChange={handleTabChange} className="space-y-4">
        <TabsList>
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value} // Use string value for the tab
              onClick={() => setTabIndex(index)} // Keep using numeric index
              isActive={tabIndex === index} // Check if current tab is active
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <Suspense fallback={<div>Loading...</div>}>
          <TabsContent value={tabs[tabIndex].value} isActive={true}>
            {renderTabContent()}
          </TabsContent>
        </Suspense>
      </Tabs>
    </div>
  );
}

export default SettingsPage;
