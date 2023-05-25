export type Resume = {
  candidate: {
    name: string;
    tagline: string;
    avatar: string;
    website?: { name: string; url: string };
    email?: string;
    profile?: { name: string; url: string };
    location?: string;
    git?: { name: string; url: string };
  };

  experience: Array<{
    organization: string;
    title: string;
    startDate: string;
    endDate?: string;
    details: string[];
    tags: string[];
  }>;

  technicalSkills: string[];

  personalSkills: string[];

  education: Array<{
    institution: string;
    certification: string;
    certifiedOn: string;
  }>;
};
