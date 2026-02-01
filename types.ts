
export interface Resource {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'troubleshooting' | 'installation';
}

export interface NavLink {
  name: string;
  href: string;
}
