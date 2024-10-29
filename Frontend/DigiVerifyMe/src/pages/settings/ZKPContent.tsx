// DigiVerifyMe\src\pages\settings\ZKPContent.tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../../components/common/Card";
  import Switch from "../../components/common/Switch";
  
  // ZKPContent component
  const ZKPContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Zero-Knowledge Proof Settings</CardTitle>
        <CardDescription>Manage your ZKP preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          {
            title: "Enable Age Verification",
            description: "Allow age verification using Zero-Knowledge Proofs.",
          },
          {
            title: "Enable Identity Verification",
            description: "Allow identity verification using Zero-Knowledge Proofs.",
          },
          {
            title: "Default Proof Type",
            description: "Set your default proof type for ZKP requests.",
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
  
  export default ZKPContent;
  