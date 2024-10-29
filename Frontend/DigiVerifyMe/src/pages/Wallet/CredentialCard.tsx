// Frontend\DigiVerifyMe\src\pages\WalletPage\CredentialCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from "../../components/common/Badge";
import Button from "../../components/common/Button";
import { Clock } from 'lucide-react';

interface Credential {
  id: number;
  type: string;
  issuer: string;
  status: string;
  expiryDate: string;
}

interface CredentialCardProps {
  credential: Credential;
  onRevoke: (credential: Credential) => void;
  onShare: () => void; // Add onShare prop
}

const CredentialCard: React.FC<CredentialCardProps> = ({ credential, onRevoke }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/credential/${credential.id}`);
  };

  const handleShare = () => {
    console.log(`Sharing credential: ${credential.id}`);
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-bold">{credential.type}</h3>
          <p className="text-sm text-muted-foreground">{credential.issuer}</p>
        </div>
        <Badge variant={credential.status === 'Active' ? 'default' : 'secondary'}>
          {credential.status}
        </Badge>
      </div>
      <div className="flex items-center text-sm text-muted-foreground">
        <Clock className="h-4 w-4 mr-2" />
        Expires: {credential.expiryDate}
      </div>
      <div className="flex gap-2 mt-4">
        <Button variant="outline" size="small" onClick={handleViewDetails}>View Details</Button>
        <Button variant="outline" size="small" onClick={handleShare}>Share</Button>
        <Button variant="outline" size="small" className="text-red-600" onClick={() => onRevoke(credential)}>Revoke</Button>
      </div>
    </div>
  );
};

export default CredentialCard;
