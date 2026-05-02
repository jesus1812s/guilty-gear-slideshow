export type VideoState = {
  kind: "youtube" | "local";
  src: string;
  start?: number;
};

export type TopicItem =
  | [string, string]
  | {
      title: string;
      description: string;
      video?: VideoState;
    };

export type MechanicItem =
  | [string, string]
  | {
      name: string;
      description: string;
      video?: VideoState;
    };

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
      topics: TopicItem[];
      notes: string;
    }
  | {
      type: "mechanics";
      kicker: string;
      title: string;
      copy: string;
      mechanics: MechanicItem[];
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

