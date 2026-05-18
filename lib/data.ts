export const profile = {
  name: 'Anjali Para',
  role: 'Data Engineer · AWS Solutions Architect',
  tagline:
    'I design AWS-native data pipelines and BI products that turn messy, multi-source data into reliable, decision-ready datasets — increasingly with GenAI in the loop.',
  location: 'Seattle, WA',
  email: 'anjalipara0909@gmail.com',
  phone: '832-525-6711',
  resume: 'resume.pdf',
  socials: {
    github: 'https://github.com/apriya257',
    linkedin: 'https://www.linkedin.com/in/anjalipara',
    email: 'mailto:anjalipara0909@gmail.com',
  },
  now: 'Building GenAI-powered data extraction pipelines on AWS — Claude + Glue + Redshift for unstructured healthcare data at scale.',
};

export const about = [
  "I'm a Data Engineer with 5 years across AWS data platforms and AI/ML workflows. AWS Certified Solutions Architect — Professional, AWS Certified AI Practitioner.",
  'My specialty is consolidating fragmented, multi-source data into reliable analytics-ready datasets — and lately, weaving Claude and other GenAI tools into pipelines to extract structure from messy PDFs, forms, and free text.',
  'I work end-to-end: ingestion (S3, Glue, Lambda, Kafka, Kinesis) → modeling (Redshift, DynamoDB, Athena) → BI (QuickSight, Tableau) → reliability (CloudWatch, IAM, automated validation).',
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: 'AI & Machine Learning',
    items: [
      'Generative AI (Claude)',
      'Prompt engineering',
      'LLM data extraction',
      'Amazon SageMaker',
      'Amazon Comprehend',
      'Amazon Lex',
      'Predictive modeling',
      'NLP workflows',
      'Anomaly detection',
    ],
  },
  {
    label: 'Programming & Querying',
    items: ['Python', 'Pandas', 'NumPy', 'SQL (advanced)', 'Shell scripting'],
  },
  {
    label: 'AWS Cloud & Data',
    items: [
      'S3',
      'Glue',
      'Lambda',
      'EMR',
      'Redshift',
      'Athena',
      'DynamoDB',
      'SageMaker',
      'QuickSight',
      'CloudWatch',
      'SNS',
      'IAM',
      'Glue Catalog',
      'Data Lakes',
    ],
  },
  {
    label: 'Data Engineering',
    items: [
      'ETL / ELT design',
      'Apache Spark',
      'Apache Kafka',
      'Real-time & batch',
      'Dimensional modeling',
      'Partitioning & indexing',
      'Data warehousing',
      'Lakehouse architecture',
    ],
  },
  {
    label: 'BI & Visualization',
    items: [
      'Amazon QuickSight',
      'Tableau',
      'Executive dashboards',
      'Self-service analytics',
    ],
  },
  {
    label: 'Data Quality & Governance',
    items: [
      'Automated validation',
      'Anomaly frameworks',
      'Healthcare compliance',
      'IAM & encryption',
      'Secure data handling',
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: 'KGate Technologies (Client: ABA Centers)',
    role: 'Data Engineer II',
    period: 'Oct 2025 — Present',
    location: 'Seattle, WA',
    bullets: [
      'Architected an end-to-end AWS pipeline (S3, Glue, Lambda) that ingests and normalizes 50K+ healthcare billing invoices, with Claude + GenAI converting unstructured PDFs into analytics-ready records.',
      'Designed prompt-based extraction workflows with Claude — increased throughput ~10x and cut per-batch processing from days to hours.',
      'Built automated validation and reconciliation logic — achieved 95%+ field-level extraction accuracy and reduced downstream data-quality incidents ~60%.',
      'Modeled extracted billing data into a dimensional schema in Amazon Redshift — improved downstream query performance by 45% for finance and ops analytics teams.',
      'Delivered financial insights through Amazon QuickSight dashboards across 20+ payer relationships, surfacing discrepancies that informed contract negotiations.',
      'Established a self-sustaining onboarding mechanism for new invoice formats — reduced recurring engineering support ~70% post-handoff.',
    ],
    stack: ['AWS', 'S3', 'Glue', 'Lambda', 'Redshift', 'QuickSight', 'Claude', 'Python'],
  },
  {
    company: 'Populus Group (Client: Amazon)',
    role: 'Data Analyst III',
    period: 'May 2024 — Oct 2025',
    location: 'Seattle, WA',
    bullets: [
      'Built an internal data validation service combining Amazon Lex chatbots with AWS data infrastructure, letting business users reconcile reporting across multiple data lakes conversationally.',
      'Designed AWS Glue and Data Pipeline workflows merging structured + semi-structured data into a unified S3 validation layer with embedded quality checks.',
      'Leveraged SageMaker and Comprehend to classify data-quality issues, detect anomalies, and prioritize records for review — automating validation tasks previously handled manually.',
      'Built QuickSight dashboards on Redshift and Athena — reduced manual data query time ~30% and strengthened leadership confidence in primary reporting.',
    ],
    stack: ['AWS', 'Glue', 'S3', 'Lex', 'SageMaker', 'Comprehend', 'Redshift', 'Athena', 'QuickSight'],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Data Engineer',
    period: 'Nov 2019 — Jul 2022',
    location: 'Chennai, India',
    bullets: [
      'Engineered end-to-end AWS pipelines (S3, EMR, Glue, Lambda) integrated with Kafka and Spark for real-time ingestion — processed 100M+ events / day and cut end-to-end latency by 35%.',
      'Optimized data retrieval in Redshift and DynamoDB through indexing, partitioning, and query tuning — 40% faster execution and better availability for downstream BI.',
      'Led migration of legacy ETL to Glue + Athena + Lambda — 22% efficiency gain and 15% operational cost reduction.',
      'Built CloudWatch + SNS real-time monitoring to proactively catch and resolve pipeline failures — 25% downtime reduction.',
      'Streamlined data discovery and governance via AWS Data Lakes and Glue Catalog with IAM + encryption controls.',
    ],
    stack: ['AWS', 'EMR', 'Glue', 'Lambda', 'Kafka', 'Spark', 'Redshift', 'DynamoDB', 'Athena'],
  },
  {
    company: 'Brain O Vision',
    role: 'Data Analyst',
    period: 'Aug 2018 — Oct 2019',
    location: 'Hyderabad, India',
    bullets: [
      'Built interactive Tableau dashboards surfacing operational and clinical metrics for healthcare teams — replaced manual reporting and shortened turnaround on recurring reviews.',
      'Automated data collection and validation with AWS Lambda + DynamoDB — ~20% reduction in manual effort and better consistency across healthcare datasets.',
      'Built ETL workflows with AWS S3, Lambda, and Python to automate ingestion from diverse healthcare sources.',
      'Partnered with analysts, engineers, and ops teams to implement data-quality checks aligned with healthcare regulatory standards.',
    ],
    stack: ['Tableau', 'AWS', 'Lambda', 'DynamoDB', 'S3', 'Python'],
  },
];

