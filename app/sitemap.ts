import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jaincollege.ac.in";
  return [
    { url: base, lastModified: new Date(), priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/admissions`, lastModified: new Date(), priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/programmes/ug`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/programmes/pg`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/programmes/puc-science`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/programmes/puc-commerce`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/programmes/puc-arts`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/enquiry`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
  ];
}
