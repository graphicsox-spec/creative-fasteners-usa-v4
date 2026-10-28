type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  titleLines?: string[];
  description?: string;
  descriptionBreakAfter?: string;
  light?: boolean;
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  titleLines,
  description,
  descriptionBreakAfter,
  light = false,
}: SectionHeadingProps) {
  const descriptionBreakPosition = description && descriptionBreakAfter
    ? description.indexOf(descriptionBreakAfter)
    : -1;
  const descriptionBreakIndex = descriptionBreakPosition >= 0 && descriptionBreakAfter
    ? descriptionBreakPosition + descriptionBreakAfter.length
    : -1;

  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <div className="section-heading__kicker">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 aria-label={title}>
        {titleLines
          ? titleLines.map((line) => <span className="section-heading__line" key={line}>{line}</span>)
          : title}
      </h2>
      {description ? (
        <p>
          {descriptionBreakIndex > 0 ? (
            <>
              {description.slice(0, descriptionBreakIndex)}
              <br className="section-heading__desktop-break" />{' '}
              {description.slice(descriptionBreakIndex).trimStart()}
            </>
          ) : description}
        </p>
      ) : null}
    </div>
  );
}
