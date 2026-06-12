import type { MetadataRoute } from "next";
import { clinic } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/"
    },
    sitemap: `${clinic.url}/sitemap.xml`
  };
}
