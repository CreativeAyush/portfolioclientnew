import {
    SiAmazonwebservices,
    SiPython,
    SiApachespark,
    SiDatabricks,
    SiDbt,
    SiTalend,
} from 'react-icons/si';
import { TbSql, TbCloud, TbApi, TbTransform, TbDatabaseCog, TbBrandDatabricks } from 'react-icons/tb';
import type { IconType } from 'react-icons';

/* ─── Types ─── */
export interface Skill {
    name: string;
    icon: IconType;
    color: string;
    category: 'cloud' | 'data' | 'devops' | 'language';
}

export interface OrbitSkill extends Skill {
    ring: 'inner' | 'outer';
    speed: number; // degrees per second
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    location: string;
    period: string;
    url: string;
    bullets: string[];
}

export interface Project {
    id: string;
    title: string;
    client: string;
    descriptionKey: string;
    bullets: string[];
    tags: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    score: string;
}

export interface Certification {
    name: string;
    issuer: string;
}

/* ─── Personal ─── */
export const personalInfo = {
    name: 'Deepika Negi',
    title: 'Data Engineer',
    location: 'Delhi, India',
    email: 'negideepika06@gmail.com',
    phone: '+91 9953694318',
    linkedin: 'https://www.linkedin.com/in/deepika-negi-02732920a',
    profileImage: '/assets/profile.jpg',
};

/* ─── Skills ─── */
export const skills: Skill[] = [
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'language' },        // 0
    { name: 'Spark', icon: SiApachespark, color: '#E25A1C', category: 'data' },         // 1
    { name: 'PySpark', icon: SiApachespark, color: '#F7931E', category: 'data' },       // 2
    { name: 'ETL', icon: TbTransform, color: '#00D4AA', category: 'data' },             // 3
    { name: 'Databricks', icon: SiDatabricks, color: '#FF3621', category: 'data' },     // 4
    { name: 'Fabric', icon: TbDatabaseCog, color: '#0078D4', category: 'cloud' },       // 5
    { name: 'DBT', icon: SiDbt, color: '#FF694B', category: 'data' },                   // 6
    { name: 'SQL', icon: TbSql, color: '#e38c00', category: 'language' },               // 7
    { name: 'SparkSQL', icon: TbSql, color: '#E25A1C', category: 'data' },              // 8
    { name: 'APIs', icon: TbApi, color: '#6C63FF', category: 'language' },              // 9
    { name: 'Talend', icon: SiTalend, color: '#1675BC', category: 'data' },             // 10
    { name: 'Azure', icon: TbCloud, color: '#0078D4', category: 'cloud' },              // 11
    { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', category: 'cloud' },    // 12
];

/* ─── Orbit config (skills that revolve around photo) ─── */
export const orbitSkills: OrbitSkill[] = [
    { ...skills[0], ring: 'inner', speed: 12 },   // Python
    { ...skills[1], ring: 'inner', speed: 12 },   // Spark
    { ...skills[4], ring: 'inner', speed: 12 },   // Databricks
    { ...skills[5], ring: 'inner', speed: 12 },   // Fabric
    { ...skills[11], ring: 'inner', speed: 12 },  // Azure
    { ...skills[12], ring: 'inner', speed: 12 },  // AWS
    { ...skills[2], ring: 'outer', speed: 8 },    // PySpark
    { ...skills[3], ring: 'outer', speed: 8 },    // ETL
    { ...skills[6], ring: 'outer', speed: 8 },    // DBT
    { ...skills[7], ring: 'outer', speed: 8 },    // SQL
    { ...skills[8], ring: 'outer', speed: 8 },    // SparkSQL
    { ...skills[9], ring: 'outer', speed: 8 },    // APIs
    { ...skills[10], ring: 'outer', speed: 8 },   // Talend
];

