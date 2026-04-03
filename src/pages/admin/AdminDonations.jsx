import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { getDonations, deleteDonation } from '@/lib/dataStore';
import { Trash2, Eye, IndianRupee } from 'lucide-react';
import { toast } from 'sonner';

const AdminDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewImage, setViewImage] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getDonations();
      setDonations(data);
    } catch (err) {
      toast.error('Failed to load donations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this donation record?')) return;
    try {
      await deleteDonation(id);
      toast.success('Donation record deleted');
      load();
    } catch (err) {
      toast.error('Failed to delete');
    }
  };

  const totalAmount = donations.reduce((sum, d) => {
    const num = parseInt(d.amount, 10);
    return sum + (isNaN(num) ? 0 : num);
  }, 0);

  return (
    <AdminLayout title="Donations">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card className="border-border">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-primary">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold">{donations.length}</p>
              <p className="text-sm text-muted-foreground">Total Donations</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-primary">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold">₹{totalAmount.toLocaleString('en-IN')}</p>
              <p className="text-sm text-muted-foreground">Total Amount</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {loading ? (
        <p className="text-muted-foreground text-center py-12">Loading donations...</p>
      ) : donations.length === 0 ? (
        <Card className="border-border">
          <CardContent className="p-12 text-center">
            <IndianRupee className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No donations received yet.</p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8">#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Screenshot</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((d, i) => (
                  <TableRow key={d.id}>
                    <TableCell className="font-medium">{i + 1}</TableCell>
                    <TableCell className="font-medium">{d.name}</TableCell>
                    <TableCell>{d.mobile}</TableCell>
                    <TableCell>₹{d.amount}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{d.message || '—'}</TableCell>
                    <TableCell>
                      {d.screenshotUrl ? (
                        <button onClick={() => setViewImage(d.screenshotUrl)} className="text-primary hover:underline text-sm flex items-center gap-1">
                          <Eye className="w-4 h-4" /> View
                        </button>
                      ) : '—'}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {d.createdAt?.toDate ? d.createdAt.toDate().toLocaleDateString('en-IN') : '—'}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(d.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      <Dialog open={!!viewImage} onOpenChange={() => setViewImage(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Payment Screenshot</DialogTitle>
          </DialogHeader>
          {viewImage && <img src={viewImage} alt="Payment screenshot" className="w-full rounded-lg" />}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminDonations;