
import React from 'react';
import { Wifi, Monitor, Printer, ShieldCheck, Smartphone, Cpu, Router, Home, Settings, Cloud, Database, HardDrive, Clock, BarChart, Tv, Music, Cable, Camera, Wrench, Globe, Recycle, Server, Shield, Calculator, Link, Activity, Briefcase, User, CheckCircle2, ShieldAlert, Cpu as CpuIcon, Layers, Zap, Lock, HardDriveDownload, CloudLightning, Search, Move, Settings2, Volume2, Radio, Cast, Tablet, Smartphone as SmartphoneIcon, Share2, Laptop, MousePointer2, Signal, RadioTower, Network, ArrowDownUp, Thermometer, Mic2, Lightbulb, Battery, Mail, PhoneCall, Globe2, FileText, Layout, Play, Download } from 'lucide-react';

export const BOOKING_URL = "https://clienthub.getjobber.com/hubs/1ec10efb-f8e7-4651-a968-3a9bde895742/public/requests/231149/new";
export const SLOGAN = "So Simple IT Works";
export const PHONE_NUMBER = "+1-864-249-7026";
export const SUPPORT_EMAIL = "projects@simple-support.net";

export const RUSTDESK_URLS = {
  windows: "https://rustdesk.com/download/windows",
  mac: "https://rustdesk.com/download/mac",
  ios: "https://apps.apple.com/app/rustdesk/id1583033288",
  android: "https://play.google.com/store/apps/details?id=com.carriez.rustdesk"
};

export type UserType = 'home' | 'business' | 'none';

export interface SoftwareTool {
  name: string;
  description: string;
  category: 'Support' | 'Network' | 'Hardware' | 'Security' | 'Business';
  platforms: ('Windows' | 'Mac' | 'iOS' | 'Android' | 'Web')[];
  url: string;
  icon: React.ReactNode;
  isPrimary?: boolean;
}

export const SOFTWARE_CATALOG: SoftwareTool[] = [
  {
    name: 'RustDesk Remote',
    description: 'Primary encrypted remote support tool. Provides one-click connection to our engineering team.',
    category: 'Support',
    platforms: ['Windows', 'Mac', 'iOS', 'Android'],
    url: 'https://rustdesk.com/download',
    icon: <MousePointer2 />,
    isPrimary: true
  },
  {
    name: 'Advanced IP Scanner',
    description: 'Fast and easy-to-use network scanner that shows all devices connected to your LAN.',
    category: 'Network',
    platforms: ['Windows'],
    url: 'https://www.advanced-ip-scanner.com/',
    icon: <Search />
  },
  {
    name: 'Ookla Speedtest',
    description: 'The industry standard for testing internet bandwidth and network latency.',
    category: 'Network',
    platforms: ['Windows', 'Mac', 'iOS', 'Android', 'Web'],
    url: 'https://www.speedtest.net',
    icon: <Activity />
  },
  {
    name: 'CrystalDiskInfo',
    description: 'Health monitoring tool for SSD and HDD drives. Essential for predicting hardware failure.',
    category: 'Hardware',
    platforms: ['Windows'],
    url: 'https://crystalmark.info/en/software/crystaldiskinfo/',
    icon: <HardDrive />
  },
  {
    name: 'Malwarebytes',
    description: 'Industry-leading scanner for detecting and removing malware and unauthorized software.',
    category: 'Security',
    platforms: ['Windows', 'Mac', 'iOS', 'Android'],
    url: 'https://www.malwarebytes.com/mwb-download',
    icon: <ShieldCheck />
  },
  {
    name: 'QuickBooks Desktop',
    description: 'Deployment tools and installers for QuickBooks Desktop Enterprise and Premier editions.',
    category: 'Business',
    platforms: ['Windows'],
    url: 'https://quickbooks.intuit.com/learn-support/en-us/help-article/standard-setup/download-quickbooks-desktop/L2u20yv1r_US',
    icon: <Calculator />
  },
  {
    name: 'HWMonitor',
    description: 'Hardware monitoring program that reads PC system main health sensors (voltage, temp, fan speed).',
    category: 'Hardware',
    platforms: ['Windows', 'Android'],
    url: 'https://www.cpuid.com/softwares/hwmonitor.html',
    icon: <Thermometer />
  },
  {
    name: 'Microsoft 365',
    description: 'Access your cloud workspace, productivity apps, and organization deployment tools.',
    category: 'Business',
    platforms: ['Windows', 'Mac', 'iOS', 'Android', 'Web'],
    url: 'https://www.office.com',
    icon: <Layout />
  },
  {
    name: 'Angry IP Scanner',
    description: 'Fast, cross-platform network scanner for advanced troubleshooting and IP discovery.',
    category: 'Network',
    platforms: ['Windows', 'Mac'],
    url: 'https://angryip.org/',
    icon: <Signal />
  }
];

export interface GuideContent {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  readTime: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  fullContent: string[];
  audience: 'home' | 'business' | 'both';
}

export interface SubService {
  name: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  name: string;
  icon: React.ReactNode;
  audience: 'home' | 'business' | 'both';
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  howItWorks: string[];
  subServices?: SubService[];
  faqs?: FAQItem[];
}

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { 
    name: 'Services', 
    href: '#services',
    subItems: [
      { name: 'Remote Support', href: '#remote', icon: <MousePointer2 />, audience: 'both' },
      { name: 'Managed IT (MSP)', href: '#services', icon: <ShieldCheck />, audience: 'business' },
      { name: 'Network Solutions', href: '#services', icon: <Network />, audience: 'both' },
      { name: 'Residential ISP Prep', href: '#services', icon: <Home />, audience: 'home' },
      { name: 'Commercial ISP Solutions', href: '#services', icon: <Briefcase />, audience: 'business' },
      { name: 'QuickBooks Support', href: '#services', icon: <Calculator />, audience: 'business' },
      { name: 'Security Camera Installations', href: '#services', icon: <Camera />, audience: 'both' },
      { name: 'TV Mounting', href: '#services', icon: <Tv />, audience: 'home' },
      { name: 'Low Voltage Cabling', href: '#services', icon: <Cable />, audience: 'both' },
      { name: 'Pro Audio / Video', href: '#services', icon: <Music />, audience: 'both' },
      { name: 'Device Repair', href: '#services', icon: <Wrench />, audience: 'home' },
      { name: 'Starlink Installations', href: '#services', icon: <Globe />, audience: 'home' },
      { name: 'E-Recycling Services', href: '#services', icon: <Recycle />, audience: 'both' },
    ]
  },
  { name: 'Software Hub', href: '#software' },
  { name: 'Contact', href: '#contact' }
];

