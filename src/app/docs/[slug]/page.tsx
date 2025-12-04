import { DOCS } from '@/lib/docs-config';
import DocClient from './doc-client';

export function generateStaticParams() {
  return DOCS.map((doc) => ({
    slug: doc.fileName,
  }));
}

export default function Page() {
  return <DocClient />;
}
