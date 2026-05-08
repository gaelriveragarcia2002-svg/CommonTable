import { formatFiles, Tree } from '@nx/devkit';
import { directiveGenerator } from '@nx/angular/generators';
import { SharedDirectiveGeneratorSchema } from './schema';

export async function sharedDirectiveGenerator(
  tree: Tree,
  options: SharedDirectiveGeneratorSchema,
) {
  await directiveGenerator(tree, {
    path: `libs/shared/src/lib/directives/${options.name}/${options.name}`,
    standalone: true,
    export: true,
    skipTests: true,
  });

  await formatFiles(tree);
}

export default sharedDirectiveGenerator;
