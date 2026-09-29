export function JsonLd({ data }: { data: object }) {
  // Escapes "<" so the payload can never prematurely close the script tag.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
