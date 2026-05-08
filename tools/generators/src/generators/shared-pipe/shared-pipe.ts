import { formatFiles, Tree } from '@nx/devkit';
import { pipeGenerator } from '@nx/angular/generators';
import { SharedPipeGeneratorSchema } from './schema';

export async function sharedPipeGenerator(
  tree: Tree,
  options: SharedPipeGeneratorSchema,
) {
  await pipeGenerator(tree, {
    path: `libs/shared/src/lib/pipes/${options.name}/${options.name}`,
    standalone: true,
    export: true,
    skipTests: true,
  });

  await formatFiles(tree);
}

export default sharedPipeGenerator;
