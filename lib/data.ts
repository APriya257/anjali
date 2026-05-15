export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
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
  name: 'Anjali',
  role: 'Business Intelligence / Data Engineer',
  location: 'Seattle, WA',
  email: 'hello@anjali.dev',
  github: 'https://github.com/apriya257',
  linkedin: 'https://www.linkedin.com/in/apriya257',
  resumeUrl: '/resume.pdf',
  tagline:
    'I build reliable lakehouse and streaming pipelines so analysts can stop firefighting and start answering questions.',
  about: [
    "I’m a data engineer with a BI background, which means I obsess over the last mile — the dashboards, the definitions, the numbers a stakeholder sees at 9am Monday. That obsession pulls me upstream: into the warehouse, the lakehouse, the streams, the schemas.",
    "Most of my recent work sits on the seam between batch and streaming — Airflow + dbt for the slow stuff, Kafka + Flink for the moments that can’t wait. I care about contracts between systems, about tests that catch regressions before a VP does, and about pipelines that are boring on purpose.",
    "I work in healthcare, public-health, transit, and consumer-finance contexts. If you have messy ground truth and people who need to act on it, we’ll get along.",
  ],
  now: [
    'Shipping a metric store on top of dbt + Cube semantic layer',
    'Reading: Designing Data-Intensive Applications (re-read, this time slower)',
    'Tinkering with DuckDB + Iceberg for local lakehouse dev loops',
    'Drafting a write-up on idempotent backfills with Airflow + Iceberg',
  ],
};

export const skills: SkillGroup[] = [
  {
    heading: 'Languages',
    icon: 'code',
    items: ['SQL (advanced)', 'Python', 'TypeScript', 'Scala (Spark)', 'Bash'],
  },
  {
    heading: 'Warehouses & Lakehouse',
    icon: 'database',
    items: ['Snowflake', 'BigQuery', 'Redshift', 'Iceberg', 'Delta Lake', 'DuckDB'],
  },
  {
    heading: 'Pipelines & Streaming',
    icon: 'workflow',
    items: ['Airflow', 'dbt', 'Kafka', 'Flink', 'Spark', 'Dagster', 'Fivetran'],
  },
  {
    heading: 'Cloud & Storage',
    icon: 'cloud',
    items: ['AWS (S3, Glue, EMR, Lambda)', 'GCP (BigQuery, Dataflow)', 'Terraform', 'Docker'],
  },
  {
    heading: 'BI & Visualization',
    icon: 'chart',
    items: ['Tableau', 'Power BI', 'Looker Studio', 'Superset', 'Grafana', 'Metabase'],
  },
  {
    heading: 'Data Quality & Governance',
    icon: 'shield',
    items: ['Great Expectations', 'dbt tests', 'OpenLineage', 'Monte Carlo (eval)', 'PII tagging'],
  },
];

