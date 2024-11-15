const { spawnSync } = require('child_process');

function cloneRepo(repoUrl, folderName) {
  const cloneResult = spawnSync('git', ['clone', repoUrl, folderName], {
    stdio: 'inherit',
  });

  if (cloneResult.error) {
    throw new Error(`Failed to clone the repository: ${cloneResult.error.message}`);
  }

  console.log(`Repository cloned successfully to ${folderName}`);
}

const repoUrl = ''; // ඔයාගේ GitHub URL එක දාන්න
const folderName = ''; // ෆෝල්ඩරයේ නම දාන්න

cloneRepo(repoUrl, folderName);
