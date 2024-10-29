// Frontend\DigiVerifyMe\src\pages\DashboardPage.tsx
import { Card, CardContent, CardHeader, CardTitle } from "../components/common/Card";
import { Bell, Shield, Smartphone, Activity, AlertTriangle } from 'lucide-react';
import  Button  from "../components/common/Button";

 function DashboardPage() {
  const sessions = [
    { device: 'Chrome / MacOS', lastActive: 'Active now', id: 1 },
    { device: 'Mobile App / iOS', lastActive: '2 hours ago', id: 2 },
  ];

  const recentActivity = [
    { type: 'Verification Request', from: 'ExampleService', time: '10 minutes ago', id: 1 },
    { type: 'Credential Updated', from: 'System', time: '1 hour ago', id: 2 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Identity Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessions.map(session => (
                <div key={session.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{session.device}</div>
                    <div className="text-sm text-muted-foreground">{session.lastActive}</div>
                  </div>
                  <Button variant="outline" size="small">Revoke</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <Activity className="h-4 w-4" />
                  <div>
                    <div className="font-medium">{activity.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {activity.from} • {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;