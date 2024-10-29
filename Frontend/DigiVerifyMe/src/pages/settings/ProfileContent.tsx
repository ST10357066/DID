// Frontend\DigiVerifyMe\src\pages\settings\ProfileContent.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

// ProfileContent component
const ProfileContent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Profile Information</CardTitle>
      <CardDescription>Manage your public profile information</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <form>
        {[
          { label: "Display Name", id: "display-name", type: "text" },
          { label: "Email", id: "email", type: "email" },
        ].map(({ label, id, type }) => (
          <div key={id} className="space-y-2">
            <label htmlFor={id} className="text-sm font-medium">{label}</label>
            <Input id={id} placeholder={`Your ${label.toLowerCase()}`} type={type} />
          </div>
        ))}
        <div className="space-y-2">
          <label htmlFor="bio" className="text-sm font-medium">Bio</label>
          <textarea
            id="bio"
            className="w-full min-h-[100px] p-2 border rounded-md"
            placeholder="Tell us about yourself"
          />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </CardContent>
  </Card>
);

export default ProfileContent;
