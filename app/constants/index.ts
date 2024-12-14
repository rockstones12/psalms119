
export const NAV_LINKS = [
    { href: '/challenge', key: 'challenge', label: 'The Challenge' },
    { href: '/benefit', key: 'benefit', label: 'The Benefit' }

];

interface BenefitSection {
    icon: string;
    title: string;
    description: string;
    backgroundColor: string;
  }
  
  export const benefitSections: BenefitSection[] = [
    {
      icon: "/arrow.png",
      title: 'Personal Growth',
      description: 'Develop strong moral character, discipline, and resilience.',
      backgroundColor: '##FFF1B8'
    },
    {
        icon: '/book.png',
        title: 'Academic Excellence',
        description: 'Enhance critical thinking, problem-solving, and communication skills.',
        backgroundColor: '#30C067'
    },
    {
        icon: '/planet.png',
        title: 'Community Impact',
        description: 'Make a positive difference in your community through service projects.',
        backgroundColor: '#EF8FFF'
    },
    {
        icon: '/church.png',
        title: 'Scholarship Opportunities',
        description: 'Excel in the challenge to unlock scholarships and financial support for your education.',
        backgroundColor: '#ffffff'
    }
  ];
  