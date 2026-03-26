import type { MemeAssetType } from '@/types/meme';

export type { MemeAssetType };

export type PipelineStats = {
  uploaded: number;
  analyzed: number;
  pending: number;
  published: number;
  failed: number;
};
