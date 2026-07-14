import React from 'react';
import CaseStudy from './CaseStudy';

const sample = [
  {
    title: 'Observability Platform',
    subtitle: 'Designing a unified telemetry pipeline',
    role: 'Lead DevOps Engineer',
    bullets: [
      'Built vendor-agnostic telemetry ingest with OpenTelemetry',
      'Migrated 120 services to centralized metrics and traces',
      'Reduced incident MTTR by 43%'
    ],
    outcome: 'Delivered a reliable observability platform used by SREs and developers for faster incident resolution.'
  },
  {
    title: 'CI/CD Transformation',
    subtitle: 'From manual deploys to automated pipelines',
    role: 'Platform Engineer',
    bullets: [
      'Standardized pipelines with reusable templates',
      'Introduced canary and progressive delivery',
      'Reduced failed deploys by 68%'
    ],
    outcome: 'Shifted the org to continuous delivery with measurable reliability improvements.'
  },
  {
    title: 'Cloud Cost Optimization',
    subtitle: 'Reducing waste across multi-cloud accounts',
    role: 'Cloud Engineer',
    bullets: [
      'Implemented rightsizing and reservation strategies',
      'Automated idle-resource detection and shutdown',
      'Saved 31% month-over-month on cloud spend'
    ],
    outcome: 'Delivered sustained cost savings while preserving performance.'
  }
];

export default function CaseStudies() {
  return (
    <div id="case-studies">
      {sample.map((s) => (
        <CaseStudy key={s.title} {...s} />
      ))}
    </div>
  );
}
