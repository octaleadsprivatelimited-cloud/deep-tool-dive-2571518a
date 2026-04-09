import React, { useState } from 'react';
import { Handshake, GraduationCap, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import YouTubeSection from '@/components/YouTubeSection';
import PageMembersSection from '@/components/PageMembersSection';
import { saveMentorRequest, saveMentorApplication } from '@/lib/dataStore';
import { toast } from 'sonner';

const emptyRequest = { fullName: '', email: '', phone: '', profession: '', areaOfInterest: '', message: '' };
const emptyApplication = { fullName: '', email: '', phone: '', profession: '', expertise: '', experience: '', linkedin: '', message: '' };

const Mentorship = () => {
  const [requestOpen, setRequestOpen] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [requestForm, setRequestForm] = useState(emptyRequest);
  const [applicationForm, setApplicationForm] = useState(emptyApplication);
  const [submitting, setSubmitting] = useState(false);

  const handleRequestSubmit = async () => {
    if (!requestForm.fullName || !requestForm.email || !requestForm.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitting(true);
    try {
      await saveMentorRequest(requestForm);
      toast.success('Mentor request submitted successfully! We will get back to you soon.');
      setRequestForm(emptyRequest);
      setRequestOpen(false);
    } catch (err) {
      toast.error(err.message || 'Failed to submit request');
    } finally {
      setSubmitting(false);
    }
  };

  const handleApplicationSubmit = async () => {
    if (!applicationForm.fullName || !applicationForm.email || !applicationForm.phone || !applicationForm.expertise) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitting(true);
    try {
      await saveMentorApplication(applicationForm);
      toast.success('Mentor application submitted successfully! We will review and contact you.');
      setApplicationForm(emptyApplication);
      setApplicationOpen(false);
    } catch (err) {
      toast.error(err.message || 'Failed to submit application');
    } finally {
      setSubmitting(false);
    }
  };

  const update = (setter) => (key) => (e) => setter((prev) => ({ ...prev, [key]: e.target.value }));
  const rSet = update(setRequestForm);
  const aSet = update(setApplicationForm);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Mentorship" />

      <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
            <span className="text-primary">Mentorship</span> Program
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-secondary-foreground/70 max-w-xl mx-auto">Learn from the best. Grow with purpose.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="border-primary/20 bg-primary/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2">Request a Mentor</h3>
                <p className="text-muted-foreground text-sm mb-4">Looking for guidance? Submit your request and we'll match you with an experienced mentor.</p>
                <Button onClick={() => setRequestOpen(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-semibold">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border-accent/20 bg-accent/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Handshake className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2">Become a Mentor</h3>
                <p className="text-muted-foreground text-sm mb-4">Share your experience and help the next generation grow in their careers.</p>
                <Button onClick={() => setApplicationOpen(true)} variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-8 font-semibold">
                  Sign Up
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <PageMembersSection pageName="Mentorship" title="Our Mentors" />
      <YouTubeSection pageName="Mentorship" title="Mentorship Stories" />

      {/* Request a Mentor Dialog */}
      <Dialog open={requestOpen} onOpenChange={setRequestOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Request a Mentor
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input value={requestForm.fullName} onChange={rSet('fullName')} placeholder="Your full name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email *</Label>
                <Input type="email" value={requestForm.email} onChange={rSet('email')} placeholder="you@email.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input value={requestForm.phone} onChange={rSet('phone')} placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Profession / Current Role</Label>
              <Input value={requestForm.profession} onChange={rSet('profession')} placeholder="e.g. Student, Engineer" />
            </div>
            <div className="space-y-2">
              <Label>Area of Interest</Label>
              <Input value={requestForm.areaOfInterest} onChange={rSet('areaOfInterest')} placeholder="e.g. Career Guidance, Business, Technology" />
            </div>
            <div className="space-y-2">
              <Label>Why do you need a mentor?</Label>
              <Textarea value={requestForm.message} onChange={rSet('message')} rows={3} placeholder="Tell us about your goals and what you're looking for..." />
            </div>
            <div className="flex gap-3 pt-2">
              <Button onClick={handleRequestSubmit} disabled={submitting} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4 mr-2" /> {submitting ? 'Submitting...' : 'Submit Request'}
              </Button>
              <Button variant="outline" onClick={() => setRequestOpen(false)} className="flex-1">Cancel</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Become a Mentor Dialog */}
      <Dialog open={applicationOpen} onOpenChange={setApplicationOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Handshake className="w-5 h-5 text-accent" /> Become a Mentor
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input value={applicationForm.fullName} onChange={aSet('fullName')} placeholder="Your full name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email *</Label>
                <Input type="email" value={applicationForm.email} onChange={aSet('email')} placeholder="you@email.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input value={applicationForm.phone} onChange={aSet('phone')} placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Current Profession</Label>
              <Input value={applicationForm.profession} onChange={aSet('profession')} placeholder="e.g. Senior Engineer, Doctor" />
            </div>
            <div className="space-y-2">
              <Label>Area of Expertise *</Label>
              <Input value={applicationForm.expertise} onChange={aSet('expertise')} placeholder="e.g. Technology, Business, Healthcare" />
            </div>
            <div className="space-y-2">
              <Label>Years of Experience</Label>
              <Input value={applicationForm.experience} onChange={aSet('experience')} placeholder="e.g. 10+ years" />
            </div>
            <div className="space-y-2">
              <Label>LinkedIn Profile</Label>
              <Input value={applicationForm.linkedin} onChange={aSet('linkedin')} placeholder="https://linkedin.com/in/..." />
            </div>
            <div className="space-y-2">
              <Label>Why do you want to mentor?</Label>
              <Textarea value={applicationForm.message} onChange={aSet('message')} rows={3} placeholder="Share your motivation for mentoring..." />
            </div>
            <div className="flex gap-3 pt-2">
              <Button onClick={handleApplicationSubmit} disabled={submitting} className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Send className="w-4 h-4 mr-2" /> {submitting ? 'Submitting...' : 'Submit Application'}
              </Button>
              <Button variant="outline" onClick={() => setApplicationOpen(false)} className="flex-1">Cancel</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Mentorship;
