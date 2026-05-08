import { formatFiles, Tree } from '@nx/devkit';
import { componentGenerator } from '@nx/angular/generators';
import { SharedComponentGeneratorSchema } from './schema';

export async function sharedComponentGenerator(
  tree: Tree,
  options: SharedComponentGeneratorSchema,
) {
  await componentGenerator(tree, {
    path: `libs/shared/src/lib/components/${options.name}/${options.name}`,
    style: 'none',
    inlineStyle: true,
    inlineTemplate: true,
    standalone: true,
    changeDetection: 'OnPush',
    export: true,
    skipTests: true,
  });

  await formatFiles(tree);
}

export default sharedComponentGenerator;
