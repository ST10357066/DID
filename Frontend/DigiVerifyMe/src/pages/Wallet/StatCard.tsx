// Frontend\DigiVerifyMe\src\pages\WalletPage\StatCard.tsx
import { Card, CardContent } from "../../components/common/Card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: JSX.Element;
}

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-xl font-bold truncate" style={{ maxWidth: '200px' }}>{value}</p>
        </div>
        {icon}
      </div>
    </CardContent>
  </Card>
);

export default StatCard;
