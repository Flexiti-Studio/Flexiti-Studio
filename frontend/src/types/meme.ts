export type AiSuggestion = {
  title?: string;
  category?: string;
  tags?: string[];
  description?: string;
  confidence?: number;
  status: 'pending' | 'analyzed' | 'failed';
};

export type ReviewStatus =
  | 'uploaded'
  | 'analyzing'
  | 'analyzed'
  | 'approved'
  | 'rejected'
  | 'published';

export type MemeAssetType = {
  _id?: string;
  title: string;
  originalFileName: string;
  slug: string;
  storageKey: string;
  publicUrl: string;
  thumbnailUrl?: string;
  mimeType: string;
  sizeBytes: number;
  duration?: string;
  category: string;
  tags: string[];
  description?: string;
  downloads: number;
  featured: boolean;
  trending: boolean;
  visibility: 'public' | 'private';
  aiSuggestion: AiSuggestion;
  reviewStatus: ReviewStatus;
  createdAt?: string;
  updatedAt?: string;
};
