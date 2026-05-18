export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  tagline: string;
  about: string[];
  now: string[];
};

export type SkillGroup = {
  heading: string;
  icon: 'database' | 'workflow' | 'cloud' | 'chart' | 'code' | 'shield';
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  bullets: string[];
};

export type Project = {
  slug: string;
  title: string;
  pitch: string;
  problem: string;
  approach: string[];
  stack: string[];
  metrics: string[];
  diagram: string;
  github: string;
  dashboard: string;
  accent: 'cyan' | 'violet' | 'green' | 'amber' | 'pink';
};

export type Cert = {
  name: string;
  issuer: string;
  year: string;
};

export type Education = {
  degree: string;
  school: string;
  detail: string;
};

export type Writing = {
  title: string;
  blurb: string;
  publication: string;
  date: string;
  url: string;
};

export type Dashboard = {
  title: string;
  context: string;
  kind: 'bars' | 'line' | 'heatmap' | 'sankey';
  metric: string;
  metricLabel: string;
};

export const profile: Profile = {
  name: 'Anjali Para',
  role: 'Data Engineer · AWS Solutions Architect',
  location: 'Seattle, WA',
  email: 'anjalipara0909@gmail.com',
  phone: '832-525-6711',
  github: 'https://github.com/apriya257',
  linkedin: 'https://www.linkedin.com/in/anjalipara',
  resumeUrl: '/resume.pdf',
  tagline:
    'I build AWS-native data pipelines and BI products that turn messy, multi-source data into reliable, decision-ready datasets — increasingly with GenAI in the loop.',
  about: [
    "I’m a Data Engineer with 5 years across AWS data platforms and AI/ML workflows. AWS Certified Solutions Architect — Professional and AWS Certified AI Practitioner.",
    "My specialty is consolidating fragmented, multi-source data into reliable analytics-ready datasets — and lately, weaving Claude and other GenAI tools into pipelines to extract structure from messy PDFs, forms, and free text at production scale.",
    "I work end-to-end: ingestion (S3, Glue, Lambda, Kafka, Kinesis) → modeling (Redshift, DynamoDB, Athena) → BI (QuickSight, Tableau) → reliability (CloudWatch, IAM, automated validation). Most of my work is in healthcare and finance — domains where accuracy isn’t optional.",
  ],
  now: [
    'Shipping GenAI-powered invoice extraction with Claude + Glue + Redshift at ABA Centers',
    'Building Amazon Lex chatbots over data lakes for conversational reporting',
    'Tinkering with SageMaker for automated data-quality anomaly detection',
    'Reading: The Data Engineering Cookbook + AWS Well-Architected Data Analytics Lens',
  ],
};

export const skills: SkillGroup[] = [
  {
    heading: 'AI & Machine Learning',
    icon: 'workflow',
    items: [
      'Generative AI (Anthropic Claude)',
      'Prompt engineering',
      'LLM-based data extraction',
      'Amazon SageMaker',
      'Amazon Comprehend',
      'Amazon Lex',
      'Predictive modeling',
      'NLP workflows',
      'Anomaly detection',
    ],
  },
  {
    heading: 'Programming & Querying',
    icon: 'code',
    items: ['Python', 'Pandas', 'NumPy', 'SQL (advanced — Redshift, Athena, DynamoDB)', 'Shell scripting'],
  },
  {
    heading: 'AWS Cloud & Data Platforms',
    icon: 'cloud',
    items: [
      'S3',
      'Glue',
      'Lambda',
      'EMR',
      'Redshift',
      'Athena',
      'DynamoDB',
      'SageMaker',
      'Lex',
      'Comprehend',
      'QuickSight',
      'CloudWatch',
      'SNS',
      'IAM',
      'Glue Catalog',
      'Data Lakes',
    ],
  },
  {
    heading: 'Data Engineering',
    icon: 'database',
    items: [
      'ETL / ELT pipeline design',
      'Apache Spark',
      'Apache Kafka',
      'Real-time & batch processing',
      'Dimensional modeling',
      'Indexing & partitioning',
      'Data warehousing',
      'Data lake architecture',
      'Pipeline monitoring & reliability',
    ],
  },
  {
    heading: 'BI & Visualization',
    icon: 'chart',
    items: [
      'Amazon QuickSight',
      'Tableau',
      'Executive / financial / operational dashboards',
      'Self-service analytics enablement',
    ],
  },
  {
    heading: 'Data Quality & Governance',
    icon: 'shield',
    items: [
      'Automated validation & reconciliation',
      'Anomaly detection frameworks',
      'Healthcare regulatory compliance',
      'IAM & encryption',
      'Secure data handling',
    ],
  },
];

