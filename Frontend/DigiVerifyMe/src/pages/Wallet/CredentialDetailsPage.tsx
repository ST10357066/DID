// Frontend\DigiVerifyMe\src\pages\WalletPage\CredentialDetailsPage.tsx
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/common/Card';
import Button from '../../components/common/Button';

// Define an interface for the Credential type
interface Credential {
  id: string; // Update to string if credentialId is a string
  type: string;
  issuer: string;
  status: string;
  expiryDate: string;
  idNumber: string;
  issuedDate: string;
}

const CredentialDetailsPage = () => {
  const { credentialId } = useParams(); // Use credentialId to fetch specific credential details
  
  // Assuming this would normally come from an API or state management
  const credential: Credential = {
    id: credentialId || '', // Ensure id is a string, handle cases where credentialId may be undefined
    type: "Government ID",
    issuer: "National Identity Authority",
    status: "Active",
    expiryDate: "2025-12-31",
    idNumber: "123456789",
    issuedDate: "2020-01-01",
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{credential.type}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p><strong>Issuer:</strong> {credential.issuer}</p>
            <p><strong>Status:</strong> {credential.status}</p>
            <p><strong>Expiry Date:</strong> {credential.expiryDate}</p>
            <p><strong>ID Number:</strong> {credential.idNumber}</p>
            <p><strong>Issued Date:</strong> {credential.issuedDate}</p>
          </div>
          <div className="mt-4">
            <Link to="/wallet" className="mr-4">
              <Button>Back to Wallet</Button>
            </Link>
            <Button onClick={() => handleShare(credential)}>Share Credential</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Share function to handle sharing the credential
const handleShare = (credential: Credential) => { // Specify the type here
  const shareData = {
    title: `${credential.type} from ${credential.issuer}`,
    text: `I would like to share my ${credential.type} with you. \n\nID Number: ${credential.idNumber}\nExpiry Date: ${credential.expiryDate}`,
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

export default CredentialDetailsPage;