/* ─── Experience ─── */
export const experiences: Experience[] = [
    {
        id: 'hexaview',
        company: 'Hexaview Technologies Pvt. Ltd.',
        role: 'Associate Data Engineer',
        location: 'Noida, India',
        period: '2025 – Present',
        url: 'https://hexaviewtech.com/',
        bullets: [
            'exp.hexaview.b1',
            'exp.hexaview.b2',
            'exp.hexaview.b3',
        ],
    },
    {
        id: 'celebal',
        company: 'Celebal Technologies Pvt. Ltd.',
        role: 'Associate Data Engineer',
        location: 'Noida, India',
        period: '2023 – 2025',
        url: 'https://celebaltech.com/',
        bullets: [
            'exp.celebal.b1',
            'exp.celebal.b2',
            'exp.celebal.b3',
        ],
    },
];

/* ─── Projects ─── */
export const projects: Project[] = [
    {
        id: 'f2-strategy',
        title: 'Enterprise Data Platform',
        client: 'F2 Strategy',
        descriptionKey: 'projects.f2.desc',
        bullets: [
            'projects.f2.b1',
            'projects.f2.b2',
            'projects.f2.b3',
            'projects.f2.b4',
        ],
        tags: ['Azure Fabric', 'Medallion', 'CI/CD', 'Power BI', 'Purview'],
    },
    {
        id: 'petronas',
        title: 'Talend to Databricks Migration',
        client: 'Petronas',
        descriptionKey: 'projects.petronas.desc',
        bullets: [
            'projects.petronas.b1',
            'projects.petronas.b2',
            'projects.petronas.b3',
            'projects.petronas.b4',
            'projects.petronas.b5',
        ],
        tags: ['Databricks', 'Talend', 'SQL', 'DLT', 'CI/CD'],
    },
    {
        id: 'ihcl',
        title: 'IoT-Driven OEE Optimization',
        client: 'Indian Hotel Company Limited',
        descriptionKey: 'projects.ihcl.desc',
        bullets: [
            'projects.ihcl.b1',
            'projects.ihcl.b2',
            'projects.ihcl.b3',
            'projects.ihcl.b4',
            'projects.ihcl.b5',
        ],
        tags: ['IoT Hub', 'ADLS Gen2', 'DLT', 'Medallion', 'Power BI'],
    },
    {
        id: 'cocacola',
        title: 'SharePoint to Databricks Migration',
        client: 'Coca-Cola Beverages',
        descriptionKey: 'projects.cocacola.desc',
        bullets: [
            'projects.cocacola.b1',
            'projects.cocacola.b2',
            'projects.cocacola.b3',
            'projects.cocacola.b4',
        ],
        tags: ['SharePoint', 'Databricks', 'ETL', 'Power BI'],
    },
];

/* ─── Education ─── */
export const education: Education[] = [
    {
        degree: 'Master of Computer Application',
        institution: 'Guru Gobind Singh Indraprastha University, Delhi',
        period: '2021 – 2023',
        score: '89.7%',
    },
    {
        degree: 'Bachelor of Vocational Studies in Software Development',
        institution: 'Guru Gobind Singh Indraprastha University, Delhi',
        period: '2018 – 2021',
        score: '88.5%',
    },
];

/* ─── Certifications ─── */
export const certifications: Certification[] = [
    { name: 'Databricks Lakehouse Fundamentals', issuer: 'Databricks' },
    { name: 'Databricks Data Engineer Professional', issuer: 'Databricks' },
    { name: 'Azure Data Engineer Associate (DP-203)', issuer: 'Microsoft' },
    { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft' },
    { name: 'Azure Data Fundamentals (DP-900)', issuer: 'Microsoft' },
    { name: 'Fabric Data Engineer Associate (DP-700)', issuer: 'Microsoft' },
];

/* ─── Nav links ─── */
export const navLinks = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.skills', href: '#skills' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.contact', href: '#contact' },
];

/* ─── Skill categories for the Skills section ─── */
export const skillCategories = [
    { key: 'skills.cat.cloud', category: 'cloud' as const },
    { key: 'skills.cat.data', category: 'data' as const },
    { key: 'skills.cat.language', category: 'language' as const },
];