export type Project = {
  slug: string;
  title: string;
  pitch: string;
  tags: string[];
  impact: string[];
  diagram: string;
  links?: { label: string; href: string }[];
  accent?: 'cyan' | 'violet' | 'green' | 'amber' | 'pink';
};

export const projects: Project[] = [
  {
    slug: 'covid-19-dashboard',
    title: 'COVID-19 Global Surveillance Dashboard',
    pitch:
      'Daily-refreshed worldwide case / death / vaccination tracker with country and US-county drill-downs.',
    tags: ['AWS Glue', 'Lambda', 'S3', 'Redshift', 'QuickSight', 'Python'],
    impact: [
      'Refreshed 200+ country feeds nightly across 4 public-health sources (JHU, WHO, OWID, CDC).',
      'Cut end-to-end refresh from 4h → 25m via incremental Glue jobs + partitioned Redshift loads.',
      'Geo heatmap, 7-day rolling avg, and vaccine-coverage panels in QuickSight.',
    ],
    diagram: `flowchart LR
  A[JHU / WHO / OWID / CDC] --> B(Lambda fetch)
  B --> C[(S3 raw)]
  C --> D[Glue ETL]
  D --> E[(Redshift marts)]
  E --> F[QuickSight]`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live dashboard', href: '#' },
    ],
    accent: 'cyan',
  },
  {
    slug: 'hantavirus-tracker',
    title: 'Hantavirus Outbreak Tracking Dashboard',
    pitch:
      'Geospatial surveillance of HPS cases across the Americas, joined with rodent habitat and climate signals.',
    tags: ['AWS Glue', 'Athena', 'S3', 'QuickSight', 'GeoPandas', 'Lambda'],
    impact: [
      'Unified 6 disparate public-health sources (CDC, PAHO, NOAA, USGS) into one dimensional model in S3 + Athena.',
      'Flagged 3 regional case-count anomalies via SageMaker-based statistical alerting.',
      'Choropleth, time-series, and climate-correlation panels in QuickSight.',
    ],
    diagram: `flowchart LR
  A[CDC / PAHO / NOAA / USGS] --> B(Lambda ingest)
  B --> C[(S3 staging)]
  C --> D[Glue + GeoPandas]
  D --> E[Athena]
  E --> F[QuickSight]`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live dashboard', href: '#' },
    ],
    accent: 'green',
  },
  {
    slug: 'flight-path-tracker',
    title: 'Flight Path & Delay Status Tracker',
    pitch:
      'Near-real-time global flight tracker showing live positions, delay propagation, and on-time performance.',
    tags: ['Kinesis', 'Lambda', 'DynamoDB', 'Redshift', 'Mapbox', 'Python'],
    impact: [
      'Ingested ~30k flight events / minute via Kinesis with <5s end-to-end latency.',
      'Surfaced delay-cascade insights across 400+ airports using stateful Lambda aggregations.',
      'DynamoDB for hot lookups, Redshift for historical analytics, Mapbox for the live map.',
    ],
    diagram: `flowchart LR
  A[OpenSky API] --> B(Kinesis: flights)
  B --> C[Lambda agg]
  C --> D[(DynamoDB hot)]
  C --> E[(Redshift)]
  D --> F[Next.js + Mapbox]
  E --> F`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live dashboard', href: '#' },
    ],
    accent: 'violet',
  },
  {
    slug: 'genai-invoice-extractor',
    title: 'GenAI Invoice Extraction Sandbox',
    pitch:
      'Open-source side project showing how Claude + AWS turns messy multi-vendor PDFs into structured rows — the same pattern I scaled at ABA Centers.',
    tags: ['Claude', 'Lambda', 'S3', 'Glue', 'Redshift', 'Python'],
    impact: [
      'Prompt-based extraction with self-check pass achieving 95%+ field-level accuracy on a public invoice corpus.',
      'Low-confidence rows auto-routed to a review queue rather than silently failing.',
      'Schema-driven prompt templates so new invoice formats onboard in minutes, not days.',
    ],
    diagram: `flowchart LR
  A[Invoice PDFs] --> B[(S3 raw)]
  B --> C[Lambda + Claude]
  C --> D{confidence?}
  D -- high --> E[Glue normalize]
  D -- low --> F[Review queue]
  E --> G[(Redshift)]`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Write-up', href: '#' },
    ],
    accent: 'amber',
  },
  {
    slug: 'nyc-taxi-lakehouse',
    title: 'NYC Taxi Trip Lakehouse on AWS',
    pitch:
      'Multi-TB historical trip data on S3 + Glue Catalog, queryable via Athena and EMR Spark.',
    tags: ['EMR', 'Spark', 'Glue Catalog', 'S3', 'Athena', 'QuickSight'],
    impact: [
      'Processed 10+ years of trip data (~1.5B rows, ~3 TB) partitioned by year/month.',
      'Athena p95 query latency under 4s for typical analyst questions.',
      'Surge-pricing and fare-anomaly dashboards in QuickSight.',
    ],
    diagram: `flowchart LR
  A[NYC TLC public data] --> B(Lambda ingest)
  B --> C[(S3 raw)]
  C --> D[EMR Spark transform]
  D --> E[(S3 curated + Glue Catalog)]
  E --> F[Athena]
  F --> G[QuickSight]`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Case study', href: '#case-study' },
    ],
    accent: 'pink',
  },
  {
    slug: 'wildfire-air-quality',
    title: 'Wildfire & Air Quality Geospatial Dashboard',
    pitch:
      'NASA FIRMS fire detections joined with OpenAQ air quality and NOAA weather into a daily risk map.',
    tags: ['Glue', 'Athena', 'Lambda', 'GeoPandas', 'QuickSight'],
    impact: [
      'Joined 3 satellite + sensor + weather sources into a single risk model.',
      'Daily refresh with H3 hex-grid aggregation for fast geospatial joins.',
      'Trend dashboard + active-fire SNS alerting layer.',
    ],
    diagram: `flowchart LR
  A[NASA FIRMS / OpenAQ / NOAA] --> B(Lambda)
  B --> C[(S3 staging)]
  C --> D[Glue + H3 hex grid]
  D --> E[Athena]
  E --> F[QuickSight]`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live dashboard', href: '#' },
    ],
    accent: 'cyan',
  },
];

