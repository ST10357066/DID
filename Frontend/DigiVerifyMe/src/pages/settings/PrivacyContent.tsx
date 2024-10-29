// Frontend\DigiVerifyMe\src\pages\settings\PrivacyContent.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import Switch from "../../components/common/Switch";

// PrivacyContent component
const PrivacyContent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Privacy Settings</CardTitle>
      <CardDescription>Control how your information is shared</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {[
        {
          title: "Default Sharing Mode",
          description: "Use Zero-Knowledge Proofs by default",
        },
        {
          title: "Automatic Verification",
          description: "Automatically approve known services",
        },
        {
          title: "Activity Logging",
          description: "Keep detailed logs of verification activities",
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
);

export default PrivacyContent;
