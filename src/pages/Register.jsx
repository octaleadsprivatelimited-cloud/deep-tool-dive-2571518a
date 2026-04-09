import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Linkedin, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { toast } from 'sonner';
import { saveMember } from '@/lib/dataStore';
import { compressImageToFirestoreLimit } from '@/lib/imageCompression';

const registerSchema = z.object({
  surname: z.string().min(1, 'Surname is required').max(100),
  name: z.string().min(1, 'Name is required').max(100),
  phone: z.string().regex(/^[+]?[\d\s-]{10,15}$/, 'Invalid phone number'),
  showContactPublicly: z.boolean().default(false),
  showImagePublicly: z.boolean().default(true),
  email: z.string().email('Invalid email address').max(255),
  address: z.string().max(300).optional(),
  dateOfBirth: z.date({ required_error: 'Date of birth is required' }),
  nativePlace: z.string().max(100).optional(),
  profession: z.string().max(100).optional(),
  company: z.string().max(200).optional(),
  workingPlace: z.string().max(100).optional(),
  linkedin: z.string().url('Invalid URL').max(300).optional().or(z.literal('')),
  instagram: z.string().max(300).optional(),
  facebook: z.string().max(300).optional(),
});

const Register = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      surname: '', name: '', phone: '', showContactPublicly: false, showImagePublicly: true,
      email: '', address: '', nativePlace: '',
      profession: '', company: '',
      linkedin: '', instagram: '', facebook: '',
    },
  });

  const handlePhotoChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImageToFirestoreLimit(file);
      setProfilePhoto(file);
      setPhotoPreview(compressed);
    } catch (err) {
      toast.error(err.message || 'Failed to process photo');
    }
  };

  const onSubmit = async (data) => {
    try {
      const photoUrl = photoPreview || '';
      const member = {
        name: `${data.surname} ${data.name}`,
        surname: data.surname,
        firstName: data.name,
        fullName: `${data.surname} ${data.name}`,
        email: data.email,
        phone: data.phone,
        showContactPublicly: data.showContactPublicly,
        showImagePublicly: data.showImagePublicly,
        address: data.address,
        dateOfBirth: data.dateOfBirth.toISOString(),
        nativePlace: data.nativePlace,
        education: data.educationQualification,
        profession: data.profession,
        workingOrganisation: data.workingOrganisation,
        workingPlace: data.workingPlace,
        linkedin: data.linkedin,
        instagram: data.instagram,
        facebook: data.facebook,
        photo: photoUrl,
        image: photoUrl,
        highlighted: false,
      };
      await saveMember(member);
      toast.success('Registration submitted successfully! We will review and get back to you.');
      form.reset();
      setProfilePhoto(null);
      setPhotoPreview(null);
    } catch (err) {
      toast.error(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
            Join <span className="text-primary">RISE</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-secondary-foreground/70 max-w-xl mx-auto">Become a member and connect with professionals across the globe.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              {/* Profile Photo */}
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="w-28 h-28 rounded-full border-2 border-dashed border-border overflow-hidden bg-muted flex items-center justify-center">
                  {photoPreview ? (
                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-muted-foreground text-xs text-center px-2">Profile Photo</span>
                  )}
                </div>
                <label className="cursor-pointer text-sm font-medium text-primary hover:underline">
                  Upload Photo
                  <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                </label>
                <FormField control={form.control} name="showImagePublicly" render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="!mt-0 text-sm">Show my image publicly</FormLabel>
                  </FormItem>
                )} />
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="surname" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Surname *</FormLabel>
                    <FormControl><Input placeholder="Enter surname" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl><Input placeholder="Enter name" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl><Input placeholder="+91 9876543210" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="showContactPublicly" render={({ field }) => (
                  <FormItem className="flex items-center gap-3 pt-8">
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="!mt-0 text-sm">Show my contact publicly</FormLabel>
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="address" render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl><Input placeholder="Your address" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="dateOfBirth" render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                            {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                          captionLayout="dropdown-buttons"
                          fromYear={1940}
                          toYear={new Date().getFullYear()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="nativePlace" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Native Place</FormLabel>
                    <FormControl><Input placeholder="Your native place" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <Separator />

              {/* Professional Info */}
              <h3 className="font-heading font-bold text-lg">Professional Details</h3>

              <FormField control={form.control} name="educationQualification" render={({ field }) => (
                <FormItem>
                  <FormLabel>Education Qualification</FormLabel>
                  <FormControl><Input placeholder="e.g. B.Tech, MBA" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="profession" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profession</FormLabel>
                    <FormControl><Input placeholder="Your profession" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="workingOrganisation" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Working Organisation</FormLabel>
                    <FormControl><Input placeholder="Company / Organisation" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="workingPlace" render={({ field }) => (
                <FormItem>
                  <FormLabel>Working Place</FormLabel>
                  <FormControl><Input placeholder="City where you work" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Separator />

              {/* Social Links */}
              <h3 className="font-heading font-bold text-lg flex items-center gap-2">Connect Me On</h3>

              <FormField control={form.control} name="linkedin" render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</FormLabel>
                  <FormControl><Input placeholder="https://linkedin.com/in/yourprofile" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="instagram" render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</FormLabel>
                  <FormControl><Input placeholder="@yourhandle" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="facebook" render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</FormLabel>
                  <FormControl><Input placeholder="https://facebook.com/yourprofile" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12 text-lg">
                Submit Registration
              </Button>
            </form>
          </Form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Register;
