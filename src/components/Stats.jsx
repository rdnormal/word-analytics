export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat label="Words" number={stats.numberOfWords} />
      <Stat label="Characters" number={stats.numberOfChars} />
      <Stat label="Instagram" number={stats.insCharsLeft} />
      <Stat label="Facebook" number={stats.fbCharsLeft} />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
