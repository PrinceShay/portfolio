import { MetadataRoute } from "next";
import { client } from "@/app/lib/sanity"; // Importiere deinen Sanity Client

async function fetchProjects() {
  const query = `
    *[_type == 'project'] | order(_createdAt desc) {
      "currentSlug": slug.current,
      "_updatedAt": _updatedAt
    }`;
  const projects = await client.fetch(query);
  return projects;
}

async function fetchBlogPosts() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      "currentSlug": slug.current,
      "_updatedAt": _updatedAt
    }`;
  const blogPosts = await client.fetch(query);
  return blogPosts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Rufe Projekte und Blogposts ab
  const projects = await fetchProjects();
  const blogPosts = await fetchBlogPosts();

  // Basis URLs für statische Seiten
  const staticUrls = [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/profil` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/projekte` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/impressum` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/datenschutz` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/kontakt` },
  ];

  // Dynamische URLs für Projekte mit lastmod
  const projectUrls = projects.map((project: { currentSlug: string, _updatedAt: string }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/projekte/${project.currentSlug}`,
    lastModified: new Date(project._updatedAt)
  }));

  // Dynamische URLs für Blogposts mit lastmod
  const blogPostUrls = blogPosts.map((post: { currentSlug: string, _updatedAt: string }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.currentSlug}`,
    lastModified: new Date(post._updatedAt)
  }));

  // Füge alles zusammen
  return [...staticUrls, ...projectUrls, ...blogPostUrls];
}
