
interface ValuesProps {
    title: string;
    description: string;
    icon: string;
    }

export const Values: React.FC<ValuesProps> = ({title, description, icon}) => {
  return (
    <div className="values">
        <img src={icon} alt="icon" />
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}