export const experience: Experience[] = [
  {
    company: 'KGate Technologies (Client: ABA Centers)',
    role: 'Data Engineer II',
    period: 'Oct 2025 — Present',
    location: 'Seattle, WA',
    stack: ['AWS', 'S3', 'Glue', 'Lambda', 'Redshift', 'QuickSight', 'Claude', 'Python'],
    bullets: [
      'Architected an end-to-end data pipeline on AWS (S3, Glue, Lambda) to ingest, extract, and process 50K+ healthcare billing invoices at scale, integrating Claude and other GenAI tools to convert unstructured PDF records into normalized, analytics-ready datasets.',
      'Designed prompt-based extraction workflows using Claude to capture charge codes, service descriptions, payer identifiers, billing dates, and dollar amounts from heterogeneous invoice layouts — increasing extraction throughput by ~10x and reducing per-batch processing time from days to hours.',
      'Built automated validation and reconciliation logic to flag low-confidence extractions, detect duplicates, cross-check totals, and verify field-level accuracy against source documents — achieving 95%+ field-level extraction accuracy and cutting downstream data-quality incidents by ~60%.',
      'Modeled extracted billing data into a dimensional schema in Amazon Redshift covering payers, procedures, providers, and time periods — enabling consistent definitions and self-service SQL access and improving downstream query performance by 45% for finance and operations analytics teams.',
      'Delivered financial insights through Amazon QuickSight dashboards covering revenue trends, payer performance, reimbursement variance, and pricing benchmarks across 20+ payer relationships — surfacing discrepancies that informed contract negotiations and revenue cycle optimization.',
      'Established a self-sustaining mechanism with scheduled refreshes, monitoring, and templated configuration that allowed finance stakeholders to onboard new invoice formats independently — reducing recurring engineering support by ~70% post-handoff.',
    ],
  },
  {
    company: 'Populus Group (Client: Amazon)',
    role: 'Data Analyst III',
    period: 'May 2024 — Oct 2025',
    location: 'Seattle, WA',
    stack: ['AWS', 'Glue', 'S3', 'Lex', 'SageMaker', 'Comprehend', 'Redshift', 'Athena', 'QuickSight'],
    bullets: [
      'Built an internal data validation service combining Amazon Lex chatbots with AWS data infrastructure, enabling business users to reconcile reporting data against multiple data lakes through a conversational interface.',
      'Designed AWS Glue and Data Pipeline workflows that merged structured and semi-structured data from heterogeneous data lakes into a unified validation layer in S3, with embedded quality logic that surfaced upstream inconsistencies before they reached reporting.',
      'Leveraged Amazon SageMaker and Comprehend to classify data quality issues, detect anomalies, and prioritize records for review — automating validation tasks that were previously handled manually.',
      'Built QuickSight dashboards on Redshift and Athena to surface validation outcomes, data lake discrepancies, and reporting health metrics — reducing manual data query time by ~30% and strengthening leadership confidence in primary reporting sources.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Data Engineer',
    period: 'Nov 2019 — Jul 2022',
    location: 'Chennai, India',
    stack: ['AWS', 'EMR', 'Glue', 'Lambda', 'Kafka', 'Spark', 'Redshift', 'DynamoDB', 'Athena', 'CloudWatch'],
    bullets: [
      'Engineered end-to-end data pipelines on AWS (S3, EMR, Glue, Lambda) integrated with Kafka and Spark for real-time ingestion, transformation, and analysis — processing 100M+ events per day and reducing end-to-end data latency by 35% across critical analytics workflows.',
      'Modeled and optimized data retrieval in Amazon Redshift and DynamoDB through indexing, partitioning, and query tuning — reducing query execution time by 40% and improving data availability for downstream BI and analytics teams.',
      'Led the migration of legacy ETL workflows to a modern cloud architecture using AWS Glue, Athena, and Lambda — improving ETL processing efficiency by 22% and reducing operational costs by 15%.',
      'Developed a real-time monitoring solution using CloudWatch and SNS to proactively detect and resolve pipeline failures, reducing downtime by 25% and strengthening overall reliability of the data ecosystem.',
      'Streamlined data discovery and governance through AWS Data Lakes and Glue Catalog while implementing encryption and IAM-based security protocols, ensuring compliance and safeguarding sensitive data across business domains.',
    ],
  },
  {
    company: 'Brain O Vision',
    role: 'Data Analyst',
    period: 'Aug 2018 — Oct 2019',
    location: 'Hyderabad, India',
    stack: ['Tableau', 'AWS', 'Lambda', 'DynamoDB', 'S3', 'Python'],
    bullets: [
      'Built interactive dashboards in Tableau to surface operational and clinical metrics for healthcare teams, replacing manual reporting workflows and shortening turnaround on recurring business reviews.',
      'Automated data collection and validation workflows using AWS Lambda and DynamoDB, reducing manual effort by ~20% and improving consistency across multiple healthcare datasets.',
      'Built ETL workflows with AWS S3, Lambda, and Python-based transformations to automate data ingestion from diverse healthcare sources, replacing recurring manual extracts and improving the reliability of downstream reporting.',
      'Partnered with analysts, engineers, and operations teams to implement data quality checks and governance practices aligned with healthcare regulatory standards — supporting compliance reviews and reducing recurring data integrity issues.',
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'covid-surveillance',
    title: 'COVID-19 Global Surveillance Dashboard',
    pitch:
      'Daily-refreshed worldwide case / death / vaccination tracker with country and US-county drill-downs, built on an AWS-native stack.',
    problem:
      'Public COVID dashboards diverged from official sources within hours because most pulled CSVs directly without contracts or testing. I wanted a single governed mart that downstream BI tools could trust — refreshed nightly with zero manual intervention.',
    approach: [
      'Lambda-triggered ingestion from JHU CSSE, WHO, OWID, and CDC into S3 raw, partitioned by date for idempotent reruns.',
      'AWS Glue ETL jobs normalize country / county geography and produce incremental loads into Redshift fact + dim tables.',
      'Great Expectations–style validation in Glue blocks downstream loads on schema drift or impossible deltas.',
      'QuickSight dashboards with geo heatmap, 7-day rolling avg, and vaccine-coverage panels — same governed marts feed Tableau for partner orgs.',
    ],
    stack: ['AWS Lambda', 'AWS Glue', 'S3', 'Redshift', 'QuickSight', 'Tableau', 'Python'],
    metrics: [
      'Cut publish latency from ~4 hours to 25 minutes after nightly source publishes.',
      'Caught 14 upstream schema drifts in the first 90 days that would have broken dashboards.',
      'Served 1.1M dashboard sessions / month at p95 < 800ms.',
    ],
    diagram: `flowchart LR
  W[JHU + WHO + OWID + CDC] --> L[Lambda fetch]
  L --> S3[(S3 raw)]
  S3 --> G[Glue ETL]
  G --> RS[(Redshift marts)]
  RS --> QS[QuickSight]
  RS --> TAB[Tableau]`,
    github: 'https://github.com/apriya257/covid-surveillance',
    dashboard: 'https://apriya257.github.io/anjali/projects/covid-surveillance',
    accent: 'cyan',
  },
  {
    slug: 'hantavirus-tracking',
    title: 'Hantavirus Outbreak Tracking Dashboard',
    pitch:
      'Geospatial pipeline tracking rodent-borne outbreak signals against environmental covariates, refreshed daily on AWS.',
    problem:
      'Public-health teams needed a spatial view of hantavirus signals correlated with land use and humidity. Data lived in PDFs, federal APIs, and a county portal — none of which agreed on geography.',
    approach: [
      'Lambda + Python scrapers + API connectors land raw payloads in S3, organized by source and pull date.',
      'AWS Glue jobs normalize geometries and build a canonical county-level fact table joined to ACS + NOAA daily summaries.',
      'GeoPandas builds H3-indexed choropleths nightly, stored as compact materialized artifacts in S3 + Athena.',
      'QuickSight renders the dashboard with choropleth + time-series + climate-correlation panels; embeddable per-county widgets for partners.',
    ],
    stack: ['AWS Lambda', 'AWS Glue', 'S3', 'Athena', 'GeoPandas', 'H3', 'QuickSight'],
    metrics: [
      'Reduced 4-source harmonization from a weekly manual reconcile to nightly automated.',
      'Surfaced a previously-missed regional cluster within 48h of signal threshold being crossed.',
      'Adopted by 6 county health offices for situational awareness reporting.',
    ],
    diagram: `flowchart LR
  CDC[CDC + State feeds] --> L[Lambda + Python]
  NOAA[NOAA climate] --> L
  ACS[Census ACS] --> L
  L --> S3[(S3 raw)]
  S3 --> G[Glue + GeoPandas + H3]
  G --> ATH[Athena]
  ATH --> QS[QuickSight]`,
    github: 'https://github.com/apriya257/hantavirus-tracking',
    dashboard: 'https://apriya257.github.io/anjali/projects/hantavirus-tracking',
    accent: 'green',
  },
  {
    slug: 'flight-tracker',
    title: 'Flight Path & Delay Status Tracker',
    pitch:
      'Real-time flight position + delay enrichment pipeline driving a live web map with sub-second updates.',
    problem:
      'A travel-data side project wanted live flight positions enriched with delay context. The bottleneck was joining a high-rate position stream with slower-changing airline + airport reference data without blowing up latency.',
    approach: [
      'OpenSky position stream lands in Kinesis; reference data (FAA, airline ops) maintained as Lambda-refreshed lookup tables in DynamoDB.',
      'Lambda + Kinesis Data Analytics perform interval joins + tumbling-window delay aggregation, writing both to Redshift (cold) and DynamoDB (hot).',
      'Next.js + Mapbox client polls DynamoDB at 2Hz; falls back to Redshift for historical replays.',
      'Schema registry + Avro contracts gate any change to the position payload.',
    ],
    stack: ['OpenSky API', 'Kinesis', 'Lambda', 'DynamoDB', 'Redshift', 'Next.js', 'Mapbox'],
    metrics: [
      'End-to-end latency from position event → map render: p95 1.4s.',
      'Sustained 30K events / min with backpressure-free operation for 30 days.',
      'Cut historical replay query time from minutes to ~3s using Redshift sort keys.',
    ],
    diagram: `flowchart LR
  OS[OpenSky API] --> KIN[(Kinesis)]
  REF[FAA + airline ref] --> DDB[(DynamoDB ref)]
  KIN --> L[Lambda interval join + window]
  DDB --> L
  L --> RS[(Redshift cold)]
  L --> HOT[(DynamoDB hot)]
  HOT --> APP[Next.js + Mapbox]
  RS --> APP`,
    github: 'https://github.com/apriya257/flight-tracker',
    dashboard: 'https://apriya257.github.io/anjali/projects/flight-tracker',
    accent: 'violet',
  },
  {
    slug: 'nyc-taxi-lakehouse',
    title: 'NYC Taxi Trip Lakehouse on AWS',
    pitch:
      'An end-to-end AWS lakehouse over 8 years of NYC TLC data, with EMR Spark, Glue Catalog, Athena, and QuickSight on top.',
    problem:
      'I wanted a non-trivial lakehouse playground that exercised partition layout, schema evolution, and cost control — and produced something useful at the end. NYC TLC data is large enough to hurt, public, and rich.',
    approach: [
      'Lambda orchestrates monthly ingestion to S3; EMR Spark writes Parquet partitioned by pickup_date with bucketing on pickup_location_id.',
      'AWS Glue Catalog registers everything so Athena, EMR, and Redshift Spectrum see the same tables.',
      'Curated bronze → silver → gold tables; gold has trip-level facts + zone-hour-day aggregates.',
      'Athena exposes the lakehouse to QuickSight; nightly compaction keeps the small-files problem in check.',
    ],
    stack: ['AWS Lambda', 'EMR', 'Spark', 'S3', 'Glue Catalog', 'Athena', 'QuickSight'],
    metrics: [
      'Compacted ~280GB of small files, dropped median scan time on the trip fact table from 14.2s to 1.9s.',
      'Athena p95 query latency under 4s for typical analyst questions.',
      '~70% lower storage + compute cost vs. an all-Redshift baseline.',
    ],
    diagram: `flowchart LR
  TLC[NYC TLC monthly] --> L[Lambda]
  L --> S3[(S3 raw)]
  S3 --> SP[EMR + Spark]
  SP --> CUR[(S3 curated + Glue Catalog)]
  CUR --> ATH[Athena]
  ATH --> QS[QuickSight]`,
    github: 'https://github.com/apriya257/nyc-taxi-lakehouse',
    dashboard: 'https://apriya257.github.io/anjali/projects/nyc-taxi-lakehouse',
    accent: 'amber',
  },
  {
    slug: 'crypto-streaming',
    title: 'Real-time Crypto Market Streaming Pipeline',
    pitch:
      'Sub-second VWAP, OHLCV, and order-book imbalance metrics streamed from exchanges to a live dashboard.',
    problem:
      'I wanted hands-on with stateful streaming — VWAP windowing, late-event handling, watermarking — on a domain where seconds matter and bad math is obvious.',
    approach: [
      'WebSocket consumers per exchange normalize ticks and publish to a unified Kafka topic.',
      'Flink jobs maintain keyed state per (symbol, exchange); compute 1m/5m/15m VWAP + imbalance with allowed lateness.',
      'Aggregates land in Redshift (historical) + a thin SSE bridge (live) feeding the in-browser dashboard.',
      'Backpressure-safe shutdown + savepoint-based redeploys to avoid losing window state.',
    ],
    stack: ['WebSocket', 'Kafka', 'Flink', 'Redshift', 'QuickSight', 'SSE'],
    metrics: [
      'Held p95 tick → metric latency under 750ms across 9 exchanges.',
      'Recovery from a forced TaskManager restart completed in 11s via savepoint replay.',
      'Detected an exchange-side timestamp regression via watermark gap alerting before it hit downstream.',
    ],
    diagram: `flowchart LR
  EX[Exchanges WS] --> N[Normalizer]
  N --> K[(Kafka)]
  K --> FL[Flink VWAP + imbalance]
  FL --> RS[(Redshift history)]
  FL --> SSE[SSE bridge]
  SSE --> APP[Live dashboard]`,
    github: 'https://github.com/apriya257/crypto-streaming',
    dashboard: 'https://apriya257.github.io/anjali/projects/crypto-streaming',
    accent: 'pink',
  },
  {
    slug: 'wildfire-air-quality',
    title: 'Wildfire & Air Quality Geospatial Dashboard',
    pitch:
      'H3-hex-indexed wildfire perimeters joined to AQ sensor data, refreshed every 30 minutes during fire season.',
    problem:
      'During wildfire season the West Coast generates lots of overlapping public data — fire perimeters, smoke plumes, AQI sensors — none of it spatially aligned. The goal was a single hex grid you can query.',
    approach: [
      'Lambda polls NIFC perimeters + PurpleAir + EPA AQS every 30 minutes; raw lands in S3.',
      'Glue jobs normalize geometries, then a Python UDF assigns H3 cells at resolutions 6 and 8.',
      'Joined hex-facts roll up to county-day grain for executive reporting; hex grain for tactical layers.',
      'QuickSight dashboard renders both the live hex map and a 7-day rolling AQI trend; SNS pushes active-fire alerts.',
    ],
    stack: ['AWS Lambda', 'AWS Glue', 'S3', 'Athena', 'H3', 'GeoPandas', 'QuickSight', 'SNS'],
    metrics: [
      'Replaced 6 incompatible source layers with a single H3 hex grain; reduced join logic 5x.',
      'Cut dashboard refresh latency in active-fire conditions from ~2h to under 35 minutes.',
      'Used by a county EOC during a Tier-2 incident; informed three voluntary evac advisories.',
    ],
    diagram: `flowchart LR
  NIFC[NIFC perimeters] --> L[Lambda]
  PA[PurpleAir] --> L
  EPA[EPA AQS] --> L
  L --> S3[(S3)]
  S3 --> G[Glue + H3 UDF + GeoPandas]
  G --> ATH[Athena]
  ATH --> QS[QuickSight]
  ATH --> SNS[SNS alerts]`,
    github: 'https://github.com/apriya257/wildfire-air-quality',
    dashboard: 'https://apriya257.github.io/anjali/projects/wildfire-air-quality',
    accent: 'amber',
  },
];

export const certs: Cert[] = [
  { name: 'AWS Certified Solutions Architect — Professional', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: '2024' },
];

export const education: Education[] = [
  {
    degree: 'M.S. Software Engineering',
    school: 'University of Houston — Clear Lake',
    detail: 'Houston, TX · GPA 3.50 · May 2024',
  },
];

export const writing: Writing[] = [
  {
    title: 'Using Claude to extract structured data from messy healthcare PDFs',
    blurb:
      'A walkthrough of the prompting + validation pattern that got us to 95%+ field-level accuracy on heterogeneous invoice layouts at scale.',
    publication: 'anjalipara.dev',
    date: 'Apr 2026',
    url: '#',
  },
  {
    title: 'When to reach for Athena vs. Redshift vs. EMR Spark',
    blurb:
      'A practical decision tree built from migrating real workloads across all three AWS analytics engines.',
    publication: 'anjalipara.dev',
    date: 'Jan 2026',
    url: '#',
  },
];

export const dashboards: Dashboard[] = [
  {
    title: 'Invoice extraction accuracy',
    context: 'field-level accuracy across 20+ payer formats — Claude + validation layer',
    kind: 'bars',
    metric: '95%+',
    metricLabel: 'field accuracy',
  },
  {
    title: 'Pipeline incidents over time',
    context: 'data quality incidents after the validation + reconciliation layer shipped',
    kind: 'line',
    metric: '−60%',
    metricLabel: 'DQ incidents',
  },
  {
    title: 'Streaming latency by symbol',
    context: 'tick → metric end-to-end p95, 1h rolling window',
    kind: 'heatmap',
    metric: '740ms',
    metricLabel: 'tick → metric p95',
  },
  {
    title: 'Payer mix → revenue flow',
    context: 'ABA Centers billing mart, payers → procedures → reimbursement',
    kind: 'sankey',
    metric: '20+',
    metricLabel: 'payer relationships',
  },
];
