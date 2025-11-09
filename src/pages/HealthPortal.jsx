import React from 'react';
import { HeartPulse, Stethoscope, Hospital, Users, ShieldCheck, CalendarDays, Pill } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const carePrograms = [
  {
    title: 'Global Specialist Network',
    description: 'Access board-certified doctors, surgeons, and specialists across 30+ medical departments.',
    highlights: ['Second opinions', 'Tele-consults', 'Diaspora referrals'],
  },
  {
    title: 'Preventive Wellness Clinics',
    description: 'Annual screenings, lifestyle coaching, and chronic care plans tailored for the community.',
    highlights: ['Master health checkups', 'Nutrition guides', 'Family health dashboards'],
  },
  {
    title: 'Community Health Missions',
    description: 'Rural healthcare camps, mobile diagnostics, and maternal wellness programs across chapters.',
    highlights: ['Mobile clinics', 'Scholarships for nurses', 'Emergency response teams'],
  },
];

const healthMetrics = [
  { label: 'Medical Professionals', value: '950+' },
  { label: 'Telehealth Consults', value: '18,000+' },
  { label: 'Health Camps Conducted', value: '420+' },
  { label: 'Insurance Partnerships', value: '32' },
];

const HealthPortal = () => (
  <div className="min-h-screen bg-white text-black">
    <Header currentPage="Health Portal" />

    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute -right-48 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/25 blur-3xl" />
      <div className="absolute -left-36 bottom-0 h-96 w-96 rounded-full bg-red-200/25 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <Badge className="mx-auto mb-6 bg-red-50 text-red-700 border border-red-200 uppercase tracking-wide">
          Wellness & Care
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">KGF Health & Wellness Portal</h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
          A connected health ecosystem delivering quality care, preventive wellness, and trusted medical guidance for
          Kammas across the world.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
            Book Consultation
          </Button>
          <Button className="bg-[#f6c344] hover:bg-[#e3b030] text-black font-semibold px-6 py-3 rounded-lg border border-black/10">
            Volunteer as Doctor
          </Button>
        </div>
      </div>
    </section>

    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {healthMetrics.map((stat) => (
            <Card key={stat.label} className="bg-white border border-slate-200 shadow-sm text-center py-6">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-red-600">{stat.value}</CardTitle>
                <CardDescription className="text-slate-600 font-medium uppercase tracking-wide">
                  {stat.label}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <HeartPulse className="h-7 w-7 text-red-600" />
              Integrated Care Programs
            </h2>
            <p className="text-slate-600">
              End-to-end support from preventive wellness to critical care coordination, delivered with compassion and
              medical rigor.
            </p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Download Care Guide</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {carePrograms.map((program) => (
            <Card key={program.title} className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">{program.title}</CardTitle>
                <CardDescription className="text-slate-600">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <Pill className="h-5 w-5 text-red-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Telemedicine Hub',
              description: 'Secure video consultations, follow-up reminders, and digital prescriptions with certified doctors.',
              icon: <Stethoscope className="h-6 w-6 text-red-600" />,
            },
            {
              title: 'Hospital Partnerships',
              description: 'Preferred access to top hospitals with negotiated tariffs for members and their families.',
              icon: <Hospital className="h-6 w-6 text-red-600" />,
            },
            {
              title: 'Health Shield Program',
              description: 'Insurance advisories, emergency response protocols, and diaspora medical liaisons.',
              icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
            },
          ].map((item) => (
            <Card key={item.title} className="bg-white border border-slate-200 shadow-sm">
              <CardHeader className="space-y-3">
                <div className="inline-flex items-center justify-center rounded-full bg-red-50 p-3 w-fit">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-slate-600">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8">
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Health Events & Webinars</CardTitle>
              <CardDescription className="text-slate-600">
                Monthly virtual sessions led by specialists on preventive care, mental wellness, and medical breakthroughs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                'April: Cardio wellness & lifestyle transformation clinic',
                'May: Women’s health and fertility care across life stages',
                'June: Mental health first-aid for students and professionals',
              ].map((session) => (
                <div key={session} className="flex items-start gap-3">
                  <CalendarDays className="h-5 w-5 text-red-600 mt-1" />
                  <p className="text-slate-600">{session}</p>
                </div>
              ))}
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Reserve Your Seat</Button>
            </CardContent>
          </Card>
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Care Navigator Support</CardTitle>
              <CardDescription className="text-slate-600">
                Dedicated care coordinators help schedule appointments, interpret reports, and connect with specialists.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <p>Available 7 days a week • 8:00 AM to 9:00 PM IST</p>
              <p>Email: healthdesk@kammaglobal.com</p>
              <p>Hotline: +91 90555 19922</p>
              <Button className="w-full bg-black text-white hover:bg-black/90">Request Call Back</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section className="py-14 bg-[#f6c344] text-black">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-5">
        <h3 className="text-3xl font-bold">Stay Healthy, Connected, and Informed</h3>
        <p className="text-lg text-black/70">
          Subscribe to our quarterly wellness journal and receive updates on health programs, medical camps, and insurance
          partnerships.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
            Subscribe Now
          </Button>
          <Button
            variant="outline"
            className="border border-black text-black hover:bg-black hover:text-white font-semibold px-6 py-3 rounded-lg"
          >
            Download Program Calendar
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default HealthPortal;

