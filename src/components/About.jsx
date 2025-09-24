"use client";

export default function About() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0B0B0F" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Artist Photo */}
          <div className="relative">
            <div className="relative">
              {/* Clean photo placeholder without background */}
              <div className="aspect-[4/5] flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center border-2"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "#7C3AED",
                      borderStyle: "dashed",
                    }}
                  >
                    <svg
                      className="w-16 h-16"
                      style={{ color: "#7C3AED" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <p
                    style={{ color: "#6B7280" }}
                    className="text-sm font-medium"
                  >
                    Place Artist Photo Here
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2"
              style={{ borderColor: "#7C3AED" }}
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2"
              style={{ borderColor: "#7C3AED" }}
            ></div>
          </div>

          {/* Artist Bio Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-px"
                  style={{ backgroundColor: "#7C3AED" }}
                ></div>
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: "#7C3AED" }}
                >
                  Meet The Artist
                </span>
                <div
                  className="w-12 h-px"
                  style={{ backgroundColor: "#7C3AED" }}
                ></div>
              </div>
              <h2
                className="text-5xl font-bold tracking-tight"
                style={{ color: "#F9FAFB" }}
              >
                [Artist Name]
              </h2>
            </div>

            <div className="space-y-6">
              <p
                className="text-xl leading-relaxed"
                style={{ color: "#9CA3AF" }}
              >
                [Your artist's story and passion for the craft goes here.
                Describe their journey, artistic vision, and what makes their
                work unique.]
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "#6B7280" }}
              >
                [Additional details about their experience, specialties, and
                artistic influences.]
              </p>
            </div>

            <div className="flex gap-8 pt-6">
              <div className="text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#7C3AED" }}
                >
                  [X]+
                </div>
                <div
                  className="text-sm font-medium tracking-wide uppercase"
                  style={{ color: "#6B7280" }}
                >
                  Years
                </div>
              </div>

              <div
                className="w-px h-16"
                style={{ backgroundColor: "#1A1A1F" }}
              ></div>

              <div className="text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#7C3AED" }}
                >
                  [X]+
                </div>
                <div
                  className="text-sm font-medium tracking-wide uppercase"
                  style={{ color: "#6B7280" }}
                >
                  Clients
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                className="group relative px-10 py-4 font-bold tracking-wide uppercase transition-all duration-300 border-2"
                style={{
                  backgroundColor: "transparent",
                  color: "#7C3AED",
                  borderColor: "#7C3AED",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#7C3AED";
                  e.target.style.color = "#F9FAFB";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#7C3AED";
                }}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
