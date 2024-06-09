export interface ProjectCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
    id: string;
    categories: string[];

}

export interface fullProject {
    mediaCollection: any;
    introText: string;
    currentSlug: string;
    title: string;
    content: any;
    titleImage: any;
}

export interface fullProject {
    currentSlug: string;
    title: string;
    content: any; // Adjust this type based on your actual data structure
    titleImage: any; // Adjust this type based on your actual data structure
    titleVideo: {
      asset: {
        url: string;
        _id: string;
      };
    };
    introText: string;
    categories: string[];
  }
  
  