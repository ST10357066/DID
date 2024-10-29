// Frontend/DigiVerifyMe/src/pages/SessionManagementPage.tsx
import { Card, CardContent, CardHeader, CardTitle } from "../components/common/Card";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import { Smartphone, Laptop, Globe, Clock, Shield, XCircle, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SessionManagementPage() {
  const navigate = useNavigate();

  const sessions = [
    {
      id: 1,
      device: "Chrome / MacBook Pro",
      location: "San Francisco, US",
      lastActive: "Current Session",
      ip: "192.168.1.1",
      icon: Laptop,
      current: true
    },
    {
      id: 2,
      device: "Safari / iPhone 13",
      location: "San Francisco, US",
      lastActive: "5 minutes ago",
      ip: "192.168.1.2",
      icon: Smartphone
    },
    {
      id: 3,
      device: "Firefox / Windows",
      location: "New York, US",
      lastActive: "1 hour ago",
      ip: "192.168.1.3",
      icon: Globe
    }
  ];

  // Explicitly declare the type for the sessionId parameter
  const handleSessionClick = (sessionId: number) => {
    navigate(`/session/${sessionId}`); // Navigate to session detail page
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Active Sessions</h1>
        <Button variant="outline" title="Refresh session data">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      <p className="mb-4 text-gray-600">
        Here you can manage your active sessions. For security, we recommend revoking access for devices you don't recognize.
      </p>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Session Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">
              <Shield className="mr-2 h-4 w-4" />
              Enable 2FA
            </Button>
            <Button variant="outline" className="justify-start">
              <Clock className="mr-2 h-4 w-4" />
              Set Session Timeout
            </Button>
            <Button variant="destructive" className="justify-start">
              <XCircle className="mr-2 h-4 w-4" />
              Revoke All Sessions
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {sessions.map((session) => {
          const Icon = session.icon;
          return (
            <Card key={session.id} onClick={() => handleSessionClick(session.id)} className="cursor-pointer hover:bg-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-muted rounded-full">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold">{session.device}</h3>
                        {session.current && (
                          <Badge variant="secondary">Current Session</Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Location: {session.location}</p>
                        <p>IP Address: {session.ip}</p>
                        <p>Last Active: {session.lastActive}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button 
                      variant="destructive" 
                      size="small"
                      disabled={session.current}
                    >
                      Revoke Access
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}


// sessionManager