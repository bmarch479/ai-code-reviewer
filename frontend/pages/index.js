import { useState } from "react";

export default function Home() {
  const [spec, setSpec] = useState("");
  const [result, setResult] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spec }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Error analyzing code");
    }
  };
  return (
    <div>
      <h1>AI Code Reviewer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={spec}
          onChange={(e) => setSpec(e.target.value)}
          placeholder="Describe what the code should do..."
        />
        <br />
        <button type="submit">Analyze</button>
      </form>
      {result && (
        <div>
          <h2>Proposed Patch</h2>
          <pre>{result.patch}</pre>
          <h2>Explanation</h2>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}
