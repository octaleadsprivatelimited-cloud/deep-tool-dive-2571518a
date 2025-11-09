import React from 'react';
import { Sparkles, Users, Globe, Rocket, Calendar, Trophy, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const initiatives = [
  {
    title: 'Leadership Cohorts',
    description: 'Six-month fellowships blending community projects, mentorship, and global immersion visits.',
    highlights: ['Social impact labs', 'Policy simulation', 'Mentor pairings'],
  },
  {
    title: 'Future Skills Academy',
    description: 'Virtual bootcamps on AI, climate, entrepreneurship, and creative arts led by global experts.',
    highlights: ['Live masterclasses', 'Portfolio challenges', 'Career coaching'],
  },
  {
    title: 'Global Youth Council',
    description: 'Student ambassadors representing 20+ countries to co-create programs and chapter events.',
    highlights: ['Annual summit', 'Country spotlights', 'Scholarship design'],
  },
];

const opportunities = [
  {
    title: 'Innovation Sprints',
    details: '48-hour hackathons solving community, agriculture, and health challenges with industry mentors.',
  },
  {
    title: 'Youth Parliament',
    details: 'Policy debates and civic leadership workshops hosted in partnership with universities and NGOs.',
  },
  {
    title: 'Creative Studio',
    details: 'Storytelling, filmmaking, and heritage documentation projects for inspiring global audiences.',
  },
];

const YouthPortal = () => (
  <div className="min-h-screen bg-white text-black">
    <Header currentPage="Youth Portal" />

    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute -right-48 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/25 blur-3xl" />
      <div className="absolute -left-36 bottom-0 h-96 w-96 rounded-full bg-red-200/25 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <Badge className="mx-auto mb-6 bg-black/5 text-black border border-black/10 uppercase tracking-wide">
          Youth Leadership
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">KGF Youth Portal</h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
          Empowering the next generation with leadership programs, mentorship, global exposure, and creative platforms to
          shape the future of the Kamma community.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
            Join Youth Network
          </Button>
          <Button className="bg-[#f6c344] hover:bg-[#e3b030] text-black font-semibold px-6 py-3 rounded-lg border border-black/10">
            Apply for Fellowship
          </Button>
        </div>
      </div>
    </section>

    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Youth Members', value: '14,500+' },
            { label: 'Mentor Hours', value: '35,000+' },
            { label: 'Scholarships Awarded', value: '2,800+' },
            { label: 'Countries Represented', value: '24' },
          ].map((stat) => (
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
      <div className="container mx-auto px-4 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Sparkles className="h-7 w-7 text-red-600" />
              Signature Youth Initiatives
            </h2>
            <p className="text-slate-600">
              Programs designed to nurture leadership, creativity, and social responsibility for students and young
              professionals.
            </p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Download Program Guide</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {initiatives.map((initiative) => (
            <Card key={initiative.title} className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">{initiative.title}</CardTitle>
                <CardDescription className="text-slate-600">{initiative.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {initiative.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-red-600" />
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
              title: 'Mentor Pods',
              description: 'Pairings with industry leaders, entrepreneurs, and academics guiding career exploration.',
              icon: <Users className="h-6 w-6 text-red-600" />,
            },
            {
              title: 'Global Exchange',
              description: 'Immersive visits to diaspora hubs for cultural exchange and leadership shadowing.',
              icon: <Globe className="h-6 w-6 text-red-600" />,
            },
            {
              title: 'Launchpad Grants',
              description: 'Seed grants for youth-led social ventures, research, and creative storytelling projects.',
              icon: <Rocket className="h-6 w-6 text-red-600" />,
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
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Youth Events Calendar</CardTitle>
              <CardDescription className="text-slate-600">
                Workshops, summits, and cultural showcases connecting youth leaders across continents.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                'May: Youth Innovation Summit – Hyderabad & Virtual',
                'June: Creative Labs Residency – London Chapter',
                'July: Global Youth Retreat – San Francisco',
              ].map((event) => (
                <div key={event} className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-red-600 mt-1" />
                  <p className="text-slate-600">{event}</p>
                </div>
              ))}
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Reserve Seat</Button>
            </CardContent>
          </Card>
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Achievements & Honors</CardTitle>
              <CardDescription className="text-slate-600">
                Recognizing youth champions driving innovation, scholarship, and community service.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <Trophy className="h-5 w-5 text-red-600 mt-1" />
                <p>2024 Youth Innovator Award: Sravya Choudhary for climate-smart agri solutions.</p>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="h-5 w-5 text-red-600 mt-1" />
                <p>Global Scholar Grant: 40 students pursuing higher studies in STEM & humanities.</p>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="h-5 w-5 text-red-600 mt-1" />
                <p>Community Leadership Medal: Youth councils leading disaster relief operations.</p>
              </div>
              <Button className="w-full bg-black text-white hover:bg-black/90">Nominate a Youth Leader</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section className="py-14 bg-[#f6c344] text-black">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-5">
        <h3 className="text-3xl font-bold">Ignite Your Journey With KGF Youth</h3>
        <p className="text-lg text-black/70">
          Share your interests and we will connect you with programs, mentors, and chapter initiatives tailored for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
            Submit Interest Form
          </Button>
          <Button
            variant="outline"
            className="border border-black text-black hover:bg-black hover:text-white font-semibold px-6 py-3 rounded-lg"
          >
            Parent & Mentor Guide
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default YouthPortal;

