import path from "path";

import foobar from "@src/foobar";
import { ensureInstalledOnlySinglePackageVersion } from "@typegraphql/core";

ensureInstalledOnlySinglePackageVersion(
  path.resolve(__dirname, "../package.json"),
);

export { foobar };
