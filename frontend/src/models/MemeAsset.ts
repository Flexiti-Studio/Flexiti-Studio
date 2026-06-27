import { Schema, model, models } from 'mongoose';

const AiSuggestionSchema = new Schema(
  {
    title:       { type: String,  default: '' },
    category:    { type: String,  default: '' },
    tags:        { type: [String], default: [] },
    description: { type: String,  default: '' },
    confidence:  { type: Number,  default: 0 },
    status: {
      type:    String,
      enum:    ['pending', 'analyzed', 'failed'],
      default: 'pending',
    },
  },
  { _id: false }
);

const MemeAssetSchema = new Schema(
  {
    title:            { type: String,  required: true },
    originalFileName: { type: String,  required: true },
    slug:             { type: String,  required: true, unique: true, index: true },
    storageKey:       { type: String,  required: true },
    publicUrl:        { type: String,  required: true },
    thumbnailUrl:     { type: String,  default: '' },
    mimeType:         { type: String,  required: true },
    sizeBytes:        { type: Number,  required: true },
    duration:         { type: String,  default: '' },
    category:         { type: String,  default: 'Uncategorized', index: true },
    tags:             { type: [String], default: [] },
    description:      { type: String,  default: '' },
    downloads:        { type: Number,  default: 0 },
    featured:         { type: Boolean, default: false },
    trending:         { type: Boolean, default: false },
    visibility: {
      type:    String,
      enum:    ['public', 'private'],
      default: 'private',
    },
    aiSuggestion: {
      type:    AiSuggestionSchema,
      default: () => ({ status: 'pending' }),
    },
    reviewStatus: {
      type:    String,
      enum:    ['uploaded', 'analyzing', 'analyzed', 'approved', 'rejected', 'published'],
      default: 'uploaded',
      index:   true,
    },
  },
  { timestamps: true }
);

export const MemeAsset = models.MemeAsset || model('MemeAsset', MemeAssetSchema);
