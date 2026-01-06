import { useState } from "react";

export default function Home() {
  const [spec, setSpec] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Analyze triggered with spec: " + spec);
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
    </div>
  );
}
