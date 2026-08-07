import {
  LayoutDashboard,
  Users,
  CreditCard,
  FileCheck,
  ClipboardList,
  Building2,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import FeaturePageTemplate from '../components/FeaturePageTemplate';
import bannerImg from '../assets/images/features/Admin_banner.jpeg';
import introImg from '../assets/images/features/Admin_dashboard.png';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Firm-Wide Dashboard',
    description:
      'A bird\'s-eye view of every open case, team workload, revenue pipeline, and compliance status — updated in real time across your entire firm.',
  },
  {
    icon: Users,
    title: 'User & Permission Management',
    description:
      'Create roles, assign granular permissions, and control exactly what each team member can see and do — down to the case and document level.',
  },
  {
    icon: CreditCard,
    title: 'Billing Oversight',
    description:
      'Track billable hours, approve invoices, monitor outstanding balances, and generate revenue reports across matters and clients from one place.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Reporting',
    description:
      'Auto-generated compliance reports for IRCC, USCIS, and other jurisdictions — with audit-ready logs and one-click export for regulators.',
  },
  {
    icon: ClipboardList,
    title: 'Audit Trails',
    description:
      'Every action, edit, and approval is timestamped and attributed. Full transparency for internal reviews and external regulatory audits.',
  },
  {
    icon: Building2,
    title: 'Multi-Office Visibility',
    description:
      'Manage cases across multiple office locations with consolidated reporting, shared caseloads, and location-level performance dashboards.',
  },
];

const faqs = [
  {
    question: 'Can I control what each staff member can access?',
    answer:
      'Yes. ImCam Hub provides granular role-based access control (RBAC). You can define custom roles, restrict access by case type, office location, or client — and even limit document-level permissions for sensitive matters.',
  },
  {
    question: 'What kind of compliance reports are available?',
    answer:
      'The platform generates pre-built reports for IRCC, USCIS, and major immigration authorities. Reports include filing timelines, approval rates, pending cases, and full audit trails — exportable as PDF or CSV.',
  },
  {
    question: 'Does multi-office support include separate billing?',
    answer:
      'Yes. Each office can have its own billing rules, rate cards, and trust accounts while still feeding into a consolidated firm-wide financial dashboard.',
  },
];

export default function FeatureAdmin() {
  usePageMeta(
    'Admin Dashboard — ImCam Hub',
    'Complete oversight of immigration operations with real-time analytics, compliance monitoring, and team management from a single command center.'
  );

  return (
    <FeaturePageTemplate
      title="Admin Dashboard"
      roleName="Admin / Firm Owner"
      bannerText="Built for Firm Owners"
      bannerSubline="Complete command over your immigration practice — cases, team, compliance, and revenue — all in one dashboard."
      bannerColor="bg-navy"
      introHeading="Full visibility. Full control."
      introText={[
        'As a firm owner or administrator, you need to see everything at once — which cases are moving, which are stalled, where the bottlenecks are, and whether your team is on track.',
        'The Admin Dashboard gives you a real-time command center for your entire immigration practice. Manage users, configure workflows, monitor billing, and generate compliance reports without touching a spreadsheet.',
      ]}
      introImageLabel="Admin Dashboard Preview"
      bannerImage={bannerImg}
      introImage={introImg}
      features={features}
      faqs={faqs}
    />
  );
}
