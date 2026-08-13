import { useEffect, useState } from "react";
import ThemePicker from "./components/ThemePicker";
import PreviewPanel from "./components/PreviewPanel";
import { mergeThemeOverrides, findThemeById } from "./themes";

// Design-System Test Harness: fetches the same /api/design-tokens and
// /api/themes the Angular frontend consumes; the two renders are
// parity-tested against each other for visual/structural consistency.
export default function App() {
  const [tokens, setTokens] = useState(null);
  const [themes, setThemes] = useState([]);
  const [selectedId, setSelectedId] = useState("light");

  useEffect(() => {
    fetch("/api/design-tokens")
      .then((r) => r.json())
      .then(setTokens)
      .catch(() => setTokens(null));
    fetch("/api/themes")
      .then((r) => r.json())
      .then((data) => setThemes(data.themes))
      .catch(() => setThemes([]));
  }, []);

  if (!tokens) return <p>Loading tokens…</p>;

  const theme = findThemeById(themes, selectedId);
  const activeTokens = theme ? mergeThemeOverrides(tokens, theme.overrides) : tokens;

  return (
    <div>
      <h1>Design-System Harness (React)</h1>
      <ThemePicker themes={themes} selectedId={selectedId} onSelect={setSelectedId} />
      <PreviewPanel tokens={activeTokens} />
    </div>
  );
}
