import {
    SiAmazonwebservices,
    SiPython,
    SiApachespark,
    SiDatabricks,
    SiDbt,
    SiTalend,
    SiGit,
} from 'react-icons/si';
import { TbSql, TbCloud, TbApi, TbTransform, TbDatabaseCog, TbBrandDatabricks, TbHierarchy, TbShieldCheck, TbChartDots, TbClock, TbLink, TbCloudUpload, TbAdjustmentsHorizontal, TbSearch, TbDatabaseSearch, TbExternalLink } from 'react-icons/tb';
import { HiOutlineDatabase, HiOutlineShieldCheck, HiOutlineViewGrid, HiOutlineCube, HiOutlineRefresh, HiOutlineCode, HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import type { IconType } from 'react-icons';

/* ─── Types ─── */
export interface Skill {
    name: string;
    icon: IconType;
    color: string;
    category: 'cloud' | 'data_eng' | 'data_arch' | 'devops' | 'governance' | 'language_int';
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
    link?: string;
}

export interface Certification {
    name: string;
    issuer: string;
    link?: string;
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
    // Cloud Platforms
    { name: 'Azure', icon: TbCloud, color: '#0078D4', category: 'cloud' },
    { name: 'Microsoft Fabric', icon: TbDatabaseCog, color: '#0078D4', category: 'cloud' },
    { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', category: 'cloud' },

    // Data Engineering
    { name: 'Databricks', icon: SiDatabricks, color: '#FF3621', category: 'data_eng' },
    { name: 'Spark', icon: SiApachespark, color: '#E25A1C', category: 'data_eng' },
    { name: 'PySpark', icon: SiApachespark, color: '#F7931E', category: 'data_eng' },
    { name: 'DBT', icon: SiDbt, color: '#FF694B', category: 'data_eng' },
    { name: 'ETL', icon: TbTransform, color: '#00D4AA', category: 'data_eng' },
    { name: 'SparkSQL', icon: TbSql, color: '#E25A1C', category: 'data_eng' },
    { name: 'Talend', icon: SiTalend, color: '#1675BC', category: 'data_eng' },
    { name: 'Delta Lake', icon: HiOutlineDatabase, color: '#00ADD8', category: 'data_eng' },

    // Data Architecture
    { name: 'Lakehouse Architecture', icon: HiOutlineViewGrid, color: '#6366F1', category: 'data_arch' },
    { name: 'Medallion Architecture', icon: TbHierarchy, color: '#8B5CF6', category: 'data_arch' },
    { name: 'Dimensional Modeling', icon: HiOutlineCube, color: '#EC4899', category: 'data_arch' },
    { name: 'Data Governance', icon: TbShieldCheck, color: '#10B981', category: 'data_arch' },
    { name: 'Data Lineage', icon: TbChartDots, color: '#F59E0B', category: 'data_arch' },

    // DevOps & Automation
    { name: 'CI/CD', icon: TbCloudUpload, color: '#3B82F6', category: 'devops' },
    { name: 'Azure DevOps', icon: TbCloud, color: '#0078D4', category: 'devops' },
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'devops' },
    { name: 'Multi-Environment Deployment', icon: TbAdjustmentsHorizontal, color: '#6366F1', category: 'devops' },

    // Governance & Monitoring
    { name: 'Unity Catalog', icon: TbSearch, color: '#FF3621', category: 'governance' },
    { name: 'Microsoft Purview', icon: TbDatabaseSearch, color: '#0078D4', category: 'governance' },
    { name: 'Data Quality', icon: HiOutlineShieldCheck, color: '#10B981', category: 'governance' },
    { name: 'Lakehouse Monitoring', icon: TbClock, color: '#F59E0B', category: 'governance' },

    // Languages & Integration
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'language_int' },
    { name: 'SQL', icon: TbSql, color: '#E38C00', category: 'language_int' },
    { name: 'APIs', icon: TbApi, color: '#6C63FF', category: 'language_int' },
    { name: 'ADLS Gen2', icon: HiOutlineDatabase, color: '#0078D4', category: 'language_int' },
    { name: 'IoT Hub', icon: TbLink, color: '#0078D4', category: 'language_int' },
];

/* ─── Orbit config (skills that revolve around photo) ─── */
export const orbitSkills: OrbitSkill[] = [
    { ...skills[0], ring: 'inner', speed: 12 },   // Azure
    { ...skills[1], ring: 'inner', speed: 12 },   // Fabric
    { ...skills[4], ring: 'inner', speed: 12 },   // Spark
    { ...skills[11], ring: 'inner', speed: 12 },  // Lakehouse
    { ...skills[12], ring: 'inner', speed: 12 },  // Medallion
    { ...skills[2], ring: 'outer', speed: 8 },    // AWS
    { ...skills[3], ring: 'outer', speed: 8 },    // Databricks
    { ...skills[6], ring: 'outer', speed: 8 },    // DBT
    { ...skills[7], ring: 'outer', speed: 8 },    // ETL
    { ...skills[8], ring: 'outer', speed: 8 },    // SparkSQL
    { ...skills[9], ring: 'outer', speed: 8 },    // Talend
    { ...skills[10], ring: 'outer', speed: 8 },   // Delta Lake
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
            'exp.hexaview.b4',
            'exp.hexaview.b5',
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
            'exp.celebal.b4',
            'exp.celebal.b5',
            'exp.celebal.b6',
            'exp.celebal.b7',
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
        link: 'https://drive.google.com/file/d/1IPuvkB3Nt4cmXPsTt6-HzHuYM3PMT2sQ/view?usp=sharing',
    },
    {
        degree: 'Bachelor of Vocational Studies in Software Development',
        institution: 'Guru Gobind Singh Indraprastha University, Delhi',
        period: '2018 – 2021',
        score: '88.5%',
        link: 'https://drive.google.com/file/d/1-4QRrTCpV3QssWNfYzzKpVBSBT7TJ1lH/view?usp=sharing',
    },
];

/* ─── Certifications ─── */
export const certifications: Certification[] = [
    { name: 'Databricks Data Engineer Professional', issuer: 'Databricks', link: 'https://credentials.databricks.com/cd9b9ea0-7715-45eb-9b01-8037911c2d3e' },
    { name: 'Azure Data Engineer Associate (DP-203)', issuer: 'Microsoft', link: 'https://learn.microsoft.com/api/credentials/share/en-us/DeepikaNegi-5310/B6AFF461D0CD1490?sharingId=' },
    { name: 'Fabric Data Engineer Associate (DP-700)', issuer: 'Microsoft', link: 'https://learn.microsoft.com/api/credentials/share/en-us/DeepikaNegi-5310/9D35F77874E120CE?sharingId=4446AA16509708B' },
    { name: 'Databricks Lakehouse Fundamentals', issuer: 'Databricks', link: 'https://credentials.databricks.com/a473769d-3a85-47f0-a6e4-b8b9dd4b87ea' },
    { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', link: 'https://learn.microsoft.com/en-in/users/deepikanegi-5310/credentials/certification/azure-fundamentals?tab=credentials-tab' },
    { name: 'Azure Data Fundamentals (DP-900)', issuer: 'Microsoft', link: 'https://learn.microsoft.com/api/credentials/share/en-in/DeepikaNegi-5310/8556A4C435B1A764?sharingId=' },
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
    { key: 'skills.cat.data_eng', category: 'data_eng' as const },
    { key: 'skills.cat.data_arch', category: 'data_arch' as const },
    { key: 'skills.cat.devops', category: 'devops' as const },
    { key: 'skills.cat.governance', category: 'governance' as const },
    { key: 'skills.cat.language_int', category: 'language_int' as const },
];
