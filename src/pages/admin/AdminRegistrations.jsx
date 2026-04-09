import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Search, Eye, CheckCircle, XCircle, UserPlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getMembers, saveMember, deleteMember } from '@/lib/dataStore';
import { toast } from 'sonner';

const AdminRegistrations = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState('');
  const [viewMember, setViewMember] = useState(null);
  const [filter, setFilter] = useState('all'); // all, pending, approved

  const loadMembers = async () => {
    setMembers(await getMembers());
  };

  useEffect(() => { loadMembers(); }, []);

  const handleApprove = async (m) => {
    await saveMember({ ...m, status: 'approved' });
    await loadMembers();
    toast.success(`${m.fullName} approved`);
  };

  const handleReject = async (m) => {
    if (!confirm(`Reject registration for ${m.fullName}?`)) return;
    await saveMember({ ...m, status: 'rejected' });
    await loadMembers();
    toast.success(`${m.fullName} rejected`);
  };

  const handleDelete = async (id) => {
    if (!confirm('Permanently delete this registration?')) return;
    await deleteMember(id);
    await loadMembers();
    toast.success('Registration deleted');
  };

  const filtered = members
    .filter((m) => {
      if (filter === 'pending') return !m.status || m.status === 'pending';
      if (filter === 'approved') return m.status === 'approved';
      if (filter === 'rejected') return m.status === 'rejected';
      return true;
    })
    .filter((m) =>
      m.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      m.email?.toLowerCase().includes(search.toLowerCase())
    );

  const getStatusBadge = (status) => {
    if (status === 'approved') return <Badge className="bg-green-600 text-white">Approved</Badge>;
    if (status === 'rejected') return <Badge variant="destructive">Rejected</Badge>;
    return <Badge variant="secondary">Pending</Badge>;
  };

  return (
    <AdminLayout title="Registrations">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search registrations..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <div className="flex gap-2">
          {['all', 'pending', 'approved', 'rejected'].map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f)}
              className="capitalize"
            >
              {f}
            </Button>
          ))}
        </div>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">No registrations found.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Photo</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden md:table-cell">Phone</TableHead>
                  <TableHead className="hidden lg:table-cell">Profession</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell>
                      {m.image || m.photo ? (
                        <img src={m.image || m.photo} alt={m.fullName} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {m.fullName?.charAt(0)}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{m.fullName}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{m.email}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{m.phone || m.mobile}</TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">{m.profession}</TableCell>
                    <TableCell>{getStatusBadge(m.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => setViewMember(m)} title="View details">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {(!m.status || m.status === 'pending') && (
                          <Button variant="ghost" size="icon" className="text-green-600" onClick={() => handleApprove(m)} title="Approve">
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        )}
                        {(!m.status || m.status === 'pending') && (
                          <Button variant="ghost" size="icon" className="text-orange-500" onClick={() => handleReject(m)} title="Reject">
                            <XCircle className="w-4 h-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(m.id)} title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* View Details Dialog */}
      <Dialog open={!!viewMember} onOpenChange={() => setViewMember(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Registration Details</DialogTitle>
          </DialogHeader>
          {viewMember && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {(viewMember.image || viewMember.photo) ? (
                  <img src={viewMember.image || viewMember.photo} alt={viewMember.fullName} className="w-20 h-20 rounded-full object-cover" />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    {viewMember.fullName?.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-heading font-bold text-lg">{viewMember.fullName}</h3>
                  {getStatusBadge(viewMember.status)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ['Email', viewMember.email],
                  ['Phone', viewMember.phone || viewMember.mobile],
                  ['Address', viewMember.address],
                  ['Date of Birth', viewMember.dateOfBirth],
                  ['Native Place', viewMember.nativePlace],
                  ['Education', viewMember.education || viewMember.educationQualification],
                  ['Profession', viewMember.profession],
                  ['Organisation', viewMember.workingOrganisation],
                  ['Working Place', viewMember.workingPlace || viewMember.location],
                  ['Show Contact', viewMember.showContactPublicly ? 'Yes' : 'No'],
                  ['Show Image', viewMember.showImagePublicly ? 'Yes' : 'No'],
                  ['LinkedIn', viewMember.linkedin],
                  ['Instagram', viewMember.instagram],
                  ['Facebook', viewMember.facebook],
                ].filter(([, v]) => v).map(([label, value]) => (
                  <div key={label}>
                    <p className="text-muted-foreground text-xs">{label}</p>
                    <p className="font-medium break-all">{value}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                {(!viewMember.status || viewMember.status === 'pending') && (
                  <>
                    <Button onClick={() => { handleApprove(viewMember); setViewMember(null); }} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                      <CheckCircle className="w-4 h-4 mr-2" /> Approve
                    </Button>
                    <Button variant="outline" onClick={() => { handleReject(viewMember); setViewMember(null); }} className="flex-1 border-orange-500 text-orange-500">
                      <XCircle className="w-4 h-4 mr-2" /> Reject
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminRegistrations;
