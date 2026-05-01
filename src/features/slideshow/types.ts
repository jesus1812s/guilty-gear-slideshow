export type Slide =
  | {
      type: "hero";
      kicker: string;
      title: string;
      copy: string;
      mediaLabel: string;
      mediaTag: string;
      notes: string;
    }
  | {
      type: "topics";
      kicker: string;
      title: string;
      copy: string;
      topics: [string, string][];
      notes: string;
    }
  | {
      type: "mechanics";
      kicker: string;
      title: string;
      copy: string;
      mechanics: [string, string][];
      notes: string;
    }
  | {
      type: "characters";
      kicker: string;
      title: string;
      copy: string;
      notes: string;
    }
  | {
      type: "videos";
      kicker: string;
      title: string;
      copy: string;
      videos: [string, "youtube" | "local", string][];
      notes: string;
    };

export type VideoState = {
  kind: "youtube" | "local";
  src: string;
};
