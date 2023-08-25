export const Sidebar = ({ items }: {
  items: {
    id: number; 
    name: string; 
    href: string; 
  }[]; 
}) => (
  <div>
    {items.map((item) => (
      <div key={item.id}>
        <a role="navigation" href={item.href}>{item.name}</a>
      </div>
    ))}
  </div>
)