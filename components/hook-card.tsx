import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

type HookCardProps = {
  name: string;
  description: string;
  children: React.ReactNode;
};

export function HookCard({ name, description, children }: HookCardProps) {
  return (
    <Card className="relative h-64">
      <CardHeader className="border-b">
        <CardTitle>{name.replace('-demo', '')}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-full">{children}</CardContent>
    </Card>
  );
}
