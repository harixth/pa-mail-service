export enum EVENTNAME {
  REGISTRATION_RECEIVED = 'REGISTRATION_RECEIVED',
}

export type WebhookData = {
  event: EVENTNAME;
  payload: {
    email: string;
  };
};
