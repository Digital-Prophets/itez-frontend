export interface Props {
  agents: Agent[];
}

export interface Agent {
  id: number;
  first_name: string;
  last_name: string;
  birthdate: Date;
  agend_ID: string;
  gender: string;
  location: string;
}
