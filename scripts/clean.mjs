import {rm} from 'node:fs/promises';

await Promise.all(
  ['.next', 'out', 'build-tsc', 'tsconfig.tsbuildinfo'].map(path => rm(path, {force: true, recursive: true})),
);
