// A provider model id as people say it: "claude-sonnet-4-5-20250929" →
// "Claude Sonnet 4.5", "gpt-4o-mini" → "GPT-4o mini". Display only; the id
// stays the key everywhere else. An id the patterns don't know is returned
// without its date suffix, never guessed.

const DATE_SUFFIX = /-(\d{8}|\d{4}-\d{2}-\d{2})$/;
const CLAUDE = /^claude-(?:(\d+)-(\d+)-)?(opus|sonnet|haiku)(?:-(\d+)(?:-(\d+))?)?$/;
const GPT = /^gpt-([\w.]+?)(?:-(mini|nano))?$/;

export function modelLabel(model: string): string {
  const id = model.replace(DATE_SUFFIX, "");
  const claude = CLAUDE.exec(id);
  if (claude) {
    const [, legacyMajor, legacyMinor, family, major, minor] = claude;
    const version = legacyMajor
      ? `${legacyMajor}.${legacyMinor}`
      : major && minor
        ? `${major}.${minor}`
        : (major ?? "");
    const name = family[0].toUpperCase() + family.slice(1);
    return version ? `Claude ${name} ${version}` : `Claude ${name}`;
  }
  const gpt = GPT.exec(id);
  if (gpt) return gpt[2] ? `GPT-${gpt[1]} ${gpt[2]}` : `GPT-${gpt[1]}`;
  return id;
}
