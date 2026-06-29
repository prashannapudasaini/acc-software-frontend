import React, { useState } from 'react';
import { Card, CardContent } from '../../components/erp/ui/Card';
import Button from '../../components/erp/ui/Button';

const initialJobs = [
  { id: 'JOB-01', title: 'Senior React Developer', dept: 'Engineering', type: 'Full-Time', applicants: 24, status: 'Active' },
  { id: 'JOB-02', title: 'Marketing Executive', dept: 'Marketing', type: 'Full-Time', applicants: 12, status: 'Active' },
  { id: 'JOB-03', title: 'Finance Intern', dept: 'Accounting', type: 'Internship', applicants: 45, status: 'Closed' },
];

const initialCandidates = [
  { id: 'CAN-101', name: 'Alina Shrestha', role: 'Senior React Developer', stage: 'Interview', exp: '4 Years' },
  { id: 'CAN-102', name: 'Sanjay Gurung', role: 'Marketing Executive', stage: 'Screening', exp: '2 Years' },
  { id: 'CAN-103', name: 'Pooja Karki', role: 'Senior React Developer', stage: 'Offered', exp: '5 Years' },
];

const Recruitment = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [showJobForm, setShowJobForm] = useState(false);
  const [newJob, setNewJob] = useState({ title: '', dept: 'Engineering', type: 'Full-Time' });

  const handlePostJob = () => {
    if (!newJob.title) return alert('Job Title is required.');
    setJobs([{
      id: `JOB-0${jobs.length + 1}`,
      title: newJob.title,
      dept: newJob.dept,
      type: newJob.type,
      applicants: 0,
      status: 'Active'
    }, ...jobs]);
    setShowJobForm(false);
    setNewJob({ title: '', dept: 'Engineering', type: 'Full-Time' });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Recruitment (ATS)</h1>
          <p className="text-sm text-gray-500">Manage job postings and applicant tracking pipeline.</p>
        </div>
        <Button variant="primary" onClick={() => setShowJobForm(!showJobForm)}>
          {showJobForm ? 'Cancel' : '+ Post New Job'}
        </Button>
      </div>

      {showJobForm && (
        <div className="bg-blue-50 p-6 border border-blue-100 rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-2"><label className="text-xs font-bold text-gray-700">Job Title</label><input type="text" className="w-full p-2 border rounded mt-1" value={newJob.title} onChange={e=>setNewJob({...newJob, title: e.target.value})} /></div>
          <div><label className="text-xs font-bold text-gray-700">Department</label>
            <select className="w-full p-2 border rounded mt-1" value={newJob.dept} onChange={e=>setNewJob({...newJob, dept: e.target.value})}>
              <option>Engineering</option><option>Marketing</option><option>Sales</option><option>HR</option>
            </select>
          </div>
          <div><Button variant="primary" className="w-full" onClick={handlePostJob}>Publish Job</Button></div>
        </div>
      )}

      {/* Recruitment Pipeline Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">📢</div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{jobs.filter(j => j.status === 'Active').length}</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Active Job Postings</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xl font-bold">👥</div>
            <div>
              <p className="text-2xl font-bold text-gray-900">81</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total Applicants</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold">🎉</div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Offers Extended</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Job Postings Table */}
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b bg-gray-50">
            <h2 className="font-bold text-gray-700">Active Openings</h2>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-white text-xs text-gray-400 uppercase">
              <tr><th className="px-4 py-3">Role</th><th className="px-4 py-3 text-center">Applicants</th><th className="px-4 py-3 text-center">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {jobs.map(job => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-bold text-blue-600">{job.title}</p>
                    <p className="text-xs text-gray-500">{job.dept} • {job.type}</p>
                  </td>
                  <td className="px-4 py-3 text-center font-bold">{job.applicants}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${job.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>{job.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Candidate Pipeline */}
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
            <h2 className="font-bold text-gray-700">Candidate Pipeline</h2>
            <button className="text-xs text-blue-600 hover:underline font-bold">View Board →</button>
          </div>
          <div className="divide-y divide-gray-100">
            {initialCandidates.map(candidate => (
              <div key={candidate.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div>
                  <h3 className="font-bold text-gray-900">{candidate.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Applied for: <span className="font-medium text-gray-700">{candidate.role}</span></p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    candidate.stage === 'Offered' ? 'bg-green-100 text-green-700' :
                    candidate.stage === 'Interview' ? 'bg-purple-100 text-purple-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {candidate.stage}
                  </span>
                  <p className="text-[10px] text-gray-400 mt-1">{candidate.exp} Exp</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;