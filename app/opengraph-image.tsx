import { ImageResponse } from "next/og";
import { colors } from "@/lib/design-tokens";
import { clinic } from "@/lib/site-data";

export const alt = "Navika Dental Care & Implant Center in Rohini";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.surface} 52%, ${colors.softGray} 100%)`,
          color: colors.textPrimary,
          padding: 72,
          fontFamily: "Arial"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: `1px solid ${colors.border}`,
            borderRadius: 48,
            background: colors.surface,
            padding: 56
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 78,
                height: 78,
                borderRadius: 24,
                background: colors.primary,
                color: colors.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 42,
                fontWeight: 900
              }}
            >
              N
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 34, fontWeight: 900 }}>
                {clinic.name}
              </span>
              <span style={{ fontSize: 22, color: colors.textSecondary, marginTop: 8 }}>
                Dentist in Rohini | Dental Implant Specialist
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <h1
              style={{
                fontSize: 78,
                lineHeight: 1.5,
                letterSpacing: -4,
                margin: 0,
                maxWidth: 920
              }}
            >
              Dental Implants & Smile Care in Rohini
            </h1>
            <p style={{ fontSize: 30, color: colors.textSecondary, margin: 0 }}>
              Call or WhatsApp Navika Dental today.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 24,
              fontWeight: 800,
              color: colors.primary
            }}
          >
            <span>Experienced Dental Team</span>
            <span>-</span>
            <span>Modern Equipment</span>
            <span>-</span>
            <span>Rohini, Delhi</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
