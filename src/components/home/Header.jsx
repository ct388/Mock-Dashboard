export default function Header({
  date,
  title,
}) {
  return (
    <header className="header">
      <div>
        <p className="header-date">
          {date}
        </p>

        <h1 className="header-title">
          {title}
        </h1>
      </div>
    </header>
  );
}