export const SERVICES: ServiceDetail[] = [
  {
    name: 'Remote Support',
    icon: <MousePointer2 className="w-6 h-6" />,
    audience: 'both',
    description: 'Instant technical assistance for software, networking, and device optimization via secure encrypted connection.',
    longDescription: 'Our Remote Support platform allows our engineers to diagnose and resolve your technical issues instantly, no matter where you are located. We use end-to-end encrypted tools to ensure your data remains private and secure while we work.',
    features: [
      'Instant Diagnostic Connection',
      'Secure End-to-End Encryption',
      'Multi-Platform Compatibility (Win/Mac/Mobile)',
      'Live Troubleshooting with Screen Share',
      'Remote Software Patching & Installation'
    ],
    benefits: [
      'Immediate Issue Resolution',
      'No Travel Fees or Scheduling Wait Times',
      'Safe and Supervised Access',
      'Global Support Availability'
    ],
    howItWorks: [
      'Download the secure remote client',
      'Share your one-time session ID',
      'Watch as our experts resolve your tech challenges'
    ],
    subServices: [
      { name: 'Windows Support', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Mac Troubleshooting', icon: <Laptop className="w-4 h-4" /> },
      { name: 'Mobile Config', icon: <SmartphoneIcon className="w-4 h-4" /> },
      { name: 'Security Audits', icon: <ShieldCheck className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "Is remote support safe?", answer: "Yes. We use industry-standard encryption, and you must manually authorize the connection. You can end the session at any time." },
      { question: "Do I need to install software?", answer: "Yes, a lightweight remote client (RustDesk) is required to facilitate the secure tunnel." }
    ]
  },
  { 
    name: 'Managed IT (MSP)', 
    icon: <ShieldCheck className="w-6 h-6" />, 
    audience: 'business', 
    description: 'Proactive 24/7 monitoring, security management, and dedicated help desk support for businesses.',
    longDescription: 'Our Managed IT Services (MSP) provide a comprehensive outsourcing solution for your entire technology infrastructure. We don\'t just fix things when they break; we predict and prevent failures before they impact your bottom line.',
    features: [
      '24/7 Endpoint Monitoring & Management',
      'Advanced Cybersecurity & Threat Hunting',
      'Immutable Backup & Disaster Recovery',
      'Cloud Infrastructure Management (M365/Azure)',
      'Strategic IT Consulting (vCIO)'
    ],
    benefits: [
      'Predictable Monthly IT Spend',
      'Maximum System Uptime',
      'Reduced Risk of Data Breaches',
      'Strategic Tech Scaling'
    ],
    howItWorks: [
      'Initial Infrastructure Audit & Vulnerability Assessment',
      'Implementation of Monitoring & Security Tools',
      'Ongoing Proactive Management & Help Desk Access'
    ],
    subServices: [
      { name: '24/7 Monitoring', icon: <Activity className="w-4 h-4" /> },
      { name: 'Cybersecurity', icon: <Lock className="w-4 h-4" /> },
      { name: 'Cloud Management', icon: <CloudLightning className="w-4 h-4" /> },
      { name: 'Backup & Recovery', icon: <HardDriveDownload className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "What is the typical response time for help desk issues?", answer: "We aim for an immediate response during business hours, with a maximum 1-hour SLA for critical infrastructure events." },
      { question: "Do you handle security compliance like HIPAA or PCI?", answer: "Yes, we implement technical controls and reporting that align with major regulatory frameworks." },
      { question: "Is your pricing per device or per user?", answer: "We offer flexible pricing models including all-in seat-based or flat infrastructure-based pricing to match your budget." },
      { question: "Do we get a dedicated account manager?", answer: "Every MSP client is assigned a vCIO (Virtual Chief Information Officer) for quarterly strategic reviews." }
    ]
  },
  { 
    name: 'Network Solutions', 
    icon: <Network className="w-6 h-6" />, 
    audience: 'both', 
    description: 'Enterprise-grade networking for homes and businesses. High-performance routers, switches, and access points.',
    longDescription: 'A robust network is the backbone of modern life and business. We design and deploy high-speed wired and wireless infrastructures using enterprise-grade hardware to ensure seamless connectivity across your entire property.',
    features: [
      'Whole-Home/Office Mesh WiFi Systems',
      'Ceiling-Mounted WiFi 6/7 Access Points',
      'Managed Network Switches & VLAN Segmenting',
      'VPN & Secure Remote Access Setup',
      'Network Performance Benchmarking'
    ],
    benefits: [
      'Zero WiFi Dead Zones',
      'Ultra-Low Latency for Voice/Video',
      'Secure Guest Network Isolation',
      'Scalable Hardware Infrastructure'
    ],
    howItWorks: [
      'Site survey and RF signal analysis',
      'Hardware mounting and structured cabling',
      'Firmware optimization and security hardening'
    ],
    subServices: [
      { name: 'WiFi Design', icon: <Wifi className="w-4 h-4" /> },
      { name: 'Enterprise Routing', icon: <Router className="w-4 h-4" /> },
      { name: 'Access Points', icon: <RadioTower className="w-4 h-4" /> },
      { name: 'Network Security', icon: <Shield className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "Why should I use professional APs instead of a mesh system?", answer: "Dedicated wired Access Points (APs) provide consistent full-duplex throughput and better hand-off between nodes compared to wireless mesh." },
      { question: "Can you fix WiFi dead zones in old houses with thick walls?", answer: "Yes, we specialize in hardwiring access points in strategically surveyed locations to penetrate dense materials." },
      { question: "What brands of networking gear do you install?", answer: "We typically deploy Ubiquiti UniFi, TP-Link Omada, or Aruba Instant On depending on the project requirements." },
      { question: "Do I own the equipment or is it a lease?", answer: "You own the hardware 100%. We provide the installation and initial configuration as a service." }
    ]
  },
  { 
    name: 'Residential ISP Prep', 
    icon: <Home className="w-6 h-6" />, 
    audience: 'home', 
    description: 'Avoid unsightly exterior wires. We pre-install fiber conduit, prep Starlink mounts, and optimize for 4K streaming.',
    longDescription: 'Don\'t let a standard ISP technician drill unnecessary holes through your siding. We provide professional "Last Mile" preparation for your home, ensuring fiber or satellite lines are run through conduits and terminated exactly where you want your router—not just where it\'s easiest for the tech.',
    features: [
      'Interior Fiber Conduit Installation',
      'Starlink Pole & Roof Mount Preparation',
      'In-Wall Ethernet Backhaul for WiFi',
      'Concealed Wiring from Demarc to Rack',
      'Streaming Buffer Diagnostics'
    ],
    benefits: [
      'Preserved Home Aesthetics',
      'Blazing Fast 4K/8K Streaming',
      'Zero Visible Hanging Wires',
      'Ready for Instant ISP Activation'
    ],
    howItWorks: [
      'Consultation on best ISP plan for your address',
      'Installation of conduit and interior cabling',
      'Technician-ready termination points'
    ],
    subServices: [
      { name: 'Fiber Prep', icon: <Zap className="w-4 h-4" /> },
      { name: 'Cable Concealment', icon: <Cable className="w-4 h-4" /> },
      { name: 'Starlink Mount', icon: <Globe className="w-4 h-4" /> },
      { name: 'WiFi Sync', icon: <Wifi className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "When is the best time to schedule ISP prep?", answer: "Ideally before your provider comes for the install, or during the 'rough-in' phase of a new build or renovation." },
      { question: "Can you help me choose between Fiber and Starlink?", answer: "Absolutely. We run speed benchmarks and availability checks for your specific address to provide a data-driven recommendation." },
      { question: "Will the ISP tech use the conduit I install?", answer: "Yes, we terminate the conduit with pull-strings that make it incredibly easy for them to slide their fiber in without drilling new holes." }
    ]
  },
  { 
    name: 'Commercial ISP Solutions', 
    icon: <Briefcase className="w-6 h-6" />, 
    audience: 'business', 
    description: 'Business continuity through Dual-WAN failover, Static IP coordination, and dedicated fiber concierge.',
    longDescription: 'When your internet goes down, your business stops. We design redundant ISP solutions that automatically switch to a secondary carrier (like Starlink or 5G) if your primary fiber fails. We also act as your technical concierge, managing ISP order cycles and static IP assignments.',
    features: [
      'Dual-WAN Redundant Failover Setup',
      'Static IP & DNS Coordination',
      'Fiber Demarcation Extensions',
      'Commercial Conduit & MPOE Planning',
      'Carrier Concierge & Order Management'
    ],
    benefits: [
      'Zero Productivity Downtime',
      'Reliable Remote Employee Access',
      'Professional Server Rack Integration',
      'Optimized Monthly Service Costs'
    ],
    howItWorks: [
      'Evaluation of primary and backup carrier options',
      'Infrastructure prep and router configuration',
      'Uptime testing and failover simulation'
    ],
    subServices: [
      { name: 'Failover Config', icon: <ArrowDownUp className="w-4 h-4" /> },
      { name: 'Static IP Help', icon: <Settings className="w-4 h-4" /> },
      { name: 'Fiber Concierge', icon: <Search className="w-4 h-4" /> },
      { name: 'MPOE Extension', icon: <Server className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "What is Dual-WAN failover?", answer: "It connects two separate internet providers to your router. If one fails, the other takes over instantly so your business stays online." },
      { question: "Can you extend a fiber demarc from the street to our server room?", answer: "Yes, we handle the inside wiring and conduit needed to bring the signal from the building entry point to your internal rack." },
      { question: "Do you provide the actual internet service?", answer: "No, we are consultants and installers. We help you pick the best provider and manage the technical setup so it actually works." }
    ]
  },
  { 
    name: 'QuickBooks Support', 
    icon: <Calculator className="w-6 h-6" />, 
    audience: 'business', 
    description: 'Expert setup, data migration, and troubleshooting for QuickBooks Desktop and Online editions.',
    longDescription: 'Financial clarity starts with a robust accounting system. We specialize in the technical side of QuickBooks, ensuring your data is synchronized, secure, and accessible whenever you need it.',
    features: [
      'Desktop to Online Data Migration',
      'Company File Repair & Optimization',
      'Multi-User Network Configuration',
      'Third-Party Application Integration',
      'Automated Cloud Backups'
    ],
    benefits: [
      'Error-Free Financial Reporting',
      'Secure Multi-User Access',
      'Reduced Technical Downtime',
      'Streamlined Bookkeeping Workflow'
    ],
    howItWorks: [
      'Review of current accounting software and data health',
      'Clean data migration or environment optimization',
      'Verification of sync and user permission settings'
    ],
    subServices: [
      { name: 'Migration', icon: <Share2 className="w-4 h-4" /> },
      { name: 'Desktop Support', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Online Setup', icon: <Globe className="w-4 h-4" /> },
      { name: 'App Sync', icon: <Zap className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "Can you move us from QB Desktop to QB Online?", answer: "Yes, we handle the full data migration including historical transactions and customer lists." },
      { question: "Why is our multi-user mode constantly throwing errors?", answer: "Often it is a database manager or network permissions issue. We can diagnose and fix these server-side problems." },
      { question: "Do you offer bookkeeping services?", answer: "We focus on the technical infrastructure of the software. We do not do bookkeeping, but we ensure your software is ready for your bookkeeper." }
    ]
  },
  { 
    name: 'TV Mounting', 
    icon: <Tv className="w-6 h-6" />, 
    audience: 'home', 
    description: 'Professional mounting for any TV size on any wall type.',
    longDescription: 'A perfect TV installation is about more than just a bracket. We ensure perfect leveling, secure anchoring, and expert wire concealment to create a clean, cinematic aesthetic in any room.',
    features: [
      'Fixed, Tilt, and Full-Motion Mount Installations',
      'In-Wall Wire Concealment',
      'Soundbar Integration',
      'Safe Installation on Drywall, Brick, Stone, or Plaster',
      'Projector & Screen Setup'
    ],
    benefits: [
      'Sleek, Clutter-Free Living Space',
      'Optimal Viewing Angles',
      'Safe and Secure Mounting',
      'Enhanced Resale Value of Home'
    ],
    howItWorks: [
      'On-site consultation to determine height and placement',
      'Precision mounting and hardware installation',
      'Full setup of connected devices and cable management'
    ],
    subServices: [
      { name: 'In-Wall Wiring', icon: <Cable className="w-4 h-4" /> },
      { name: 'Soundbar Mount', icon: <Music className="w-4 h-4" /> },
      { name: 'Custom Brackets', icon: <Settings2 className="w-4 h-4" /> },
      { name: 'Projectors', icon: <Monitor className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "Can you mount a TV over a fireplace?", answer: "Yes, we use specialized heat-resistant mounting and in-wall kits designed for fireplace aesthetics." },
      { question: "Do I need to provide the mount?", answer: "You can, or we can provide a high-quality, heavy-duty mount suited for your TV's size and desired motion range." },
      { question: "How do you hide the wires if it's an external wall?", answer: "We use code-compliant power bridges or decorative track covers depending on the wall structure and your preference." }
    ]
  },
  { 
    name: 'Pro Audio / Video', 
    icon: <Music className="w-6 h-6" />, 
    audience: 'both', 
    description: 'Home theater setup, multi-room audio, and commercial AV systems including TV mounting and digital signage.',
    longDescription: 'Whether it\'s an immersive Dolby Atmos home theater or a high-fidelity sound system for a retail space, we engineer high-performance AV environments that deliver flawless sound and picture. For businesses, we integrate professional TV mounting and digital signage for a cohesive commercial experience.',
    features: [
      'Professional TV & Large Format Display Mounting',
      'Digital Signage & Video Wall Implementation',
      'Surround Sound Calibration',
      'Multi-Room Audio Distribution (Sonos, Heos)',
      'Outdoor Entertainment Systems',
      'Smart Remote & Automation Control',
      'Conference Room Technology Setup',
      'Integrated Cable Concealment'
    ],
    benefits: [
      'Immersive Entertainment Experience',
      'Simplified One-Touch Controls',
      'Professional Acoustic Treatment',
      'Seamless Commercial AV Performance'
    ],
    howItWorks: [
      'System design and acoustic planning',
      'Hardware installation and wire pulling',
      'System calibration and user training'
    ],
    subServices: [
      { name: 'Home Theater', icon: <Tv className="w-4 h-4" /> },
      { name: 'Whole Home Audio', icon: <Volume2 className="w-4 h-4" /> },
      { name: 'Outdoor AV', icon: <Radio className="w-4 h-4" /> },
      { name: 'Automation', icon: <Cast className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "Can you integrate Sonos with my existing ceiling speakers?", answer: "Yes, we use Sonos Amps to bring traditional wired speakers into the modern streaming ecosystem." },
      { question: "Do you set up outdoor audio systems?", answer: "Yes, we install weatherproof landscape speakers and subwoofers for patio and pool areas." },
      { question: "How do I control multiple rooms at once?", answer: "We configure a centralized app or smart remote that lets you group rooms or play unique audio in each zone." }
    ]
  },
  { 
    name: 'Low Voltage Cabling', 
    icon: <Cable className="w-6 h-6" />, 
    audience: 'both', 
    description: 'Structured network wiring, ethernet drops, and cable management.',
    longDescription: 'WiFi is great, but wires are faster and more reliable. We provide professional Cat6/Cat6A cabling for offices and homes to support high-speed data, VoIP, and smart device connectivity.',
    features: [
      'Cat6 & Cat6A Ethernet Drops',
      'Server Rack & Patch Panel Organization',
      'Fiber Optic Terminations',
      'Coaxial & Speaker Wiring',
      'Network Closet Cleanup'
    ],
    benefits: [
      'Maximum Data Throughput',
      'Eliminated WiFi Latency',
      'Future-Proof Infrastructure',
      'Organized and Maintainable Setup'
    ],
    howItWorks: [
      'Site mapping and drop point identification',
      'Cabling pull and termination through walls/ceilings',
      'Testing and certification for signal integrity'
    ],
    subServices: [
      { name: 'Ethernet Drops', icon: <Link className="w-4 h-4" /> },
      { name: 'Rack Management', icon: <Server className="w-4 h-4" /> },
      { name: 'Fiber Optics', icon: <Zap className="w-4 h-4" /> },
      { name: 'Office Wiring', icon: <Briefcase className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "What is the difference between Cat6 and Cat6A?", answer: "Cat6 handles up to 1Gbps at long distances, while Cat6A supports 10Gbps, providing more headroom for future upgrades." },
      { question: "Can you run cables in a finished office building?", answer: "Yes, we use specialized tools to fish wires through walls, drop ceilings, and crawlspaces with minimal impact." },
      { question: "Do you test the lines after installation?", answer: "Every drop is certified using a digital cable tester to ensure full speed and pin-out accuracy." }
    ]
  },
  { 
    name: 'Security Camera Installations', 
    icon: <Camera className="w-6 h-6" />, 
    audience: 'both', 
    description: 'High-definition surveillance systems with remote viewing access.',
    longDescription: 'Protect your property with crystal-clear 4K surveillance. We install professional-grade IP camera systems that offer 24/7 recording, smart detection, and instant mobile alerts.',
    features: [
      '4K PoE IP Camera Systems',
      'Local NVR Storage with Remote Access',
      'Human & Vehicle Smart Detection',
      'Weatherproof & Night Vision Setup',
      'Cloud Backup Integration'
    ],
    benefits: [
      'Peace of Mind & Remote Visibility',
      'High-Definition Evidence Retrieval',
      'No Monthly Subscription Fees (for local NVR)',
      'Deterrent Against Theft & Vandalism'
    ],
    howItWorks: [
      'Coverage assessment and camera placement planning',
      'Hardware installation and network integration',
      'Mobile app configuration and user tutorial'
    ],
    subServices: [
      { name: 'IP Cameras', icon: <Shield className="w-4 h-4" /> },
      { name: 'NVR Recording', icon: <HardDrive className="w-4 h-4" /> },
      { name: 'Remote Viewing', icon: <SmartphoneIcon className="w-4 h-4" /> },
      { name: 'Smart AI Alerts', icon: <Zap className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "Is there a monthly fee for the cameras?", answer: "Our NVR-based systems store data locally, so there are zero monthly storage fees unlike Ring or Nest." },
      { question: "Can I view my cameras on my phone when I'm away?", answer: "Yes, we set up a secure, encrypted mobile app for remote live-view and playback." },
      { question: "How long does the footage keep?", answer: "Depending on hard drive size, most systems hold 2-4 weeks of continuous 4K footage before overwriting." }
    ]
  },
  { 
    name: 'Device Repair', 
    icon: <Wrench className="w-6 h-6" />, 
    audience: 'home', 
    description: 'Reliable repair for computers, tablets, and specialized hardware.',
    longDescription: 'Don\'t let a broken device slow you down. From cracked screens and battery replacements to complex motherboard repairs, we restore your essential tech to peak condition.',
    features: [
      'Laptop Screen & Keyboard Replacement',
      'SSD Upgrades & Performance Boosting',
      'Malware & Virus Removal',
      'Power Jack & Charging Port Repairs',
      'Data Recovery from Failing Drives'
    ],
    benefits: [
      'Extended Device Lifespan',
      'Cost-Effective Alternative to Replacement',
      'Quick Turnaround Times',
      'Professional Data Security during Repair'
    ],
    howItWorks: [
      'Comprehensive hardware/software diagnostic',
      'Estimate approval and repair execution',
      'Full testing and device sanitization'
    ],
    subServices: [
      { name: 'Laptop Repair', icon: <Monitor className="w-4 h-4" /> },
      { name: 'SSD Upgrades', icon: <Zap className="w-4 h-4" /> },
      { name: 'Virus Removal', icon: <ShieldAlert className="w-4 h-4" /> },
      { name: 'Tablet Fix', icon: <Tablet className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "Do you offer data recovery from dead computers?", answer: "Yes, we can often pull files from internal drives even if the machine won't turn on." },
      { question: "Is it worth upgrading my old laptop with an SSD?", answer: "Almost always. Swapping a mechanical drive for an SSD can make a 5-year-old laptop feel brand new." },
      { question: "How long does a typical repair take?", answer: "Most software cleanups take 24-48 hours. Hardware repairs depend on part availability." }
    ]
  },
  { 
    name: 'Starlink Installations', 
    icon: <Globe className="w-6 h-6" />, 
    audience: 'home', 
    description: 'Specialized mounting and setup for Starlink satellite systems.',
    longDescription: 'Get the most out of your Starlink subscription. We provide custom roof mounts, pole installations, and specialized cabling to ensure your dish has a 100% clear view of the sky for high-speed internet.',
    features: [
      'Custom Roof & Wall Mount Installations',
      'Specialized Long-Range Cabling',
      'Mesh WiFi Integration',
      'Obstruction Analysis & Placement',
      'Heated Dish Setup for Snow Melting'
    ],
    benefits: [
      'Zero Signal Interruptions',
      'Maximum Download/Upload Speeds',
      'Professional Cable Entry and Weatherproofing',
      'Seamless Integration with Home Network'
    ],
    howItWorks: [
      'Digital obstruction analysis via the Starlink app',
      'Physical mounting and cable routing',
      'Network testing and performance optimization'
    ],
    subServices: [
      { name: 'Roof Mounts', icon: <Home className="w-4 h-4" /> },
      { name: 'Obstruction Scan', icon: <Search className="w-4 h-4" /> },
      { name: 'Network Sync', icon: <Wifi className="w-4 h-4" /> },
      { name: 'Custom Cabling', icon: <Cable className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "Can you mount Starlink on my metal roof?", answer: "Yes, we use specialized non-penetrating mounts or magnetic kits specifically for metal roofing." },
      { question: "Why do I need a pro install if it's 'plug and play'?", answer: "Proper mounting avoids tree obstructions that cause drops, and professional cable routing protects your house from water damage." },
      { question: "Can I use my own router with Starlink?", answer: "Yes, we install the Starlink Ethernet Adapter and configure bypass mode so you can use high-performance mesh WiFi." }
    ]
  },
  { 
    name: 'E-Recycling Services', 
    icon: <Recycle className="w-6 h-6" />, 
    audience: 'both', 
    description: 'Eco-friendly disposal and data destruction for your old tech.',
    longDescription: 'Getting rid of old computers? Protect your identity. We provide secure data destruction followed by environmentally responsible recycling for all your legacy electronics.',
    features: [
      'Secure Hard Drive Shredding',
      'Certified Data Wiping (DoD Standard)',
      'Eco-Friendly Component Disposal',
      'Corporate Asset Retirement Services',
      'Pickup & Disposal Logs'
    ],
    benefits: [
      'Prevention of Identity Theft',
      'Environmentally Conscious Disposal',
      'Clean Workspace and Decluttered Office',
      'Compliance with Data Privacy Regulations'
    ],
    howItWorks: [
      'On-site pickup or drop-off of equipment',
      'Immediate data destruction and storage wiping',
      'Recycling of raw materials through certified channels'
    ],
    subServices: [
      { name: 'Data Destruction', icon: <Lock className="w-4 h-4" /> },
      { name: 'Asset Removal', icon: <Move className="w-4 h-4" /> },
      { name: 'Secure Wiping', icon: <ShieldCheck className="w-4 h-4" /> },
      { name: 'Pickup Service', icon: <Briefcase className="w-4 h-4" /> }
    ],
    faqs: [
      { question: "Is my data really gone after you wipe the drive?", answer: "We use industrial-grade wiping software that overwrites data multiple times, meeting DoD security standards." },
      { question: "Do you take old monitors or CRT TVs?", answer: "We accept all modern electronics. Some legacy items like CRT monitors may incur a small environmental disposal fee." },
      { question: "Do you provide a certificate of destruction?", answer: "Yes, for corporate clients we provide logs and certificates documenting the secure destruction of storage media." }
    ]
  },
];

export const TROUBLESHOOTING_RESOURCES: GuideContent[] = [
  {
    id: 't1',
    title: 'WiFi & Network Optimization',
    description: 'Diagnosing dead zones, signal interference, and optimizing router settings for high-speed streaming.',
    icon: <Wifi className="w-6 h-6" />,
    readTime: '5 min',
    difficulty: 'Medium',
    audience: 'both',
    fullContent: [
      "Identify dead zones using a mobile signal analyzer app.",
      "Check for physical obstructions like thick walls or electronics that cause interference.",
      "Consider upgrading to a Mesh WiFi system for seamless whole-home coverage.",
      "Change your router's channel frequency if you live in a crowded apartment area.",
      "Update your router firmware to ensure the latest security patches and performance fixes."
    ]
  },
  {
    id: 't2',
    title: 'PC & Mac Performance',
    description: 'Specialized optimization for slow startups, freezing apps, and hardware health diagnostics.',
    icon: <Cpu className="w-6 h-6" />,
    readTime: '8 min',
    difficulty: 'Easy',
    audience: 'home',
    fullContent: [
      "Manage startup applications to reduce boot time significantly.",
      "Run disk cleanup utilities to remove temporary system files and caches.",
      "Monitor system resources via Task Manager (Win) or Activity Monitor (Mac).",
      "Check for pending OS updates that include critical performance improvements.",
      "Verify if a hardware upgrade, like an SSD or more RAM, is necessary for your workload."
    ]
  },
  {
    id: 't5',
    title: 'QuickBooks Data Sync',
    description: 'Resolving sync errors between Desktop and Online versions, and fixing corrupted company files.',
    icon: <Calculator className="w-6 h-6" />,
    readTime: '10 min',
    difficulty: 'Medium',
    audience: 'business',
    fullContent: [
      "Verify if the error is related to network connectivity or file permissions.",
      "Run the QuickBooks File Doctor tool to diagnose and repair database issues.",
      "Check if the Intuit Sync Manager is up to date and authorized.",
      "Ensure you have a recent local backup before attempting a data rebuild.",
      "Verify that your system clock is accurate, as time discrepancies cause sync failures."
    ]
  },
  {
    id: 't6',
    title: 'Managed IT Proactive Health',
    description: 'Understanding endpoint alerts, managing VPN connections, and basic server status checks.',
    icon: <Activity className="w-6 h-6" />,
    readTime: '12 min',
    difficulty: 'Advanced',
    audience: 'business',
    fullContent: [
      "Review the central management console for failed backup or security alerts.",
      "Test VPN tunnels for latency and throughput bottlenecks.",
      "Check disk space thresholds on critical servers and NAS devices.",
      "Validate that RMM agents are active and communicating on all endpoints.",
      "Schedule automated patching during off-peak hours to avoid downtime."
    ]
  },
  {
    id: 't7',
    title: 'Audio-Video Lag & Sync',
    description: 'Fixing lip-sync issues, HDMI ARC/eARC connectivity, and surround sound channel mapping.',
    icon: <Music className="w-6 h-6" />,
    readTime: '7 min',
    difficulty: 'Easy',
    audience: 'home',
    fullContent: [
      "Adjust the 'Audio Delay' or 'Lip Sync' setting in your TV or Receiver menu.",
      "Ensure you are using high-speed HDMI 2.1 cables for 4K and eARC features.",
      "Verify speaker phases by checking positive/negative wiring consistency.",
      "Reset your soundbar or AVR if it fails to handshake with the TV via HDMI.",
      "Check for wireless interference if using Bluetooth or proprietary wireless subwoofers."
    ]
  },
  {
    id: 't11',
    title: 'Smart Home Hub Offline',
    description: 'Troubleshooting Zigbee/Z-Wave hubs, localized interference, and automation rule recovery.',
    icon: <Lightbulb className="w-6 h-6" />,
    readTime: '9 min',
    difficulty: 'Medium',
    audience: 'home',
    fullContent: [
      "Power cycle the main hub and wait 5 minutes for the mesh network to rebuild.",
      "Check if the hub is too close to a high-power router (2.4GHz interference).",
      "Verify that battery-powered sensors aren't dead, causing localized mesh gaps.",
      "Restoreautomation rules from cloud backups if a firmware update wiped them.",
      "Check for service outages from the manufacturer's cloud backend."
    ]
  },
  {
    id: 't12',
    title: 'Business VoIP Quality',
    description: 'Fixing jitter, dropped calls, and SIP-ALG issues on commercial firewalls.',
    icon: <PhoneCall className="w-6 h-6" />,
    readTime: '6 min',
    difficulty: 'Advanced',
    audience: 'business',
    fullContent: [
      "Disable SIP-ALG on your commercial router/firewall immediately.",
      "Prioritize VoIP traffic using QoS (Quality of Service) rules at the router level.",
      "Test for 'Bufferbloat' using a specialized network latency test.",
      "Check for 'Bufferbloat' using a specialized network latency test.",
      "Check for VLAN tagging errors that might be routing voice traffic over the data net.",
      "Verify that desk phones are receiving stable PoE power from the switch."
    ]
  },
  {
    id: 't13',
    title: 'Server Environmental Alerts',
    description: 'Managing overheating alerts, UPS battery health, and physical rack security.',
    icon: <Thermometer className="w-6 h-6" />,
    readTime: '11 min',
    difficulty: 'Advanced',
    audience: 'business',
    fullContent: [
      "Immediate check of rack intake and exhaust temperatures via the PDU.",
      "Validate that UPS battery self-tests are passing; replace batteries every 3 years.",
      "Ensure that dust filters on server bezels are clear of debris.",
      "Review access logs for physical rack door sensors.",
      "Set up secondary environmental monitoring independent of the server hardware."
    ]
  },
  {
    id: 't14',
    title: 'Email Deliverability (SPF/DKIM)',
    description: 'Troubleshooting why your business emails are landing in spam or being rejected.',
    icon: <Mail className="w-6 h-6" />,
    readTime: '8 min',
    difficulty: 'Medium',
    audience: 'business',
    fullContent: [
      "Audit your DNS records for valid SPF and DKIM signatures.",
      "Verify that your domain is not on common RBL (Real-time Blackhole Lists).",
      "Enable DMARC reporting to see who is sending unauthorized mail on your behalf.",
      "Check for 'Spoofing' attempts targeting your executive team.",
      "Ensure your sending IP has a valid reverse DNS (PTR) record."
    ]
  },
  {
    id: 't15',
    title: 'Mobile Sync & MDM',
    description: 'Resolving lost corporate data sync, broken profiles, and remote wipe failures.',
    icon: <Smartphone className="w-6 h-6" />,
    readTime: '7 min',
    difficulty: 'Medium',
    audience: 'both',
    fullContent: [
      "Re-authenticate your corporate account in the device settings.",
      "Check for expired MDM (Mobile Device Management) profiles or certificates.",
      "Ensure the device OS version meets the minimum security requirements of the portal.",
      "Clear the application cache for specialized apps like Outlook or Teams.",
      "Verify that 'Background App Refresh' is enabled for critical sync tools."
    ]
  },
  {
    id: 't16',
    title: 'UPS & Battery Maintenance',
    description: 'Testing runtime under load, replacing lead-acid cells, and surge protection audits.',
    icon: <Battery className="w-6 h-6" />,
    readTime: '5 min',
    difficulty: 'Easy',
    audience: 'both',
    fullContent: [
      "Run a manual self-test on your UPS to verify runtime accuracy.",
      "Inspect batteries for swelling or terminal corrosion.",
      "Ensure critical gear is on the 'Battery + Surge' side of the unit.",
      "Calculate your current load vs. unit capacity to ensure 10+ min of runtime.",
      "Label your power cables for quick identification during an emergency shutdown."
    ]
  }
];

export const INSTALLATION_GUIDES: GuideContent[] = [
  {
    id: 'i1',
    title: 'Smart Home Ecosystems',
    description: 'Full setup of smart thermostats, security cameras, and voice assistants like Alexa or Google Home.',
    icon: <Home className="w-6 h-6" />,
    readTime: '15 min',
    difficulty: 'Medium',
    audience: 'home',
    fullContent: [
      "Plan your ecosystem (Amazon, Google, or Apple) to ensure device compatibility.",
      "Install a central hub or ensure your router can handle the increased device load.",
      "Mount and configure security cameras with optimal viewing angles.",
      "Calibrate smart thermostats for maximum energy efficiency.",
      "Create 'Scenes' and automations to simplify daily routines."
    ]
  },
  {
    id: 'i5',
    title: 'Whole-Home Distributed Audio',
    description: 'Deploying Sonos/Heos zones, ceiling speakers, and localized amplifier racks.',
    icon: <Music className="w-6 h-6" />,
    readTime: '18 min',
    difficulty: 'Medium',
    audience: 'home',
    fullContent: [
      "Map out audio zones and calculate speaker quantity per room for even coverage.",
      "Install high-quality 14/2 speaker wire to a central media closet.",
      "Mount in-ceiling or in-wall architectural speakers with acoustic back-boxes.",
      "Configure multi-zone amplifiers and sync them to your streaming accounts.",
      "Calibrate volume limits per zone to prevent equipment damage."
    ]
  },
  {
    id: 'i6',
    title: 'Outdoor Lighting Automation',
    description: 'Setting up smart landscape lighting, astronomical timers, and motion-based security zones.',
    icon: <Lightbulb className="w-6 h-6" />,
    readTime: '14 min',
    difficulty: 'Easy',
    audience: 'home',
    fullContent: [
      "Install a low-voltage transformer with a smart controller module.",
      "Run direct-burial cable to fixture locations following a calculated voltage drop map.",
      "Place LED fixtures strategically for path lighting and architectural uplighting.",
      "Configure the hub with an 'Astronomical Timer' to adjust for sunrise/sunset.",
      "Integrate motion sensors to trigger security scenes during late-night hours."
    ]
  },
  {
    id: 'i2',
    title: 'Printer & Peripheral Setup',
    description: 'Seamless wireless printer setup, scanner configuration, and dual-monitor workstation layouts.',
    icon: <Printer className="w-6 h-6" />,
    readTime: '10 min',
    difficulty: 'Easy',
    audience: 'both',
    fullContent: [
      "Connect the printer to your local WiFi network via WPS or manual entry.",
      "Install the correct manufacturer drivers rather than generic OS drivers.",
      "Set up Scan-to-Email or Scan-to-Folder functionality.",
      "Configure dual-monitor display settings (Extend vs. Mirror).",
      "Check for proper cable management to reduce desk clutter and port strain."
    ]
  },
  {
    id: 'i7',
    title: 'High-Density Guest WiFi',
    description: 'Building a separate, rate-limited guest network with captive portals for retail/office.',
    icon: <Wifi className="w-6 h-6" />,
    readTime: '16 min',
    difficulty: 'Advanced',
    audience: 'business',
    fullContent: [
      "Create a dedicated Guest VLAN to isolate traffic from your internal data.",
      "Design a custom 'Captive Portal' splash page for terms and conditions acceptance.",
      "Apply bandwidth 'throttling' to ensure guests don't impact office productivity.",
      "Set up automated voucher generation for timed sessions.",
      "Ensure all APs (Access Points) have a clear line of sight to high-traffic areas."
    ]
  },
  {
    id: 'i8',
    title: 'Hybrid Conference Room Setup',
    description: 'Implementing 360-cameras, ceiling mics, and one-touch join consoles for Zoom/Teams.',
    icon: <Mic2 className="w-6 h-6" />,
    readTime: '22 min',
    difficulty: 'Advanced',
    audience: 'business',
    fullContent: [
      "Install a large-format commercial display with an ultra-thin fixed mount.",
      "Deploy a dedicated meeting room compute unit (NUC or specialized console).",
      "Mount a wide-angle 4K camera with AI-tracking and auto-framing.",
      "Install beamforming ceiling microphones for crystal clear audio pickup.",
      "Configure a tabletop touch panel for 'One-Touch Join' functionality."
    ]
  },
  {
    id: 'i3',
    title: 'Small Business IT Solutions',
    description: 'Deploying NAS storage, basic server maintenance, and multi-user network configurations.',
    icon: <Database className="w-6 h-6" />,
    readTime: '20 min',
    difficulty: 'Advanced',
    audience: 'business',
    fullContent: [
      "Configure a Network Attached Storage (NAS) with RAID for redundancy.",
      "Establish a VPN for secure remote employee access.",
      "Segment the network into Guest and Staff VLANs for security.",
      "Set up a centralized print server.",
      "Implement a disaster recovery plan including offsite immutable backups."
    ]
  },
  {
    id: 'i4',
    title: 'Cloud Workspace Integration',
    description: 'Setting up Microsoft 365, Google Workspace, and synchronizing devices across your organization.',
    icon: <Cloud className="w-6 h-6" />,
    readTime: '12 min',
    difficulty: 'Medium',
    audience: 'business',
    fullContent: [
      "Migrate existing emails and documents to the Cloud platform.",
      "Configure custom domain settings (MX, SPF, DKIM) for email deliverability.",
      "Deploy security policies including mandated MFA.",
      "Set up Shared Drives for team collaboration.",
      "Train users on synchronization and real-time co-authoring tools."
    ]
  }
];

export const FAQ_DATA = [
  {
    question: "Do you offer in-home or remote support?",
    answer: "Both! We provide local in-home visits for hardware issues, networking, and smart home setups. For software troubleshooting, email configuration, or general optimization, we can often assist remotely for a faster turnaround."
  },
  {
    question: "What is your 'No Fix, No Fee' policy?",
    answer: "It's simple: If we can't diagnose the problem or offer a solution, you don't pay a cent for the service. We believe in providing value, not just charging for time."
  },
  {
    question: "Do you support both Apple and Windows devices?",
    answer: "Yes. Our experts are well-versed in macOS, Windows, iOS, and Android. Whether it's a MacBook Pro or a custom-built PC, we have you covered."
  },
  {
    question: "How quickly can I book an appointment?",
    answer: "You can see our real-time availability through our booking hub. We often have same-day or next-day slots available for urgent tech needs."
  },
  {
    question: "Can you help set up a home office or small business network?",
    answer: "Absolutely. We specialize in creating high-performance, secure networks. This includes WiFi mesh systems, printer sharing, backup solutions, and cloud integration (Microsoft 365/Google Workspace)."
  },
  {
    question: "What areas do you serve?",
    answer: "We provide in-person support across Greenville, SC and the surrounding Upstate area. For remote support, we can assist anyone with an active internet connection globally."
  },
  {
    question: "Do you travel for on-site projects?",
    answer: "Yes! We travel for a fee to service clients across North Carolina, South Carolina, Georgia, and Tennessee. While we are based in Greenville, SC, we regularly deploy to surrounding states for larger residential installations and commercial IT projects."
  }
];
