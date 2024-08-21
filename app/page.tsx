import DashboardCard from "@/components/dashboard/DashboardCard";
import { IDashboardCardProps } from "@/interfaces/Dashboard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

const dashboardCardData:Array<IDashboardCardProps> = [
  {
    title: 'Posts',
    count: 100,
    icon: <Newspaper className='text-slate-500' size={72} />
  },
  {
    title: 'Categories',
    count: 12,
    icon: <Folder className='text-slate-500' size={72} />
  },
  {
    title: 'Users',
    count: 750,
    icon: <User className='text-slate-500' size={72} />
  },
  {
    title: 'Comments',
    count: 1200,
    icon: <MessageCircle className='text-slate-500' size={72} />
  }
]

export default function Home() {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
      {dashboardCardData.map((dashboardCard:IDashboardCardProps) => (<DashboardCard key={dashboardCard.title} title={dashboardCard.title} count={dashboardCard.count} icon={dashboardCard.icon}/>))}
    </div>
    </>
  );
}
