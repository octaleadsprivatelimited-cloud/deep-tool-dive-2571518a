import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Eye, CheckCircle, XCircle, Search, GraduationCap, Handshake } from 'lucide-react';
import {
  getMentorRequests, deleteMentorRequest, updateMentorRequestStatus,
  getMentorApplications, deleteMentorApplication, updateMentorApplicationStatus,
} from '@/lib/dataStore';
import { toast } from 'sonner';

const statusBadge = (status) => {
  if (status === 'approved') return <Badge className="bg-green-600 text-white">Approved</Badge>;
  if (status === 'rejected') return <Badge variant="destructive">Rejected</Badge>;
  return <Badge variant="secondary">Pending</Badge>;
};

const AdminMentorship = () => {
  const [requests, setRequests] = useState([]);
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState('');
  const [viewItem, setViewItem] = useState(null);

  const load = async () => {
    const [reqs, apps] = await Promise.all([getMentorRequests(), getMentorApplications()]);
    setRequests(reqs);
    setApplications(apps);
  };

  useEffect(() => { load(); }, []);

  const handleStatusChange = async (item, status, type) => {
    try {
      if (type === 'request') await updateMentorRequestStatus(item.id, status);
      else await updateMentorApplicationStatus(item.id, status);
      await load();
      toast.success(`${status === 'approved' ? 'Approved' : 'Rejected'} successfully`);
      setViewItem(null);
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id, type) => {
    if (!confirm('Delete this entry?')) return;
    if (type === 'request') await deleteMentorRequest(id);
    else await deleteMentorApplication(id);
    await load();
    toast.success('Deleted');
  };

  const filterItems = (items) =>
    items.filter((i) =>
      i.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      i.email?.toLowerCase().includes(search.toLowerCase())
    );

  const renderTable = (items, type) => (
    <Card className="border-border">
      <CardContent className="p-0">
        {items.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">
            No {type === 'request' ? 'mentor requests' : 'mentor applications'} yet.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">{type === 'request' ? 'Area of Interest' : 'Expertise'}</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.fullName}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{item.email}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {type === 'request' ? item.areaOfInterest : item.expertise}
                  </TableCell>
                  <TableCell>{statusBadge(item.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => setViewItem({ ...item, _type: type })} title="View">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {(!item.status || item.status === 'pending') && (
                        <>
                          <Button variant="ghost" size="icon" className="text-green-600" onClick={() => handleStatusChange(item, 'approved', type)} title="Approve">
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-orange-500" onClick={() => handleStatusChange(item, 'rejected', type)} title="Reject">
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(item.id, type)}>
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
  );

  return (
    <AdminLayout title="Mentorship Management">
      <div className="mb-6">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="border-primary/20">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{requests.length}</p>
              <p className="text-xs text-muted-foreground">Mentor Requests</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-accent/20">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Handshake className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">{applications.length}</p>
              <p className="text-xs text-muted-foreground">Mentor Applications</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="requests">
        <TabsList className="mb-4">
          <TabsTrigger value="requests" className="gap-2">
            <GraduationCap className="w-4 h-4" /> Mentor Requests ({requests.length})
          </TabsTrigger>
          <TabsTrigger value="applications" className="gap-2">
            <Handshake className="w-4 h-4" /> Mentor Applications ({applications.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="requests">
          {renderTable(filterItems(requests), 'request')}
        </TabsContent>

        <TabsContent value="applications">
          {renderTable(filterItems(applications), 'application')}
        </TabsContent>
      </Tabs>

      {/* Detail Dialog */}
      <Dialog open={!!viewItem} onOpenChange={(open) => !open && setViewItem(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {viewItem?._type === 'request' ? 'Mentor Request' : 'Mentor Application'} Details
            </DialogTitle>
          </DialogHeader>
          {viewItem && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">Full Name</p>
                  <p className="font-medium">{viewItem.fullName}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  {statusBadge(viewItem.status)}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm">{viewItem.email}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm">{viewItem.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Profession</p>
                  <p className="text-sm">{viewItem.profession || '—'}</p>
                </div>
                {viewItem._type === 'request' ? (
                  <div>
                    <p className="text-xs text-muted-foreground">Area of Interest</p>
                    <p className="text-sm">{viewItem.areaOfInterest || '—'}</p>
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="text-xs text-muted-foreground">Expertise</p>
                      <p className="text-sm">{viewItem.expertise || '—'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Experience</p>
                      <p className="text-sm">{viewItem.experience || '—'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">LinkedIn</p>
                      {viewItem.linkedin ? (
                        <a href={viewItem.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">{viewItem.linkedin}</a>
                      ) : <p className="text-sm">—</p>}
                    </div>
                  </>
                )}
              </div>
              {viewItem.message && (
                <div>
                  <p className="text-xs text-muted-foreground">Message</p>
                  <p className="text-sm bg-muted p-3 rounded-lg mt-1">{viewItem.message}</p>
                </div>
              )}

              {(!viewItem.status || viewItem.status === 'pending') && (
                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={() => handleStatusChange(viewItem, 'approved', viewItem._type)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" /> Approve
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleStatusChange(viewItem, 'rejected', viewItem._type)}
                    className="flex-1 text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <XCircle className="w-4 h-4 mr-2" /> Reject
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminMentorship;
