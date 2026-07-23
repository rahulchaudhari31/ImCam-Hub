import {
  LayoutDashboard,
  ShieldCheck,
  Upload,
  Receipt,
  BarChart3,
  UserCheck,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import FeaturePageTemplate from '../components/FeaturePageTemplate';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Multi-Candidate Dashboard',
    description:
      'Monitor every sponsored employee\'s immigration status on a single dashboard. Filter by case type, stage, office, or urgency — see the full picture at a glance.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Tracking',
    description:
      'Automated compliance monitoring across your entire workforce. Get alerts for expiring work permits, pending renewals, and upcoming regulatory deadlines before they become issues.',
  },
  {
    icon: Upload,
    title: 'Bulk Document Submission',
    description:
      'Upload documents for multiple candidates in a single batch. The system validates each file, routes them to the correct case, and notifies the assigned caseworker automatically.',
  },
  {
    icon: Receipt,
    title: 'Invoicing Overview',
    description:
      'View all invoices across your sponsored employees in one place. Track costs per case, per department, or per candidate — with full payment history and outstanding balance visibility.',
  },
  {
    icon: BarChart3,
    title: 'Reporting & Exports',
    description:
      'Generate workforce immigration reports for HR, finance, and leadership. Export to CSV or PDF with filters for case type, status, cost, and timeline.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Account Manager View',
    description:
      'Your assigned ImCam Hub account manager has a shared view into your portfolio — enabling proactive support, quarterly reviews, and strategic guidance on your immigration program.',
  },
];

const faqs = [
  {
    question: 'Can we track immigration status for employees across different countries?',
    answer:
      'Yes. The multi-candidate dashboard supports multi-jurisdiction tracking. Whether your employees are applying for Canadian work permits, US H-1B visas, or UK skilled worker visas, everything is visible in one unified view with jurisdiction-specific compliance alerts.',
  },
  {
    question: 'How does bulk document submission work?',
    answer:
      'From the Client Portal, you can select multiple candidates and upload documents in batch. Each file is validated (format, size, expiry), automatically routed to the correct case file, and the assigned caseworker is notified. You\'ll see a real-time status for each uploaded document.',
  },
  {
    question: 'Can different departments see different sets of candidates?',
    answer:
      'Yes. Role-based access can be configured to scope visibility by department, office location, or cost center. A marketing department lead, for example, would only see candidates sponsored by their department.',
  },
];

export default function FeatureClient() {
  usePageMeta(
    'Client Portal — ImCam Hub',
    'Enterprise-grade immigration oversight for sponsoring employers with compliance tracking, bulk operations, and multi-candidate dashboards.'
  );

  return (
    <FeaturePageTemplate
      title="Client Portal"
      roleName="Client / Business"
      bannerText="Built for Sponsoring Employers"
      bannerSubline="Enterprise-grade visibility into your sponsored workforce — compliance tracking, bulk operations, and reporting across every active case."
      bannerColor="bg-navy"
      introHeading="Immigration oversight at enterprise scale."
      introText={[
        'Sponsoring employees for immigration status is a significant operational commitment. You need to track dozens or hundreds of cases simultaneously, ensure compliance across jurisdictions, and keep your finance and HR teams informed.',
        'The Client Portal gives sponsoring employers a centralized command center for their entire immigration program. From multi-candidate dashboards to bulk document submission and compliance alerts, every tool is built for scale.',
      ]}
      introImageLabel="Client Portal Preview"
      introReverse
      features={features}
      faqs={faqs}
    />
  );
}
