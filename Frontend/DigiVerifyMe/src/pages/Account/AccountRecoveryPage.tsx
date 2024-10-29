// Frontend\DigiVerifyMe\src\pages\AccountRecoveryPage.tsx
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/common/Tabs";
import {
  Key,
  Fingerprint,
  Users,
  Mail,
  Lock,
} from "lucide-react";

export default function AccountRecoveryPage() {
  const [recoveryStep, setRecoveryStep] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Lock className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl text-center">Account Recovery</CardTitle>
          <CardDescription className="text-center">
            Choose a method to recover your account access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={0}>
            <div className="grid grid-cols-4 w-full mb-4">
            <TabsList >
              <TabsTrigger value="phrase" isActive={recoveryStep === 0} onClick={() => setRecoveryStep(0)}>
                Recovery Phrase
              </TabsTrigger>
              <TabsTrigger value="social" isActive={recoveryStep === 1} onClick={() => setRecoveryStep(1)}>
                Social Recovery
              </TabsTrigger>
              <TabsTrigger value="biometric" isActive={recoveryStep === 2} onClick={() => setRecoveryStep(2)}>
                Biometric
              </TabsTrigger>
              <TabsTrigger value="email" isActive={recoveryStep === 3} onClick={() => setRecoveryStep(3)}>
                Email Recovery
              </TabsTrigger>
            </TabsList>
            </div>
            <TabsContent value="phrase" isActive={recoveryStep === 0}>
              <div className="space-y-4">
                <label className="text-sm font-medium">Enter Recovery Phrase</label>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(12)].map((_, i) => (
                    <Input key={i} placeholder={`Word ${i + 1}`} />
                  ))}
                </div>
                <Button className="w-full">
                  <Key className="mr-2 h-4 w-4" />
                  Recover Account
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="social" isActive={recoveryStep === 1}>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Trusted Contacts</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact your trusted recovery contacts to help restore access
                  </p>
                  <div className="space-y-2">
                    {[1, 2, 3].map((contact) => (
                      <div key={contact} className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>Trusted Contact {contact}</span>
                        </div>
                        <Button size="small">Contact</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full">Initiate Social Recovery</Button>
              </div>
            </TabsContent>

            <TabsContent value="biometric" isActive={recoveryStep === 2}>
              <div className="space-y-4 text-center">
                <div className="p-6 border rounded-lg">
                  <Fingerprint className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-medium mb-2">Biometric Verification</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use your registered biometric data to recover access
                  </p>
                </div>
                <Button className="w-full">Start Biometric Verification</Button>
              </div>
            </TabsContent>

            <TabsContent value="email" isActive={recoveryStep === 3}>
              <div className="space-y-4">
                <label className="text-sm font-medium">Enter your registered email address</label>
                <Input placeholder="Email Address" />
                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Recovery Email
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 pt-6 border-t">
            <div className="space-y-4">
              <div className="text-sm text-center space-x-4">
                <a href="/support" className="text-blue-600 hover:underline">Contact Support</a>
                <span>•</span>
                <a href="/faq" className="text-blue-600 hover:underline">Recovery FAQ</a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