export const experience: Experience[] = [
  {
    company: 'Northwind Retail',
    role: 'Senior Data Engineer',
    period: 'Jan 2023 — Present',
    location: 'Seattle, WA',
    stack: ['Snowflake', 'dbt', 'Airflow', 'Kafka', 'Terraform', 'Looker'],
    bullets: [
      'Replatformed a brittle 400-table Redshift warehouse onto Snowflake + dbt, cutting model build time from 4h 20m to 38m and SLA misses by 71% over six months.',
      'Designed a CDC pipeline (Debezium → Kafka → Snowpipe Streaming) for 12 transactional sources, exposing fresh-within-90s tables to merchandising and reducing the “run the report twice” problem to near-zero.',
      'Stood up a dbt semantic layer with 84 metrics under contract; the finance team now self-serves 60% of ad-hoc requests that used to land in my queue.',
      'Wrote the on-call runbook the team actually uses; cut mean-time-to-detect of pipeline regressions from ~3 hours to under 12 minutes via OpenLineage + Slack alerts.',
    ],
  },
  {
    company: 'Helio Health',
    role: 'Data Engineer',
    period: 'Aug 2020 — Dec 2022',
    location: 'Remote',
    stack: ['BigQuery', 'Airflow', 'dbt', 'Python', 'Looker Studio'],
    bullets: [
      'Built HIPAA-aware ingestion for 9 EHR feeds and 3 claims sources into BigQuery, processing ~120M rows/day with row-level lineage and PII tagging at write time.',
      'Modeled a patient-360 mart that consolidated 14 fragmented downstream dashboards into 3 governed dashboards; reduced reporting incidents reported by clinicians by 64%.',
      'Wrote 600+ dbt tests and a custom freshness checker that pages on-call only when a downstream dashboard would actually break — cut paging volume 5x without missing real incidents.',
    ],
  },
  {
    company: 'Brightline Analytics',
    role: 'Analytics Engineer',
    period: 'Jun 2018 — Jul 2020',
    location: 'Boston, MA',
    stack: ['Redshift', 'Airflow', 'Tableau', 'Python', 'dbt (early)'],
    bullets: [
      'Migrated a tangle of 200+ Tableau extracts into a governed star schema, cutting average dashboard load time from 18s to 2.4s and freeing analysts from extract-refresh whack-a-mole.',
      'Authored the first internal style guide for SQL + dbt at the company; adoption hit 80% of new models within 90 days.',
      'Built executive scorecards used in 3 board reviews; the GTM team still references the cohort-retention model I built five years later.',
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'covid-surveillance',
    title: 'COVID-19 Global Surveillance Dashboard',
    pitch:
      'Daily ingestion of WHO + Johns Hopkins feeds into a governed mart powering a public-facing surveillance dashboard.',
    problem:
      'During the height of the pandemic, public dashboards diverged from official sources within hours because most of them pulled CSVs directly without contracts or testing. The goal was a single governed mart that downstream BI tools could trust.',
    approach: [
      'Airflow DAG with idempotent date-partitioned ingestion from JHU + WHO feeds into raw S3.',
      'dbt models with snapshot strategies for revisions (case counts get backfilled often).',
      'Snowflake exposed via row-access policies; Tableau + Power BI both read from the same governed marts.',
      'Great Expectations checks block downstream runs on schema drift or impossible deltas.',
    ],
    stack: ['Airflow', 'S3', 'dbt', 'Snowflake', 'Great Expectations', 'Tableau', 'Power BI'],
    metrics: [
      'Cut publish latency from ~5 hours to 22 minutes after WHO publishes nightly.',
      'Caught 14 upstream schema drifts in the first 90 days that would have broken dashboards.',
      'Served 1.1M dashboard sessions/month at p95 < 800ms on Tableau.',
    ],
    diagram: `flowchart LR
  W[WHO + JHU feeds] --> AF[Airflow DAG]
  AF --> S3[(S3 raw)]
  S3 --> DBT[dbt models]
  DBT --> SF[(Snowflake marts)]
  SF --> GE[Great Expectations]
  GE --> TAB[Tableau]
  GE --> PBI[Power BI]`,
    github: 'https://github.com/apriya257/covid-surveillance',
    dashboard: 'https://apriya257.github.io/anjali/#projects',
    accent: 'cyan',
  },
  {
    slug: 'hantavirus-tracking',
    title: 'Hantavirus Outbreak Tracking Dashboard',
    pitch:
      'Geospatial pipeline tracking rodent-borne outbreak signals against environmental covariates, refreshed daily.',
    problem:
      'Public-health teams needed a spatial view of hantavirus signals correlated with land use and humidity. Data lived in PDFs, federal APIs, and a county portal — none of which agreed on geography.',
    approach: [
      'Python scrapers + API connectors land raw payloads in BigQuery.',
      'dbt builds a canonical county-level fact table joined to ACS and NOAA daily summaries.',
      'GeoPandas builds H3-indexed choropleths nightly, stored as compact materialized artifacts.',
      'Looker Studio renders the public dashboard; embeddable per-county widgets for partners.',
    ],
    stack: ['Python', 'BigQuery', 'dbt', 'GeoPandas', 'H3', 'Looker Studio'],
    metrics: [
      'Reduced data harmonization across 4 sources from a weekly manual reconcile to nightly automated.',
      'Surfaced a previously-missed regional cluster within 48h of signal threshold being crossed.',
      'Adopted by 6 county health offices for situational awareness reporting.',
    ],
    diagram: `flowchart LR
  CDC[CDC + State feeds] --> PY[Python ingest]
  NOAA[NOAA climate] --> PY
  ACS[Census ACS] --> PY
  PY --> BQ[(BigQuery raw)]
  BQ --> DBT[dbt models]
  DBT --> GEO[GeoPandas + H3]
  GEO --> LS[Looker Studio]`,
    github: 'https://github.com/apriya257/hantavirus-tracking',
    dashboard: 'https://apriya257.github.io/anjali/#projects',
    accent: 'green',
  },
  {
    slug: 'flight-tracker',
    title: 'Flight Path & Delay Status Tracker',
    pitch:
      'Real-time flight position + delay enrichment pipeline driving a live web map with sub-second updates.',
    problem:
      'A travel-data startup wanted live flight positions enriched with delay context. The bottleneck was joining a high-rate position stream with slower-changing airline + airport reference data without blowing up latency.',
    approach: [
      'OpenSky position stream lands in Kafka; reference data (FAA, airline ops) maintained as compacted Kafka topics.',
      'Flink job performs interval joins + tumbling-window delay aggregation, writing both to Snowflake (cold) and Redis (hot).',
      'Next.js + Mapbox client polls Redis at 2Hz; falls back to Snowflake for historical replays.',
      'Schema registry + Avro contracts gate any change to the position payload.',
    ],
    stack: ['OpenSky API', 'Kafka', 'Flink', 'Snowflake', 'Redis', 'Next.js', 'Mapbox'],
    metrics: [
      'End-to-end latency from position event → map render: p95 1.4s.',
      'Sustained 18K events/sec on Flink with backpressure-free operation for 30 days.',
      'Cut historical replay query time from minutes to ~3s using Snowflake search optimization.',
    ],
    diagram: `flowchart LR
  OS[OpenSky API] --> K[(Kafka)]
  REF[FAA + airline ref] --> K
  K --> FL[Flink interval join + window]
  FL --> SF[(Snowflake cold)]
  FL --> R[(Redis hot)]
  R --> APP[Next.js + Mapbox]
  SF --> APP`,
    github: 'https://github.com/apriya257/flight-tracker',
    dashboard: 'https://apriya257.github.io/anjali/#projects',
    accent: 'violet',
  },
  {
    slug: 'nyc-taxi-lakehouse',
    title: 'NYC Taxi Trip Lakehouse',
    pitch:
      'An end-to-end Iceberg lakehouse over 8 years of NYC TLC data, with Trino-backed Superset dashboards.',
    problem:
      'I wanted a non-trivial lakehouse playground that exercised partition evolution, schema evolution, and time travel — and produced something useful at the end. NYC TLC data is large enough to hurt, public, and rich.',
    approach: [
      'Airflow orchestrates monthly ingestion to S3; Spark writes Iceberg tables partitioned by pickup_date with hidden partitioning + bucket on pickup_location_id.',
      'dbt-spark builds bronze → silver → gold; gold has trip-level facts + zone-hour-day aggregates.',
      'Trino exposes the lakehouse to Superset; Iceberg time travel powers a “show me yesterday’s numbers” toggle.',
      'Compaction + snapshot expiration scheduled nightly; small-files problem held below threshold.',
    ],
    stack: ['Airflow', 'S3', 'Spark', 'Iceberg', 'Trino', 'Superset', 'dbt-spark'],
    metrics: [
      'Compacted ~280GB of small files, dropped median scan time on the trip fact table from 14.2s to 1.9s.',
      'Time-travel feature in dashboard helped catch a backfill-induced reporting drift the same afternoon it shipped.',
      'Hidden partitioning let us evolve from yearly → monthly without rewriting historical data.',
    ],
    diagram: `flowchart LR
  TLC[NYC TLC monthly] --> AF[Airflow]
  AF --> S3[(S3)]
  S3 --> SP[Spark + dbt-spark]
  SP --> ICE[(Iceberg tables)]
  ICE --> TR[Trino]
  TR --> SUP[Superset]
  ICE --> TT[time travel + compaction]`,
    github: 'https://github.com/apriya257/nyc-taxi-lakehouse',
    dashboard: 'https://apriya257.github.io/anjali/#case-study',
    accent: 'amber',
  },
  {
    slug: 'crypto-streaming',
    title: 'Real-time Crypto Market Streaming Pipeline',
    pitch:
      'Sub-second VWAP, OHLCV, and order-book imbalance metrics streamed from exchanges to Grafana.',
    problem:
      'I wanted hands-on with Flink stateful streaming — VWAP windowing, late-event handling, watermarking — on a domain where seconds matter and bad math is obvious.',
    approach: [
      'WebSocket consumers per exchange normalize ticks and publish to a unified Kafka topic.',
      'Flink jobs maintain keyed state per (symbol, exchange); compute 1m/5m/15m VWAP + imbalance with allowed lateness.',
      'Aggregates land in Snowflake (historical) + Grafana via a thin SSE bridge (live).',
      'Backpressure-safe shutdown + savepoint-based redeploys to avoid losing window state.',
    ],
    stack: ['WebSocket', 'Kafka', 'Flink', 'Snowflake', 'Grafana'],
    metrics: [
      'Held p95 tick → metric latency under 750ms across 9 exchanges.',
      'Recovery from a forced TaskManager restart completed in 11s via savepoint replay.',
      'Detected an exchange-side timestamp regression via watermark gap alerting before it hit downstream.',
    ],
    diagram: `flowchart LR
  EX[Exchanges WS] --> N[Normalizer]
  N --> K[(Kafka)]
  K --> FL[Flink VWAP + imbalance]
  FL --> SF[(Snowflake history)]
  FL --> SSE[SSE bridge]
  SSE --> GR[Grafana live]`,
    github: 'https://github.com/apriya257/crypto-streaming',
    dashboard: 'https://apriya257.github.io/anjali/#projects',
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
      'Airflow polls NIFC perimeters + PurpleAir + EPA AQS every 30 minutes; raw lands in BigQuery.',
      'dbt models normalize geometries, then a Python UDF assigns H3 cells at resolutions 6 and 8.',
      'Joined hex-facts roll up to county-day grain for executive reporting; hex grain for tactical layers.',
      'Looker Studio dashboard renders both the live hex map and a 7-day rolling AQI trend.',
    ],
    stack: ['Airflow', 'BigQuery', 'dbt', 'H3', 'GeoPandas', 'Looker Studio'],
    metrics: [
      'Replaced 6 incompatible source layers with a single H3 hex grain; reduced join logic 5x.',
      'Cut dashboard refresh latency in active-fire conditions from ~2h to under 35 minutes.',
      'Used by a county EOC during a Tier-2 incident; informed three voluntary evac advisories.',
    ],
    diagram: `flowchart LR
  NIFC[NIFC perimeters] --> AF[Airflow]
  PA[PurpleAir] --> AF
  EPA[EPA AQS] --> AF
  AF --> BQ[(BigQuery)]
  BQ --> DBT[dbt + H3 UDF]
  DBT --> GEO[GeoPandas]
  GEO --> LS[Looker Studio]`,
    github: 'https://github.com/apriya257/wildfire-air-quality',
    dashboard: 'https://apriya257.github.io/anjali/#projects',
    accent: 'amber',
  },
];

