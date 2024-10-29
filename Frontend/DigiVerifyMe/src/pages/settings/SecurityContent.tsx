// Frontend\DigiVerifyMe\src\pages\settings\SecurityContent.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import Switch from "../../components/common/Switch";

// SecurityContent component
const SecurityContent = () => (
  <div className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Two-Factor Authentication</CardTitle>
        <CardDescription>Secure your account with 2FA</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          {
            title: "Authenticator App",
            description: "Use an authenticator app to generate verification codes",
          },
          {
            title: "Biometric Authentication",
            description: "Use fingerprint or face recognition",
          },
        ].map(({ title, description }) => (
          <div key={title} className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">{title}</div>
              <div className="text-sm text-muted-foreground">{description}</div>
            </div>
            <Switch />
          </div>
        ))}
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Session Management</CardTitle>
        <CardDescription>Control your active sessions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Auto-logout Timer</div>
              <div className="text-sm text-muted-foreground">
                Automatically log out after inactivity
              </div>
            </div>
            <select className="border rounded-md p-1">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>Never</option>
            </select>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default SecurityContent;
