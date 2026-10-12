import { createPiece } from '@activepieces/pieces-framework';
import { actions } from './lib/actions';
import { pieceAuth } from './lib/auth';

export const seedream = createPiece({
  displayName: "Seedream by Ace Data Cloud",
  description: "Use Ace Data Cloud Seedream APIs in Activepieces workflows.",
  logoUrl: 'https://cdn.acedata.cloud/assets/logo.png',
  authors: ['Ace Data Cloud'],
  minimumSupportedRelease: '0.92.2',
  auth: pieceAuth,
  actions,
  triggers: [],
});
