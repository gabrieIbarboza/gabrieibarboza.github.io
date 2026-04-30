const config = {
  header: {
    name: 'Gabriel Barboza',
    menu: ['ABOUT','SKILLS','EXPERIENCE','PROJECTS','CERTIFICATES','EDUCATION']
  },
  github: {
    username: 'gabrieIbarboza',
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    github: 'gabrieIbarboza',
    trailhead: 'gabrieibarboza',
    linkedin: 'gabriei-barboza',
    twitter: 'BarbozaGab53225',
    facebook: '',
    instagram: 'gabrielzklark',
    medium: '',
    dev: '',
    artstation:'',
    stackoverflow: '', // format: userid/username
    website: 'https://gabrieibarboza.github.io/',
    phone: '',
    email: 'gabrielrochabarboza@gmail.com',
    location: 'São Paulo, Brazil',
  },

  resume: 'https://gabrieibarboza.github.io/MyPortfolio/assets/docs/GabrielBarboza2023.pdf',
  // Empty fileUrl will hide the `Download Resume` button.
  skills: [
    'Salesforce',
    'LWC',
    'Aura',
    'Apex',
    'SOQL',
    'SOSL',
    'Node.js',
    'Javascript',
    'Git',
    'MongoDB',
    'CSS',
  ],
  // Remove experiences to hide section
  experiences: [
    {
      name: 'Vivo (Telefónica Brasil) ', 
      title: 'Salesforce Developer',
      from: 'March 2025',
      to: 'May 2026',
      link: 'https://www.vivo.com.br/',
      location: 'São Paulo, Brazil',
      description: ''
    },
    {
      name: 'Junior Salesforce Developer',
      title: 'Consultant',
      from: 'March 2024',
      to: 'February 2025',
      link: 'https://www.vivo.com.br/',
      location: 'São Paulo, Brazil',
      description: ''
    },
    {
      name: 'Salesforce Developer Intern',
      title: 'Consultant',
      from: 'March 2024',
      to: 'February 2025',
      link: 'https://www.vivo.com.br/',
      location: 'São Paulo, Brazil',
      description: 'Developed comprehensive Salesforce expertise (Admin, Apex, LWC, OmniStudio) through hands-on POC development, technical presentations, and agile squad collaboration, while advancing professional and soft skills.'
    },
  ],
  // Remove certifications to hide section
  certifications: [
    {
      icon: 'https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA9LY&oid=00DF0000000gZsu&lastMod=1746780949000',
      title: 'Salesforce Certified Platform Developer I',
      year: 'January 2025',
      link: 'https://trailheadacademy.salesforce.com/certificate/exam-agentforce-specialist---AI-201'
    },
    {
      icon: 'https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000MA14b&oid=00DF0000000gZsu&lastMod=1746774124000',
      title: 'Salesforce Certified Agentforce Specialist',
      year: 'November 2025',
      link: 'https://trailheadacademy.salesforce.com/certificate/exam-platform-dev1---Plat-Dev-201'
    },
    {
      icon: 'https://drm.my.salesforce.com/servlet/servlet.ImageServer?id=015Rf00000YMdGt&oid=00DF0000000gZsu&lastMod=1770009252000',
      title: 'Salesforce Certified AI Associate',
      year: 'January 2025',
      link: 'https://trailhead.salesforce.com/credentials/aiassociate'
    },
  ],
  // Remove education to hide section
  education: [
    {
      name: 'IFSP (Federal Institute of São Paulo)',
      title: 'Technologist, Software Analysis and Development',
      from: 'Feb 2023',
      to: 'Jun 2025',
      location: 'São Paulo, Brazil'
    },
    {
      name: 'Etec de Guarulhos',
      title: 'Technical, System Development',
      from: 'Jan 2020',
      to: 'Dec 2022',
      location: 'São Paulo, Brazil'
    },
  ],
  // To hide the `My Projects` section, keep it empty.
  projects: [
    {
      title: 'Salesforce Header Creator',
      description:
        'Instant Header Creator for LinkedIn and Twitter to show off your certifications and badges',
      imageUrl: 'https://www.superqbit.com/resources/images/logo.svg',
      link: 'https://www.superqbit.com/app?id=SalesforceHeaderCreator',
    },
    {
      title: 'Salesforce Trailblazer Leaderboard',
      description: 'Salesforce Trailblazer Leaderboard syncing Trailhead modules, certification, points in realtime',
      imageUrl: 'https://www.superqbit.com/resources/images/logo.svg',
      link: 'https://www.superqbit.com/app?id=trailhead-leaderboard',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /*blog: {
    source: 'dev', // medium | dev
    username: 'abhimanyudx', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },*/
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  formspree: {
    id: '', // Formspree Id for Contact us Form (https://formspree.io). eg: xqkopjzr
  },
  themeConfig: {
    defaultTheme: 'light', // default for stock theme
    light: {
      primary: '#eef4ff',
      primaryText: '#2b2826',
      baseText: '#2b2826',
      baseL1:'#fff',
    },
    aqua: {
      primary: '#fff',  
      primaryText: '#219aaf',    
      baseL1: '#78b0fd',
      baseL2: '#fc055b',
      highlight: 'rgb(27, 150, 255)',      
      baseText:'#fff',
      roundedbox: '4px',
      roundedbtn: '4px',
    },
    dark: {
      primary: '#282828',  
      primaryText: '#fff',    
      baseL1: '#141414',
      baseL2: '#080707',
      highlight: '#f3f2f2',      
      baseText:'#fff',
      roundedbox: '0px',
      roundedbtn: '0px',
    },
  },
  footer: 'By: Abhimanyud3dx, built with 💯% pure ⚡ <a href="https://lwc.dev/"  target="_blank">LWC</a> & <a href="https://www.lightningdesignsystem.com/" target="_blank">SLDS</a> and ❤️'
};

export { config };
