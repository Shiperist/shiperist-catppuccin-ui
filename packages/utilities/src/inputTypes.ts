const sizeValues = ["small", "medium", "large", "xlarge"] as const;

export type Size = (typeof sizeValues)[number];
