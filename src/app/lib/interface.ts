export interface ProjectCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  id: string;
  categories: string[];
}

export interface FullProject {
  mediaCollection: any; // Adjust this type based on your actual data structure
  heroText: string;
  currentSlug: string;
  title: string;
  publishDate: string;
  seoDescription: string;
  smallDescription: any;
  content: any; // Adjust this type based on your actual data structure
  titleImage: any; // Adjust this type based on your actual data structure
  titleVideo: {
    asset: {
      url: string;
      _id: string;
    };
  };
  categories: string[];
  challengeTitle: string;
  challengeContent: any;
  challengeImage: any; // Adjust this type based on your actual data structure
  solutionTitle: string;
  solutionContent: any;
  solutionImage: any;
  collectionTitle: string;
  collectionText: string;
  collectionHeadline: string;
  collectionBigText: string;
}

export interface NextProjectProps {
  projects: ProjectCard[];
}
