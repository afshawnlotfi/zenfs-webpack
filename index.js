import fs, { configure } from '@zenfs/core';
import { IndexedDB } from '@zenfs/dom';

(async function () {
    // Configure the IndexedDB mount
    await configure({
        mounts: {
            '/projects': IndexedDB,
        }
    });

    // Check if the file exists and write if it doesn't
    if (!fs.existsSync('/projects/test.txt')) {
        // Comment and uncomment this after first load, run npm run build to rebuild new bundle.js
        fs.writeFileSync('/projects/test.txt', 'This will persist across reloads!');
    }

    // Read and log the file contents
    const contents = fs.readFileSync('/projects/test.txt', 'utf-8');
    console.log(contents);
})();
