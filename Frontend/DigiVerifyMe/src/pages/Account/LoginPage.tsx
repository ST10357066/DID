import{ useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/common/Card";
import  Button  from "../../components/common/Button";
import  Input  from "../../components/common/Input";
import { Fingerprint, Key, Shield } from 'lucide-react';

 function LoginPage() {
  const [loginMethod, setLoginMethod] = useState('password');
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Sign in to your decentralized identity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {loginMethod === 'password' && (
              <>
                <Input
                  type="text"
                  placeholder="Username or DID"
                  className="w-full"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-full"
                />
              </>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant={loginMethod === 'password' ? 'default' : 'outline'}
              className="flex-1"
              onClick={() => setLoginMethod('password')}
            >
              <Key className="mr-2 h-4 w-4" />
              Password
            </Button>
            <Button 
              variant={loginMethod === 'biometric' ? 'default' : 'outline'}
              className="flex-1"
              onClick={() => setLoginMethod('biometric')}
            >
              <Fingerprint className="mr-2 h-4 w-4" />
              Biometric
            </Button>
            <Button 
              variant={loginMethod === 'wallet' ? 'default' : 'outline'}
              className="flex-1"
              onClick={() => setLoginMethod('wallet')}
            >
              <Shield className="mr-2 h-4 w-4" />
              Wallet
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Sign In</Button>
          <div className="text-sm text-center space-x-4">
            <a href="/signup" className="text-blue-600 hover:underline">Create Account</a>
            <span>•</span>
            <a href="/recovery" className="text-blue-600 hover:underline">Recover Access</a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;
