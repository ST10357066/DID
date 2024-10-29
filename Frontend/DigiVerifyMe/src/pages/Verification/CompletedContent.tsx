// Frontend\DigiVerifyMe\src\pages\Verification\CompletedContent.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/common/Card";
import Button from "../../components/common/Button";
import Badge from "../../components/common/Badge";
import { Eye } from 'lucide-react';
interface Request {
    id: number;
    service: string;
    completedAt: string; // You can use Date type if you convert it later
    attributes: string[];
    status: 'Approved' | 'Denied'; // Adjust according to your use case
  }
  
  const CompletedContent = ({ requests }: { requests: Request[] }) => (

  <Card>
    <CardHeader>
      <CardTitle>Completed Requests</CardTitle>
      <CardDescription>Requests that have been processed</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {requests.map(request => (
        <Card key={request.id} className="border">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{request.service}</h3>
                <p className="text-sm text-muted-foreground">
                  Completed {new Date(request.completedAt).toLocaleString()}
                </p>
              </div>
              <Badge variant={request.status === 'Approved' ? 'success' : 'destructive'}>
                {request.status}
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Shared Attributes:</p>
              <div className="flex flex-wrap gap-2">
                {request.attributes.map(attr => (
                  <Badge key={attr} variant="secondary">{attr}</Badge>
                ))}
              </div>
            </div>
            <Button variant="outline" className="mt-4">
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </CardContent>
  </Card>
);

export default CompletedContent;
