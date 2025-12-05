export type ContactSettings = {
  id: string;
  enabled: boolean;
  title: string;
  subtitle: string;
};

export type ContactPerson = {
  id: string;
  title: string;
  description?: string;
  email: string;
  phoneNumber?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};
