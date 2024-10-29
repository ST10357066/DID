// Frontend\DigiVerifyMe\src\pages\Verification\VerificationRequestPage.tsx
import Button from "../../components/common/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Tabs";
import { Lock, RefreshCw } from 'lucide-react';
import React, { useState, useMemo, useCallback, Suspense } from 'react';
// other imports

// Lazy load content components
const PendingContent = React.lazy(() => import('./PendingContent'));
const CompletedContent = React.lazy(() => import('./CompletedContent'));

function VerificationRequestPage() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const pendingRequests = [
    {
      id: 1,
      service: "ExampleBank",
      requestedAt: "2024-10-19T10:30:00",
      attributes: ["Full Name", "Date of Birth", "Address"],
      purpose: "Account Opening",
      expiresIn: "24 hours"
    },
    {
      id: 2,
      service: "CarRental Co",
      requestedAt: "2024-10-19T09:15:00",
      attributes: ["Driver's License", "Age"],
      purpose: "Age Verification",
      expiresIn: "12 hours"
    }
  ];

  const completedRequests = [
    {
      id: 3,
      service: "TravelAgency",
      completedAt: "2024-10-18T14:20:00",
      attributes: ["Passport Details"],
      status: "Approved" as 'Approved' // Ensure correct type here
    }
  ];

  const tabs = useMemo(() => [
    { value: "pending", label: "Pending Requests" },
    { value: "completed", label: "Completed" },
  ], []);

  const handleTabChange = useCallback((index: number) => {
    setTabIndex(index);
    console.log(`Active tab changed to: ${tabs[index].label}`);
  }, [tabs]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Verification Requests</h1>
        <Button variant="outline">
          <Lock className="mr-2 h-4 w-4" />
          ZKP Settings
        </Button>
      </div>

      <Tabs defaultValue={tabIndex} onValueChange={(value) => {
          const index = tabs.findIndex(tab => tab.value === value);
          handleTabChange(index);
      }} className="space-y-4">
        <TabsList>
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              isActive={tabIndex === index}
              onClick={() => handleTabChange(index)}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <Suspense fallback={<div>Loading...</div>}>
          <TabsContent value={tabs[tabIndex].value} isActive={true}>
            {tabIndex === 0 ? (
              <PendingContent requests={pendingRequests} />
            ) : (
              <CompletedContent requests={completedRequests} />
            )}
          </TabsContent>
        </Suspense>
      </Tabs>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={() => console.log('Refresh requests')}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh Requests
        </Button>
      </div>
    </div>
  );
}

export default VerificationRequestPage;
