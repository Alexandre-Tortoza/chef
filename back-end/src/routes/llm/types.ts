export type ChatBody = {
  body: { message: string };
};

export type HistoryQuery = {
  query: { skip?: string; take?: string };
};
