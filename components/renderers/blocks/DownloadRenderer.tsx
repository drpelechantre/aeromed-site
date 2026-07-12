type BlockRendererProps = {
  block: any;
};;

type Media = {
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
};

function formatFileSize(size?: number) {
  if (!size) return null;

  if (size < 1024) {
    return `${size} o`;
  }

  if (size < 1024 * 1024) {
    return `${Math.round(size / 1024)} Ko`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} Mo`;
}

export default function DownloadRenderer({
  block,
}: BlockRendererProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        {block.eyebrow && (
          <div className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">
            {block.eyebrow}
          </div>
        )}

        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
          {block.title}
        </h2>

        {block.description && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            {block.description}
          </p>
        )}

        <div className="mt-12 space-y-4">
          {Array.isArray(block.documents) &&
            block.documents.map((document: any, index: number) => {
              const file =
                typeof document.file === "object"
                  ? (document.file as Media)
                  : null;

              if (!file?.url) {
                return null;
              }

              const fileSize = formatFileSize(file.filesize);

              return (
                <article
                  key={document.id ?? index}
                  className="flex flex-col gap-6 rounded-[26px] border border-slate-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E8F1EB] text-2xl">
                      📄
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {document.title}
                      </h3>

                      {document.description && (
                        <p className="mt-2 leading-relaxed text-slate-600">
                          {document.description}
                        </p>
                      )}

                      {(file.filename || fileSize) && (
                        <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-400">
                          {file.filename && <span>{file.filename}</span>}

                          {file.filename && fileSize && <span>•</span>}

                          {fileSize && <span>{fileSize}</span>}
                        </div>
                      )}
                    </div>
                  </div>

                  <a
                    href={file.url}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-slate-800"
                  >
                    {document.buttonLabel || "Télécharger"}
                  </a>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}