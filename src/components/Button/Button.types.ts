export type ButtonProps = {
  children: React.ReactChild;
  variant?: 'wallet' | 'token' | 'swap' | 'max';
  className?: string;
  onClick?: () => Promise<void>;
};
