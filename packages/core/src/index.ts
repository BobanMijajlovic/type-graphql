import path from "path";

import foo from "@src/foo";
import bar from "@src/bar";
import { ensureInstalledOnlySinglePackageVersion } from "@src/utils";

ensureInstalledOnlySinglePackageVersion(
  path.resolve(__dirname, "../package.json"),
);

export { foo, bar, ensureInstalledOnlySinglePackageVersion };
