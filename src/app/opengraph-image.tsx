import { ImageResponse } from "next/og";

export const alt = "TEMT — Transport Emissions Management Tool";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ background: "#0A1128", color: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "76px" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, fontWeight: 700, color: "#C7D2FE" }}>TEMT</div>
        <div style={{ display: "flex", marginTop: 42, fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>Stop estimating emissions. Start accounting for them.</div>
        <div style={{ display: "flex", marginTop: 32, color: "#CBD5E1", fontSize: 31, maxWidth: 900 }}>Audit-ready transport emissions management for enterprise finance teams.</div>
      </div>
    ),
    size,
  );
}
