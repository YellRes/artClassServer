const dotEnv = require("dotenv");
const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const pathsDotenv = resolveApp(".env");

// 配置环境变量
dotEnv.config({ path: `${pathsDotenv}.development` });