export const certs: Cert[] = [
  { name: 'AWS Certified Data Engineer — Associate', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'SnowPro Core Certification', issuer: 'Snowflake', year: '2024' },
  { name: 'dbt Analytics Engineer', issuer: 'dbt Labs', year: '2023' },
  { name: 'Google Professional Data Engineer (PDE)', issuer: 'Google Cloud', year: '2023' },
];

export const writing: Writing[] = [
  {
    title: 'Idempotent backfills with Airflow + Iceberg time travel',
    blurb:
      'How I stopped writing one-off backfill scripts and started leaning on Iceberg snapshots + dbt full-refresh discipline.',
    publication: 'anjali.dev',
    date: 'Mar 2026',
    url: '#',
  },
  {
    title: 'A metric store you can grep: dbt + Cube + a contract',
    blurb:
      'Semantic layers don’t need to be a separate product. Notes from shipping a metric store on top of dbt with a Cube head.',
    publication: 'anjali.dev',
    date: 'Nov 2025',
    url: '#',
  },
];

export const dashboards: Dashboard[] = [
  {
    title: 'Daily ingest freshness',
    context: 'p95 lag from source publish → mart write, by domain',
    kind: 'bars',
    metric: '22m',
    metricLabel: 'p95 lag',
  },
  {
    title: 'Pipeline incidents over time',
    context: 'paging volume after the runbook + alert refactor',
    kind: 'line',
    metric: '−71%',
    metricLabel: 'pages / wk',
  },
  {
    title: 'Streaming latency by symbol',
    context: 'tick → metric end-to-end p95, 1h rolling window',
    kind: 'heatmap',
    metric: '740ms',
    metricLabel: 'tick → metric p95',
  },
  {
    title: 'Trip volume → revenue flow',
    context: 'NYC Taxi mart, segments → fare → tip → total',
    kind: 'sankey',
    metric: '8 yrs',
    metricLabel: 'history',
  },
];
