// DigiVerifyMe\src\pages\Account\Profile.tsx
import React, { useState } from 'react';
import Button from '../../components/common/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';

interface UserProfile {
  usernameOrEmail: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    usernameOrEmail: 'johndoe',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main St, Springfield, USA',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = () => {
    console.log('Profile saved:', profile);
    setIsEditing(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>View and edit your profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Username or Email:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="usernameOrEmail"
                  value={profile.usernameOrEmail}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border rounded-md p-2"
                />
              ) : (
                <p>{profile.usernameOrEmail}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border rounded-md p-2"
                />
              ) : (
                <p>{profile.name}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border rounded-md p-2"
                />
              ) : (
                <p>{profile.email}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Phone:</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border rounded-md p-2"
                />
              ) : (
                <p>{profile.phone}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Address:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border rounded-md p-2"
                />
              ) : (
                <p>{profile.address}</p>
              )}
            </div>
          </div>
        </CardContent>
        <div className="flex justify-end space-x-4 p-4">
          {isEditing ? (
            <Button onClick={handleSave}>Save</Button>
          ) : (
            <Button onClick={handleEditToggle}>Edit</Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Profile;
