export type NewsletterSub = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export type Phone = {
  id: string;
  phone: string;
  reason: string;
  createdAt: string;
};
