interface Announcement {
  id: string;
  attributes: {
    title: string;
    content: string;
    publishedAt: string;
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

interface AnnouncementsData {
  announcements: {
    data: Announcement[];
  };
}
