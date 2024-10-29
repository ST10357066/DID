import  { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/common/Card";
import  Button  from "../../components/common/Button";
import  Input  from "../../components/common/Input";
import { Shield, Wallet, Key, ArrowRight, CheckCircle } from 'lucide-react';

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Username</label>
              <Input placeholder="Choose a username" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input type="password" placeholder="Create a strong password" />
            </div>
            <Button className="w-full" onClick={() => setStep(2)}>
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Create New Wallet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Generate a new decentralized identity wallet
              </p>
              <Button className="w-full" onClick={() => setStep(3)}>
                <Wallet className="mr-2 h-4 w-4" />
                Generate Wallet
              </Button>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Import Existing Wallet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect your existing wallet or DID
              </p>
              <Button variant="outline" className="w-full">
                <Key className="mr-2 h-4 w-4" />
                Import Wallet
              </Button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Wallet Created Successfully!</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your decentralized identity has been created. Keep your recovery phrase safe.
              </p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg text-center">
              <p className="text-sm font-mono">word1 word2 word3 word4 ... word12</p>
            </div>
            
            <Button className="w-full" onClick={() => setStep(4)}>
              I've Saved My Recovery Phrase
            </Button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Set up your decentralized identity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    step >= i ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          {renderStep()}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center space-x-4">
            <a href="/login" className="text-blue-600 hover:underline">
              Already have an account? Sign in
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}