export const caseStudy = {
  projectSlug: 'nyc-taxi-lakehouse',
  title: 'Building an AWS lakehouse for 1.5B taxi trips on a tight budget',
  problem:
    'Analysts wanted ad-hoc access to a decade of NYC taxi trips, but loading everything into Redshift would have blown the monthly bill.',
  decisions: [
    'Land raw Parquet in S3, never duplicate into the warehouse.',
    'Register everything in the Glue Catalog so Athena, EMR, and Redshift Spectrum all see the same tables.',
    'EMR Spark on spot instances for batch transforms — cheap and easy to scale.',
    'Expose curated S3 tables to BI via Athena; reserve Redshift for the truly hot marts.',
  ],
  results: [
    '~70% lower storage + compute cost vs. an all-Redshift baseline.',
    'p95 Athena query latency under 4 seconds for typical analyst questions.',
    'Partition pruning + columnar Parquet kept scan costs predictable as the dataset grew.',
  ],
};

export const dashboards = [
  {
    title: 'Payer & invoice insights',
    note: 'QuickSight board across 20+ payer relationships — revenue, reimbursement variance, denials.',
  },
  {
    title: 'Pipeline health',
    note: 'CloudWatch + custom widgets — DAG freshness, failure rate, alarm history.',
  },
  {
    title: 'Cost & usage explorer',
    note: 'Redshift / Glue / Athena spend by team, query, and warehouse — QuickSight.',
  },
  {
    title: 'Geospatial outbreak map',
    note: 'Choropleth with time-slider — QuickSight ML insights enabled.',
  },
];

export type Cert = { title: string; issuer: string; year: string };

export const certifications: Cert[] = [
  { title: 'AWS Certified Solutions Architect — Professional', issuer: 'Amazon Web Services', year: '2024' },
  { title: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: '2024' },
];

export const education = [
  {
    school: 'University of Houston — Clear Lake',
    degree: 'M.S. Software Engineering',
    detail: 'Houston, TX · GPA 3.50 · May 2024',
  },
];

export const writing = [
  {
    title: 'Using Claude to extract structured data from messy healthcare PDFs',
    note: 'A walkthrough of the prompting + validation pattern that got us to 95%+ field accuracy at scale.',
    href: '#',
  },
  {
    title: 'When to reach for Athena vs. Redshift vs. Spark on EMR',
    note: 'A practical decision tree built from migrating a real workload across all three.',
    href: '#',
  },
];

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'certifications', label: 'Certs' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];
