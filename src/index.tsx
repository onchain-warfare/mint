import { Button, Frog } from 'frog';
import { Box, Heading, VStack, vars } from './ui.js';
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';
// import { neynar } from 'frog/hubs'

export const app = new Frog({
  title: 'WarFrames',
  browserLocation: 'https://warframes.wtf/',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  ui: { vars },
}).frame('/', c => {
  return c.res({
    action: '/logon',
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="background"
        borderColor="white"
        borderWidth="6"
        padding="32"
      >
        <VStack>
          <Heading size="64">Shall We Play a Frame?</Heading>
        </VStack>
      </Box>
    ),
    intents: [
      <Button.Mint target="eip155:7777777:0x060f3edd18c47f59bd23d063bbeb9aa4a8fec6df:69420">
        Mint
      </Button.Mint>,

      // Base eip155:8453
      // Zora eip155:7777777
      // https://github.com/WalletConnect/blockchain-api/blob/master/SUPPORTED_CHAINS.md
    ],
  });
});

const isCloudflareWorker = typeof caches !== 'undefined';
if (isCloudflareWorker) {
  const manifest = await import('__STATIC_CONTENT_MANIFEST');
  const serveStaticOptions = { manifest, root: './' };
  app.use('/*', serveStatic(serveStaticOptions));
  devtools(app, { assetsPath: '/frog', serveStatic, serveStaticOptions });
} else {
  devtools(app, { serveStatic });
}

export default app;
