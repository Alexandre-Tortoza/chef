import fs from "fs";
import path from "path";

type Files = "llm.md" | "general.md";

export function logger(log: string, file?: Files): void {
  const logPath = path.join(`${process.cwd()}/logs`, file || "general.md");

  const timeStamp = new Date().toISOString();
  const line = `
--- 

# ${timeStamp}

\`\`\`
${JSON.stringify(log)}
\`\`\`
  `;

  fs.appendFile(logPath, line, (error) => {
    if (error) console.log("Erro ao salvar o LOG");
  });
}
