export const profile = {
  name: 'Anjali',
  role: 'Business Intelligence / Data Engineer',
  tagline:
    'I design data pipelines and BI products that turn messy sources into decisions people can trust.',
  location: 'Seattle, WA',
  email: 'hello@anjali.dev',
  resume: 'resume.pdf',
  socials: {
    github: 'https://github.com/apriya257',
    linkedin: 'https://www.linkedin.com/in/anjali',
    email: 'mailto:hello@anjali.dev',
  },
  now: 'Exploring Iceberg + Trino on EKS and DuckDB-at-the-edge for sub-second analytics.',
};

export const about = [
  "I'm a BI / Data Engineer with a soft spot for the moment a stakeholder stops emailing for numbers because the dashboard already answers them.",
  'I build end-to-end pipelines — ingestion, modeling, orchestration, BI — with an eye on cost, latency, and the humans on the other side of the chart.',
  'Comfortable across the modern data stack: Snowflake / BigQuery / Databricks, dbt, Airflow, Kafka + Flink, Spark, and Tableau / Power BI / Looker.',
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['SQL', 'Python', 'Scala', 'Bash'] },
  { label: 'Warehouse / Lakehouse', items: ['Snowflake', 'BigQuery', 'Redshift', 'Databricks', 'Iceberg'] },
  { label: 'Orchestration', items: ['Airflow', 'Dagster', 'Prefect'] },
  { label: 'Transform', items: ['dbt', 'Spark', 'Pandas'] },
  { label: 'Streaming', items: ['Kafka', 'Kinesis', 'Flink'] },
  { label: 'BI', items: ['Tableau', 'Power BI', 'Looker', 'Superset', 'QuickSight'] },
  { label: 'Cloud', items: ['AWS', 'GCP', 'Azure'] },
  { label: 'IaC / DevOps', items: ['Terraform', 'Docker', 'GitHub Actions', 'Kubernetes'] },
  { label: 'Data Quality', items: ['Great Expectations', 'Soda', 'dbt tests'] },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: 'Northwind Retail',
    role: 'Senior BI / Data Engineer',
    period: '2023 — Present',
    bullets: [
      'Cut nightly ETL runtime from 6h → 35m by re-modeling 40+ dbt models with incremental + clustered Snowflake tables.',
      'Saved ~$480k/yr in Snowflake credits by right-sizing warehouses, killing runaway queries, and migrating heavy joins to Iceberg + Trino.',
      'Owned the self-serve metrics layer powering 1.2k internal users across Finance, Ops, and Marketing.',
    ],
    stack: ['Snowflake', 'dbt', 'Airflow', 'Tableau', 'Iceberg', 'Trino'],
  },
  {
    company: 'Helio Health',
    role: 'Data Engineer',
    period: '2020 — 2023',
    bullets: [
      'Built a HIPAA-aligned ingestion framework consolidating 18 clinical sources into a unified BigQuery warehouse.',
      'Reduced data-quality incidents 70% by adding Great Expectations checks and Slack alerting into every Airflow DAG.',
      'Shipped a Looker explore that became the single source of truth for clinical-outcome reporting across 4 hospital networks.',
    ],
    stack: ['BigQuery', 'Airflow', 'dbt', 'Looker', 'GCP', 'Great Expectations'],
  },
  {
    company: 'Brightline Analytics',
    role: 'BI Developer',
    period: '2018 — 2020',
    bullets: [
      'Rebuilt 30+ legacy SSRS reports as Power BI dashboards with row-level security and incremental refresh.',
      'Authored the team\'s SQL style guide; mentored 4 junior analysts into independent dashboard owners.',
      'Automated weekly executive reporting with Python + Power Automate, replacing a 6-hour manual process.',
    ],
    stack: ['SQL Server', 'Power BI', 'Python', 'SSIS', 'DAX'],
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
    tags: ['Airflow', 'Python', 'Snowflake', 'dbt', 'Tableau', 'S3'],
    impact: [
      'Refreshed 200+ country feeds nightly across 4 public-health sources.',
      'Cut end-to-end refresh window from 4h → 25m via incremental dbt models.',
      'Geo heatmap + 7-day rolling avg + vaccine coverage panels.',
    ],
    diagram: `flowchart LR
  A[JHU CSSE / WHO / OWID / CDC] --> B(Airflow daily ingest)
  B --> C[(S3 raw)]
  C --> D[dbt staging]
  D --> E[(Snowflake marts)]
  E --> F[Tableau / Power BI]`,
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
    tags: ['Python', 'BigQuery', 'dbt', 'Looker Studio', 'GeoPandas', 'Cloud Functions'],
    impact: [
      'Unified 6 disparate public-health sources into one dimensional model.',
      'Flagged 3 regional case-count anomalies via statistical alerting.',
      'Choropleth + time-series + climate-correlation panels.',
    ],
    diagram: `flowchart LR
  A[CDC HPS / PAHO / NOAA / USGS] --> B(Python ingest)
  B --> C[(BigQuery staging)]
  C --> D[dbt transforms]
  D --> E[GeoPandas enrich]
  E --> F[Looker Studio]`,
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
    tags: ['Kafka', 'Flink', 'Snowflake', 'Redis', 'Mapbox', 'Python', 'Terraform'],
    impact: [
      'Ingested ~30k flight events / minute with <5s end-to-end latency.',
      'Surfaced delay-cascade insights across 400+ airports.',
      'Live map + carrier scorecards + airport congestion view.',
    ],
    diagram: `flowchart LR
  A[OpenSky API] --> B(Kafka: flights.positions)
  B --> C[Flink stateful agg]
  C --> D[(Snowflake)]
  C --> E[(Redis hot lookups)]
  D --> F[Next.js + Mapbox]
  E --> F`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live dashboard', href: '#' },
    ],
    accent: 'violet',
  },
  {
    slug: 'nyc-taxi-lakehouse',
    title: 'NYC Taxi Trip Lakehouse',
    pitch:
      'Multi-TB historical trip data on Iceberg + S3 with Spark batch jobs and Trino ad-hoc analytics.',
    tags: ['Spark', 'Iceberg', 'Trino', 'S3', 'Superset', 'Airflow'],
    impact: [
      'Processed 10+ years of trip data (~1.5B rows, ~3 TB) on Iceberg.',
      'Trino p95 query latency under 4s for typical analyst questions.',
      'Surge-pricing and fare-anomaly dashboards in Superset.',
    ],
    diagram: `flowchart LR
  A[NYC TLC public data] --> B(Airflow batch ingest)
  B --> C[(S3 raw)]
  C --> D[Spark transform]
  D --> E[(Iceberg tables)]
  E --> F[Trino]
  F --> G[Superset]`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Case study', href: '#case-study' },
    ],
    accent: 'amber',
  },
  {
    slug: 'crypto-streaming',
    title: 'Real-time Crypto Market Streaming Pipeline',
    pitch:
      'WebSocket feeds → Kafka → Flink (VWAP, volume spikes) → Snowflake + Grafana live monitoring.',
    tags: ['Kafka', 'Flink', 'Snowflake', 'Grafana', 'Python'],
    impact: [
      'Sub-second VWAP and volume-spike detection across 50+ trading pairs.',
      'Auto-recovery on exchange disconnects with exactly-once Kafka semantics.',
      'Grafana live boards + Snowflake historical analytics.',
    ],
    diagram: `flowchart LR
  A[Coinbase / Binance WS] --> B(Python producer)
  B --> C[Kafka: trades]
  C --> D[Flink: VWAP / spike]
  D --> E[(Snowflake)]
  D --> F[Grafana live]`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live dashboard', href: '#' },
    ],
    accent: 'pink',
  },
  {
    slug: 'wildfire-air-quality',
    title: 'Wildfire & Air Quality Geospatial Dashboard',
    pitch:
      'NASA FIRMS fire detections joined with OpenAQ air quality and NOAA weather into a daily risk map.',
    tags: ['Airflow', 'BigQuery', 'dbt', 'GeoPandas', 'Looker Studio'],
    impact: [
      'Joined 3 satellite + sensor + weather sources into a single risk model.',
      'Daily refresh with H3 hex-grid aggregation for fast geospatial joins.',
      'Trend dashboard + active-fire alerting layer.',
    ],
    diagram: `flowchart LR
  A[NASA FIRMS / OpenAQ / NOAA] --> B(Airflow)
  B --> C[(BigQuery staging)]
  C --> D[dbt + H3 hex grid]
  D --> E[GeoPandas risk model]
  E --> F[Looker Studio]`,
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live dashboard', href: '#' },
    ],
    accent: 'cyan',
  },
];

