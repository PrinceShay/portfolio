import { MetadataRoute } from "next";
import { client } from "@/app/lib/sanity"; // Import your Sanity client

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

// Add this function to fetch services
async function fetchServices() {
  const query = `
    *[_type == 'service'] | order(_createdAt desc) {
      "currentSlug": slug.current,
      "_updatedAt": _updatedAt
    }`;
  const services = await client.fetch(query);
  return services;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch projects, blog posts, and services
  const projects = await fetchProjects();
  const blogPosts = await fetchBlogPosts();
  const services = await fetchServices();

  // Base URLs for static pages
  const staticUrls = [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/profil` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/projekte` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/impressum` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/datenschutz` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/kontakt` },
  ];

  // Dynamic URLs for projects with lastmod
  const projectUrls = projects.map(
    (project: { currentSlug: string; _updatedAt: string }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projekte/${project.currentSlug}`,
      lastModified: new Date(project._updatedAt),
    })
  );

  // Dynamic URLs for blog posts with lastmod
  const blogPostUrls = blogPosts.map(
    (post: { currentSlug: string; _updatedAt: string }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.currentSlug}`,
      lastModified: new Date(post._updatedAt),
    })
  );

  // Dynamic URLs for services with lastmod
  const serviceUrls = services.map(
    (service: { currentSlug: string; _updatedAt: string }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/leistungen/${service.currentSlug}`,
      lastModified: new Date(service._updatedAt),
    })
  );

  // Combine all URLs
  return [...staticUrls, ...projectUrls, ...blogPostUrls, ...serviceUrls];
}
