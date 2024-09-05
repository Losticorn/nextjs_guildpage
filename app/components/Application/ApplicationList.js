// components/ApplicationsList.tsx

import { useEffect, useState } from 'react';

interface Application {
  id: string;
  name: string;
  discord: string;
  raidtype: string;
  role: string;
  main: string;
  logs: string;
  mic: string;
  ui: string;
  attendance: string;
}

export default function ApplicationsList() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('/api/get-applications');
        if (!response.ok) {
          throw new Error('Failed to fetch applications');
        }
        const data: Application[] = await response.json();
        setApplications(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Applications List</h1>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            <strong>Name:</strong> {application.name} <br />
            <strong>Discord:</strong> {application.discord} <br />
            <strong>Raid Type:</strong> {application.raidtype} <br />
            <strong>Role:</strong> {application.role} <br />
            <strong>Main:</strong> {application.main} <br />
            <strong>Logs:</strong> {application.logs} <br />
            <strong>Mic:</strong> {application.mic} <br />
            <strong>UI:</strong> {application.ui} <br />
            <strong>Attendance:</strong> {application.attendance} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
