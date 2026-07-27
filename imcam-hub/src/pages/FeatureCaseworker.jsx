import {
  ClipboardList,
  FileCheck,
  Clock,
  PenTool,
  MessageSquare,
  BarChart3,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import FeaturePageTemplate from '../components/FeaturePageTemplate';

const features = [
  {
    icon: ClipboardList,
    title: 'Matter & Task Management',
    description:
      'Organize cases into matters with nested tasks, sub-checklists, and dependencies — drag-and-drop prioritization keeps your workload visible and under control.',
  },
  {
    icon: FileCheck,
    title: 'Document Checklist Automation',
    description:
      'Checklists auto-generate based on case type, jurisdiction, and filing stage. No more guessing what documents are missing — the system knows.',
  },
  {
    icon: Clock,
    title: 'Deadline & Key-Date Tracking',
    description:
      'Every filing deadline, interview date, and renewal window is tracked visually on a timeline with automated reminders at 30, 14, 7, and 1 day(s) out.',
  },
  {
    icon: PenTool,
    title: 'Smart Drafting',
    description:
      'Generate first drafts of cover letters, submission packages, and client correspondence using case context and pre-approved templates — edit and send in minutes.',
  },
  {
    icon: MessageSquare,
    title: 'Client Communication Log',
    description:
      'Every email, call note, and message is logged against the case file. No more searching through inboxes — the full history is one click away.',
  },
  {
    icon: BarChart3,
    title: 'Workload Balancing',
    description:
      'See each caseworker\'s active matters, capacity, and upcoming deadlines at a glance — reassign cases with one click to keep the team balanced.',
  },
];

const faqs = [
  {
    question: 'How does the document checklist automation work?',
    answer:
      'When a caseworker creates a new matter, the system automatically generates a checklist based on the case type (e.g., LMIA, Express Entry, Work Permit), the jurisdiction, and the current filing stage. Checklists update dynamically as the case progresses.',
  },
  {
    question: 'Can I customize the drafting templates?',
    answer:
      'Absolutely. You can create, edit, and version your own templates. The system drafts using your firm\'s language and tone, pulling in case-specific data automatically. Every draft is editable before sending.',
  },
  {
    question: 'Does workload balancing work across offices?',
    answer:
      'Yes. If your firm has multiple offices, the workload view can be scoped to a single location or show a firm-wide view. You can reassign matters across offices with appropriate permission controls.',
  },
];

export default function FeatureCaseworker() {
  usePageMeta(
    'Caseworker Portal — ImCam Hub',
    'Streamlined case management with automated workflows, automated checklists, and deadline tracking for immigration caseworkers.'
  );

  return (
    <FeaturePageTemplate
      title="Caseworker Portal"
      roleName="Caseworker"
      bannerText="Built for Caseworkers"
      bannerSubline="Manage your matters faster with automated workflows, automated checklists, and deadline tracking that never lets anything slip."
      bannerColor="bg-teal"
      introHeading="Work smarter on every matter."
      introText={[
        'Caseworkers juggle dozens of active matters at any given time, each with unique deadlines, document requirements, and client expectations. The margin for error is zero.',
        'The Caseworker Portal is designed around your actual workflow — from matter intake to final filing. Automate repetitive steps, handle first drafts efficiently, and never miss a deadline with intelligent tracking built into every case.',
      ]}
      introImageLabel="Caseworker Portal Preview"
      introReverse
      features={features}
      faqs={faqs}
    />
  );
}
