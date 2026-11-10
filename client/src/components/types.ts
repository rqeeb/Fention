import type { LucideIcon } from "lucide-react";

export interface Message {
  id: string;
  username: string;
  text: string;
  timestamp: Date;
}

export interface MessageListProps {
  messages: Message[];
}

export interface MessageInputProps {
  onSend: (username: string, text: string) => void;
}

export interface ChatHeaderProps {
  connected: boolean;
}

export interface ChatHeaderChildProps {
  Icon: LucideIcon | string;
  onClick: () => void;
}
