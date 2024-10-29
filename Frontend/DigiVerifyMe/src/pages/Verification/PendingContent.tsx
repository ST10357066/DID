// Frontend\DigiVerifyMe\src\pages\Verification\PendingContent.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/common/Card";
import Button from "../../components/common/Button";
import Badge from "../../components/common/Badge";
import { Clock, CheckCircle2, XCircle, Eye } from 'lucide-react';

// Define the type for a single request
interface PendingRequest {
    id: number;
    service: string;
    requestedAt: string; // You can use Date type if you convert it later
    attributes: string[];
    purpose: string;
    expiresIn: string;
  }
  

  const PendingContent = ({ requests }: { requests: PendingRequest[] }) => (
  <Card>
    <CardHeader>
      <CardTitle>Pending Requests</CardTitle>
      <CardDescription>Requests awaiting action</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {requests.map(request => (
        <Card key={request.id} className="border">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">{request.service}</h3>
                <p className="text-sm text-muted-foreground">
                  Requested {new Date(request.requestedAt).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-sm text-muted-foreground">
                  Expires in {request.expiresIn}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Requested Attributes:</p>
                <div className="flex flex-wrap gap-2">
                  {request.attributes.map(attr => (
                    <Badge key={attr} variant="secondary">
                      {attr}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Purpose:</p>
                <p className="text-sm text-muted-foreground">{request.purpose}</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Approve
                </Button>
                <Button variant="destructive" className="flex-1">
                  <XCircle className="mr-2 h-4 w-4" />
                  Deny
                </Button>
                <Button variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </CardContent>
  </Card>
);

export default PendingContent;
