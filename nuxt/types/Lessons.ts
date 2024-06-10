interface Lesson {
    id: string;
    attributes: {
      title: string;
      content: string;
      publishedAt: string;
      knowledge: string;
      image: {
        data: {
          attributes: {
            url: string;
            alternativeText: string;
          };
        };
      };
    };
  }
  
  interface LessonsData {
   lessons: {
      data: Lesson[];
    };
  }