import Badge from "./Badge";

type Props ={
  items: string;
  size?: 'small' | 'large';
}

export default function BadgeList({ items, size = 'small' }: Props) {
  const itemList = items.split(',').map(item => item.trim());

  return (
    <div className="flex flex-wrap gap-2">
      {itemList.map((item, index) => (
        <Badge key={index} text={item} size={size} />
      ))}
    </div>
  );
}