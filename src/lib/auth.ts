import { PieceAuth } from '@activepieces/pieces-framework';

export const pieceAuth = PieceAuth.SecretText({
  displayName: 'Ace Data Cloud API key',
  description: 'Use a key with Seedream access from https://platform.acedata.cloud/console/applications. Enter only the key, without Bearer.',
  required: true,
});