export const caseStudy = {
  projectSlug: 'nyc-taxi-lakehouse',
  title: 'Building a lakehouse for 1.5B taxi trips on a startup budget',
  problem:
    'Analysts needed ad-hoc access to a decade of NYC taxi trips, but loading it all into Snowflake would have cost 5x our monthly bill.',
  decisions: [
    'Land raw Parquet in S3, never duplicate into the warehouse.',
    'Use Apache Iceberg as the open table format — schema evolution + time travel without vendor lock-in.',
    'Spark on EMR for batch transforms (cheap, spot-friendly); Trino for interactive SQL.',
    'Expose the same Iceberg tables to Snowflake via external tables so existing BI keeps working.',
  ],
  results: [
    '~70% lower storage + compute cost vs. all-Snowflake baseline.',
    'p95 Trino query latency under 4 seconds for typical analyst questions.',
    'Time-travel queries unlocked back-fills that previously meant full reloads.',
  ],
};

export const dashboards = [
  {
    title: 'Executive KPI overview',
    note: 'Weekly revenue, retention, and CAC at a glance — Tableau.',
  },
  {
    title: 'Pipeline SLO board',
    note: 'Freshness + run-duration + failure-rate per DAG — Superset.',
  },
  {
    title: 'Cost & usage explorer',
    note: 'Snowflake credit burn by warehouse, query, and team — Power BI.',
  },
  {
    title: 'Geospatial outbreak map',
    note: 'Choropleth with time-slider — Looker Studio.',
  },
];

export type Cert = { title: string; issuer: string; year: string };

export const certifications: Cert[] = [
  { title: 'AWS Certified Data Engineer — Associate', issuer: 'Amazon Web Services', year: '2024' },
  { title: 'SnowPro Core', issuer: 'Snowflake', year: '2023' },
  { title: 'dbt Analytics Engineering', issuer: 'dbt Labs', year: '2023' },
  { title: 'Professional Data Engineer', issuer: 'Google Cloud', year: '2022' },
];

export const writing = [
  {
    title: 'Why we moved half of Snowflake to Iceberg (and what broke)',
    note: 'A retrospective on a six-month migration and what we wish we knew on day one.',
    href: '#',
  },
  {
    title: 'A practical guide to dbt incremental models that actually scale',
    note: 'Patterns, anti-patterns, and the merge strategy that finally stuck.',
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
