import {
  Shield,
  Activity,
  Upload,
  FileSignature,
  Bell,
  MessageSquare,
} from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import FeaturePageTemplate from '../components/FeaturePageTemplate';
import bannerImg from '../assets/images/features/Candidate_banner_.jpeg';
import introImg from '../assets/images/features/Candidate_dashboard.png';

const features = [
  {
    icon: Shield,
    title: 'Secure Client Portal',
    description:
      'A private, branded portal where candidates access their case information, upload documents, and communicate with their caseworker — all protected by end-to-end encryption.',
  },
  {
    icon: Activity,
    title: 'Real-Time Case Status Tracking',
    description:
      'Candidates see exactly where their case stands — from initial filing through review, interview, and decision — with a clear visual timeline and plain-language status updates.',
  },
  {
    icon: Upload,
    title: 'Document Upload',
    description:
      'Drag-and-drop document submission with instant validation. The system checks for correct format, file size, and naming conventions before the file even reaches the caseworker.',
  },
  {
    icon: FileSignature,
    title: 'E-Signature Requests',
    description:
      'Sign declarations, consent forms, and retainer agreements directly in the portal. E-signatures are legally binding and fully integrated into the case record.',
  },
  {
    icon: Bell,
    title: 'Key-Date Notifications',
    description:
      'Push notifications and email alerts for upcoming deadlines, document requests, and case milestones — candidates never have to wonder what comes next.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Messaging',
    description:
      'Secure in-app messaging with their caseworker. No more email threads or phone tag — candidates ask questions, share updates, and get responses in one threaded conversation.',
  },
];

const faqs = [
  {
    question: 'Is the candidate portal mobile-friendly?',
    answer:
      'Yes. The Candidate Portal is fully responsive and works on any device — phone, tablet, or desktop. Candidates can upload documents, check status, and message their caseworker from anywhere.',
  },
  {
    question: 'Can candidates see other applicants\' information?',
    answer:
      'No. Each candidate only sees their own case data. The portal is fully isolated — there is no way for one candidate to access another\'s information, documents, or communications.',
  },
  {
    question: 'How do e-signatures work?',
    answer:
      'When a caseworker sends a document for signature, the candidate receives a notification. They review the document in-portal and sign with a click. The signed document is automatically attached to the case file with a timestamp and audit trail.',
  },
];

export default function FeatureCandidate() {
  usePageMeta(
    'Candidate Portal — ImCam Hub',
    'Real-time immigration case tracking, secure document upload, e-signatures, and direct caseworker communication for applicants.'
  );

  return (
    <FeaturePageTemplate
      title="Candidate Portal"
      roleName="Candidate / Applicant"
      bannerText="Built for Candidates"
      bannerSubline="Track your immigration journey in real time, upload documents securely, and stay connected with your caseworker — all in one place."
      bannerColor="bg-navy"
      introHeading="Your immigration journey, transparent."
      introText={[
        'Applying for immigration status is stressful enough without the added anxiety of wondering where your case stands. Candidates deserve clarity, not radio silence.',
        'The Candidate Portal puts applicants in control with real-time case tracking, secure document submission, e-signatures, and direct messaging. Every milestone is visible, every deadline is clear, and every document is accounted for.',
      ]}
      introImageLabel="Candidate Portal Preview"
      bannerImage={bannerImg}
      introImage={introImg}
      features={features}
      faqs={faqs}
    />
  );
}
