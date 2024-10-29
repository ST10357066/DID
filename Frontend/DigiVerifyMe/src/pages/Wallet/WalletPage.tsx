// Frontend\DigiVerifyMe\src\pages\WalletPage\WalletPage.tsx
import CredentialCard from "./CredentialCard";
import StatCard from "./StatCard";
import Button from "../../components/common/Button";
import { CreditCard, Key, Shield, CheckCircle } from 'lucide-react';

// Define the type for Credential
interface Credential {
  id: number;
  type: string;
  issuer: string;
  status: string;
  expiryDate: string;
}

function WalletPage() {
  const credentials: Credential[] = [
    {
      id: 1,
      type: "Government ID",
      issuer: "National Identity Authority",
      status: "Active",
      expiryDate: "2025-12-31"
    },
    {
      id: 2,
      type: "Driver's License",
      issuer: "Department of Transportation",
      status: "Active",
      expiryDate: "2024-08-15"
    }
  ];

  // Implement the onRevoke function
  const handleRevoke = (credential: Credential) => {
    console.log(`Revoking credential: ${credential.id}`);
    // Add logic to revoke the credential here
  };

  // Implement the share function
  const handleShare = (credential: Credential) => {
    const shareData = {
      title: `${credential.type} from ${credential.issuer}`,
      text: `I would like to share my ${credential.type} with you.\n\nIssuer: ${credential.issuer}\nStatus: ${credential.status}\nExpiry Date: ${credential.expiryDate}`,
      url: window.location.href // The current page URL
    };

    // Check if the Web Share API is supported
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Credential shared successfully'))
        .catch((error) => console.error('Error sharing credential:', error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      console.log('Sharing is not supported in this browser.');
      alert(`Share this credential manually:\n\n${shareData.text}\n\nLink: ${shareData.url}`);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Identity Wallet</h1>
        <Button>
          <Key className="mr-2 h-4 w-4" />
          Add Credential
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="DID" value="did:example:123...abc" icon={<Shield className="h-6 w-6 text-blue-600" />} />
        <StatCard title="Active Credentials" value={credentials.length} icon={<CreditCard className="h-6 w-6 text-green-600" />} />
        <StatCard title="Trust Score" value="98%" icon={<CheckCircle className="h-6 w-6 text-purple-600" />} />
      </div>

      <div className="space-y-4">
        {credentials.map(credential => (
          <CredentialCard
            key={credential.id}
            credential={credential}
            onRevoke={handleRevoke}
            onShare={() => handleShare(credential)} // Pass share function as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default WalletPage;
